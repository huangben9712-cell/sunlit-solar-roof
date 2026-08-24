#!/usr/bin/env python3
"""Extract article featured/inline media from the WordPress WXR export.

The output records original WordPress alt text and the closest preceding heading so that
inline figures can be restored near their original editorial context.
"""
from __future__ import annotations

import json
import xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import unquote, urlparse
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
WXR = Path('/home/ubuntu/migration/sunlitsolarroof.WordPress.2026-07-01.xml')
OUT = ROOT / 'docs/wordpress-article-media-source.json'
NS = {'wp': 'http://wordpress.org/export/1.2/', 'content': 'http://purl.org/rss/1.0/modules/content/'}

attachments: dict[str, dict] = {}
posts: list[dict] = []
for _, elem in ET.iterparse(WXR, events=('end',)):
    if elem.tag != 'item':
        continue
    post_type = (elem.findtext('wp:post_type', namespaces=NS) or '').strip()
    status = (elem.findtext('wp:status', namespaces=NS) or '').strip()
    post_id = (elem.findtext('wp:post_id', namespaces=NS) or '').strip()
    title = (elem.findtext('title') or '').strip()
    slug = (elem.findtext('wp:post_name', namespaces=NS) or '').strip()
    content = elem.findtext('content:encoded', namespaces=NS) or ''
    meta: dict[str, str] = {}
    for postmeta in elem.findall('wp:postmeta', NS):
        key = (postmeta.findtext('wp:meta_key', default='', namespaces=NS) or '').strip()
        value = (postmeta.findtext('wp:meta_value', default='', namespaces=NS) or '').strip()
        meta[key] = value
    if post_type == 'attachment':
        file_path = meta.get('_wp_attached_file', '')
        attachments[post_id] = {
            'uploadPath': file_path,
            'sourceUrl': f'https://www.sunlitsolarroof.com/wp-content/uploads/{file_path}',
            'filename': Path(unquote(file_path)).name,
            'sourceAlt': meta.get('_wp_attachment_image_alt', '').strip(),
        }
    elif post_type == 'post' and status == 'publish':
        soup = BeautifulSoup(content, 'html.parser')
        inline = []
        last_heading = ''
        for node in soup.find_all(['h2', 'h3', 'h4', 'img']):
            if node.name in {'h2', 'h3', 'h4'}:
                last_heading = node.get_text(' ', strip=True)
                continue
            src = node.get('src', '').strip()
            if not src:
                continue
            inline.append({
                'sourceUrl': src,
                'filename': Path(unquote(urlparse(src).path)).name,
                'sourceAlt': node.get('alt', '').strip(),
                'caption': node.get('data-caption', '').strip(),
                'afterHeading': last_heading,
            })
        posts.append({
            'slug': slug,
            'title': title,
            'featured': attachments.get(meta.get('_thumbnail_id', '').strip(), {}),
            'inline': inline,
        })
    elem.clear()

OUT.parent.mkdir(exist_ok=True)
OUT.write_text(json.dumps({'posts': posts}, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(f'Wrote {OUT.relative_to(ROOT)}')
