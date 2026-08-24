#!/usr/bin/env python3
"""Generate a traceable WordPress-to-Astro image alt migration ledger.

This script is deliberately read-only with respect to WordPress. It reads the WXR export,
scans Astro's local public images, and writes documentation ledgers for review.
"""
from __future__ import annotations

import csv
import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
WXR = Path('/home/ubuntu/migration/sunlitsolarroof.WordPress.2026-07-01.xml')
PUBLIC_IMAGES = ROOT / 'public/images'
DOCS = ROOT / 'docs'

NS = {
    'wp': 'http://wordpress.org/export/1.2/',
    'content': 'http://purl.org/rss/1.0/modules/content/',
}
IMAGE_EXTENSIONS = {'.webp', '.jpg', '.jpeg', '.png', '.svg', '.gif', '.avif'}


def classify_legacy_alt(filename: str, alt: str) -> str:
    """Classify source alt without silently discarding legacy data."""
    normalized = alt.strip().lower()
    decorative_hints = ('icon', 'arrow', 'logo', 'linebg', 'background', 'bg', 'positioning', 'faq')
    generic_values = {'', 'home', 'news', 'address', 'english', 'download', 'lumina', 'storm', 'roof tiles 3', 'solutions banner'}
    if normalized in generic_values or any(hint in filename.lower() for hint in decorative_hints):
        return 'legacy_blank_or_generic_review_needed'
    return 'legacy_alt_inherited'


def extract_wordpress_attachments() -> list[dict]:
    attachments: list[dict] = []
    for _, elem in ET.iterparse(WXR, events=('end',)):
        if elem.tag != 'item':
            continue
        post_type = (elem.findtext('wp:post_type', namespaces=NS) or '').strip()
        if post_type != 'attachment':
            elem.clear()
            continue
        post_id = (elem.findtext('wp:post_id', namespaces=NS) or '').strip()
        title = (elem.findtext('title') or '').strip()
        link = (elem.findtext('link') or '').strip()
        meta: dict[str, str] = {}
        for postmeta in elem.findall('wp:postmeta', NS):
            key = (postmeta.findtext('wp:meta_key', default='', namespaces=NS) or '').strip()
            value = (postmeta.findtext('wp:meta_value', default='', namespaces=NS) or '').strip()
            meta[key] = value
        upload_path = meta.get('_wp_attached_file', '')
        filename = Path(unquote(upload_path)).name
        if Path(filename).suffix.lower() not in IMAGE_EXTENSIONS:
            elem.clear()
            continue
        legacy_alt = meta.get('_wp_attachment_image_alt', '').strip()
        attachments.append({
            'wordpress_attachment_id': post_id,
            'wordpress_title': title,
            'wordpress_attachment_url': link,
            'wordpress_upload_path': upload_path,
            'wordpress_public_url': f'https://www.sunlitsolarroof.com/wp-content/uploads/{upload_path}',
            'filename': filename,
            'legacy_alt': legacy_alt,
            'alt_status': classify_legacy_alt(filename, legacy_alt),
        })
        elem.clear()
    return attachments


def scan_local_images() -> list[dict]:
    local: list[dict] = []
    for path in sorted(PUBLIC_IMAGES.rglob('*')):
        if not path.is_file() or path.suffix.lower() not in IMAGE_EXTENSIONS:
            continue
        local.append({
            'astro_public_path': '/' + path.relative_to(ROOT / 'public').as_posix(),
            'astro_file_path': path.relative_to(ROOT).as_posix(),
            'filename': path.name,
        })
    return local


def main() -> None:
    DOCS.mkdir(exist_ok=True)
    attachments = extract_wordpress_attachments()
    by_filename: dict[str, list[dict]] = {}
    for item in attachments:
        by_filename.setdefault(item['filename'].lower(), []).append(item)

    ledger: list[dict] = []
    for local in scan_local_images():
        matches = by_filename.get(local['filename'].lower(), [])
        if len(matches) == 1:
            source = matches[0]
            ledger.append({
                **local,
                'mapping_status': source['alt_status'],
                'wordpress_upload_path': source['wordpress_upload_path'],
                'wordpress_public_url': source['wordpress_public_url'],
                'wordpress_attachment_id': source['wordpress_attachment_id'],
                'legacy_alt': source['legacy_alt'],
            })
        elif len(matches) > 1:
            ledger.append({
                **local,
                'mapping_status': 'ambiguous_filename_requires_review',
                'wordpress_upload_path': '',
                'wordpress_public_url': '',
                'wordpress_attachment_id': '',
                'legacy_alt': '',
            })
        else:
            ledger.append({
                **local,
                'mapping_status': 'astro_asset_without_exact_wordpress_filename_match',
                'wordpress_upload_path': '',
                'wordpress_public_url': '',
                'wordpress_attachment_id': '',
                'legacy_alt': '',
            })

    json_path = DOCS / 'wordpress-to-astro-image-alt-ledger.json'
    csv_path = DOCS / 'wordpress-to-astro-image-alt-ledger.csv'
    json_path.write_text(json.dumps({
        'generated_from': str(WXR),
        'rules': {
            'legacy_alt_inherited': 'Exact filename matched an existing WordPress attachment with meaningful alt text.',
            'legacy_blank_or_generic_review_needed': 'Exact filename matched, but WordPress alt was empty/generic or the filename suggests a decorative asset.',
            'astro_asset_without_exact_wordpress_filename_match': 'Local Astro asset has no exact basename match in the WordPress export; retain current rendered alt or review manually.',
            'ambiguous_filename_requires_review': 'More than one WordPress attachment shares this filename.',
        },
        'summary': {
            'wordpress_image_attachments': len(attachments),
            'astro_local_image_assets': len(ledger),
            'by_mapping_status': {
                status: sum(1 for row in ledger if row['mapping_status'] == status)
                for status in sorted({row['mapping_status'] for row in ledger})
            },
        },
        'assets': ledger,
    }, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

    fields = ['astro_public_path', 'astro_file_path', 'filename', 'mapping_status', 'wordpress_upload_path', 'wordpress_public_url', 'wordpress_attachment_id', 'legacy_alt']
    with csv_path.open('w', encoding='utf-8', newline='') as fh:
        writer = csv.DictWriter(fh, fieldnames=fields)
        writer.writeheader()
        writer.writerows(ledger)

    print(f'Wrote {json_path.relative_to(ROOT)} and {csv_path.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
