#!/usr/bin/env python3
"""Audit compiled HTML image alt coverage after `pnpm build`."""
from __future__ import annotations

import json
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
OUT = ROOT / 'docs/built-image-alt-audit.json'

records = []
for html_path in sorted(DIST.rglob('*.html')):
    soup = BeautifulSoup(html_path.read_text(encoding='utf-8'), 'html.parser')
    for index, img in enumerate(soup.find_all('img'), start=1):
        records.append({
            'html_file': html_path.relative_to(DIST).as_posix(),
            'index': index,
            'src': img.get('src', ''),
            'has_alt_attribute': img.has_attr('alt'),
            'alt': img.get('alt', ''),
        })

missing = [record for record in records if not record['has_alt_attribute']]
empty_alt = [record for record in records if record['has_alt_attribute'] and not record['alt'].strip()]
article_images = [record for record in records if record['src'].startswith('/images/articles/')]
article_missing = [record for record in article_images if not record['alt'].strip()]

payload = {
    'total_compiled_img_tags': len(records),
    'img_tags_missing_alt_attribute': len(missing),
    'img_tags_with_empty_alt': len(empty_alt),
    'empty_alt_records': empty_alt,
    'article_media_img_tags': len(article_images),
    'article_media_with_empty_alt': len(article_missing),
    'missing_alt_records': missing,
}
OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps(payload, ensure_ascii=False, indent=2))
if missing or article_missing:
    raise SystemExit('Image alt audit failed; review the JSON report.')
