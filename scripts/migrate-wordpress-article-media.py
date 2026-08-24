#!/usr/bin/env python3
"""Copy published WordPress article media into Astro and generate a traceable metadata module.

The script reads docs/wordpress-article-media-source.json produced from the WordPress WXR
export. It downloads only media used by the 14 published articles, saves it beneath
public/images/articles/<article-slug>/, and writes source/alt provenance to both a TypeScript
module and a JSON ledger. It never modifies the WordPress site.
"""
from __future__ import annotations

import json
import re
import urllib.request
from pathlib import Path
from urllib.parse import quote, unquote, urlparse, urlsplit, urlunsplit

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'docs/wordpress-article-media-source.json'
PUBLIC_DIR = ROOT / 'public/images/articles'
DATA_OUT = ROOT / 'src/data/articleMedia.ts'
LEDGER_OUT = ROOT / 'docs/wordpress-article-media-migration.json'
GENERIC_ALT = {'', 'home', 'news', 'roof tiles 3', 'solutions banner', 'about sunlit'}


def suffix_for(url: str, fallback: str = '.webp') -> str:
    suffix = Path(unquote(urlparse(url).path)).suffix.lower()
    return suffix if suffix in {'.webp', '.jpg', '.jpeg', '.png', '.avif'} else fallback


def safe_alt(source_alt: str, article_title: str, role: str) -> tuple[str, str]:
    alt = source_alt.strip()
    if alt.lower() not in GENERIC_ALT:
        return alt, 'wordpress-inherited'
    # Do not invent details that are not visible in the source. This keeps the image accessible
    # while flagging it in the ledger for editorial review before production migration.
    return f'{role} for {article_title}', 'editorial-fallback-needs-review'


def download(url: str, destination: Path) -> None:
    parts = urlsplit(url)
    safe_url = urlunsplit((parts.scheme, parts.netloc, quote(unquote(parts.path)), parts.query, parts.fragment))
    request = urllib.request.Request(safe_url, headers={'User-Agent': 'SunlitMigrationAudit/1.0'})
    with urllib.request.urlopen(request, timeout=45) as response:
        payload = response.read()
    if len(payload) < 64:
        raise RuntimeError(f'Downloaded file is unexpectedly small: {url}')
    destination.write_bytes(payload)


def ts_quote(value: str) -> str:
    return value.replace('\\', '\\\\').replace("'", "\\'").replace('\n', ' ')


