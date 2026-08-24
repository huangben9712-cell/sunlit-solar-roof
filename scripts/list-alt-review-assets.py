#!/usr/bin/env python3
"""Emit exact local image paths for assets that have no inheritable WordPress alt."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ledger = json.loads((ROOT / 'docs/wordpress-to-astro-image-alt-ledger.json').read_text(encoding='utf-8'))
assets = [
    item for item in ledger['assets']
    if item['mapping_status'] != 'legacy_alt_inherited'
]
output = [
    {
        'astro_public_path': item['astro_public_path'],
        'absolute_file_path': str(ROOT / item['astro_file_path']),
        'filename': item['filename'],
        'mapping_status': item['mapping_status'],
    }
    for item in assets
]
print(json.dumps(output, ensure_ascii=False, indent=2))