def main() -> None:
    source = json.loads(SOURCE.read_text(encoding='utf-8'))
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    entries = []
    failures = []

    for post in source['posts']:
        slug = post['slug']
        title = post['title']
        folder = PUBLIC_DIR / slug
        folder.mkdir(parents=True, exist_ok=True)
        cover = post.get('featured') or {}
        cover_record = None
        if cover.get('sourceUrl'):
            ext = suffix_for(cover['sourceUrl'])
            destination = folder / f'cover{ext}'
            try:
                download(cover['sourceUrl'], destination)
                alt, alt_status = safe_alt(cover.get('sourceAlt', ''), title, 'Article cover image')
                cover_record = {
                    'src': '/' + destination.relative_to(ROOT / 'public').as_posix(),
                    'alt': alt,
                    'altStatus': alt_status,
                    'wordpressSourceUrl': cover['sourceUrl'],
                    'wordpressUploadPath': cover.get('uploadPath', ''),
                    'wordpressSourceAlt': cover.get('sourceAlt', ''),
                }
            except Exception as error:
                failures.append({'slug': slug, 'role': 'cover', 'sourceUrl': cover['sourceUrl'], 'error': str(error)})
        inline_records = []
        for index, image in enumerate(post.get('inline', []), start=1):
            ext = suffix_for(image['sourceUrl'])
            destination = folder / f'inline-{index:02d}{ext}'
            try:
                download(image['sourceUrl'], destination)
                alt, alt_status = safe_alt(image.get('sourceAlt', ''), title, 'Article inline image')
                inline_records.append({
                    'src': '/' + destination.relative_to(ROOT / 'public').as_posix(),
                    'alt': alt,
                    'altStatus': alt_status,
                    'afterHeading': image.get('afterHeading', ''),
                    'caption': image.get('caption', ''),
                    'wordpressSourceUrl': image['sourceUrl'],
                    'wordpressSourceAlt': image.get('sourceAlt', ''),
                })
            except Exception as error:
                failures.append({'slug': slug, 'role': f'inline-{index}', 'sourceUrl': image['sourceUrl'], 'error': str(error)})
        entries.append({'slug': slug, 'cover': cover_record, 'inline': inline_records})

    lines = [
        '/**',
        ' * Generated from the WordPress WXR export by scripts/migrate-wordpress-article-media.py.',
        ' * WordPress source URLs and original alt values are preserved in the migration ledger.',
        ' * Entries with altStatus `editorial-fallback-needs-review` have no usable original alt.',
        ' */',
        '',
        "export type ArticleMediaAltStatus = 'wordpress-inherited' | 'editorial-fallback-needs-review';",
        '',
        'export interface ArticleImage {',
        '  src: string;',
        '  alt: string;',
        '  altStatus: ArticleMediaAltStatus;',
        '  caption?: string;',
        '  afterHeading?: string;',
        '  wordpressSourceUrl: string;',
        '  wordpressSourceAlt: string;',
        '}',
        '',
        'export interface ArticleMedia {',
        '  cover?: ArticleImage;',
        '  inline: ArticleImage[];',
        '}',
        '',
        'export const articleMediaBySlug: Record<string, ArticleMedia> = {',
    ]
    for entry in entries:
        lines.append(f"  '{ts_quote(entry['slug'])}': {{")
        if entry['cover']:
            cover = entry['cover']
            lines.extend([
                '    cover: {',
                f"      src: '{ts_quote(cover['src'])}',",
                f"      alt: '{ts_quote(cover['alt'])}',",
                f"      altStatus: '{cover['altStatus']}',",
                f"      wordpressSourceUrl: '{ts_quote(cover['wordpressSourceUrl'])}',",
                f"      wordpressSourceAlt: '{ts_quote(cover['wordpressSourceAlt'])}',",
                '    },',
            ])
        lines.append('    inline: [')
        for image in entry['inline']:
            lines.extend([
                '      {',
                f"        src: '{ts_quote(image['src'])}',",
                f"        alt: '{ts_quote(image['alt'])}',",
                f"        altStatus: '{image['altStatus']}',",
                f"        afterHeading: '{ts_quote(image.get('afterHeading', ''))}',",
                f"        caption: '{ts_quote(image.get('caption', ''))}',",
                f"        wordpressSourceUrl: '{ts_quote(image['wordpressSourceUrl'])}',",
                f"        wordpressSourceAlt: '{ts_quote(image['wordpressSourceAlt'])}',",
                '      },',
            ])
        lines.extend(['    ],', '  },'])
    lines.extend(['};', ''])
    DATA_OUT.write_text('\n'.join(lines), encoding='utf-8')
    LEDGER_OUT.write_text(json.dumps({
        'source': 'WordPress WXR export through docs/wordpress-article-media-source.json',
        'storage_root': 'public/images/articles/<article-slug>/',
        'article_count': len(entries),
        'cover_count': sum(1 for item in entries if item['cover']),
        'inline_count': sum(len(item['inline']) for item in entries),
        'failures': failures,
        'articles': entries,
    }, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'Wrote {DATA_OUT.relative_to(ROOT)} and {LEDGER_OUT.relative_to(ROOT)}')
    print(f'Copied {sum(1 for item in entries if item["cover"])} covers and {sum(len(item["inline"]) for item in entries)} inline images')
    if failures:
        raise SystemExit(f'{len(failures)} media downloads failed; see {LEDGER_OUT.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
