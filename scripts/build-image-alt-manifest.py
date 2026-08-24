#!/usr/bin/env python3
"""Create a typed Astro image-alt manifest from the migration ledger.

Only meaningful exact WordPress filename matches are emitted as inherited records.
All files, including unmatched assets and decorative candidates, remain documented in
`docs/wordpress-to-astro-image-alt-ledger.*` for human review.
"""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LEDGER = ROOT / 'docs/wordpress-to-astro-image-alt-ledger.json'
OUTPUT = ROOT / 'src/data/imageAltManifest.ts'

ledger = json.loads(LEDGER.read_text(encoding='utf-8'))
records = [
    asset for asset in ledger['assets']
    if asset['mapping_status'] == 'legacy_alt_inherited' and asset['legacy_alt'].strip()
]
records.sort(key=lambda item: item['astro_public_path'])

lines = [
    '/**',
    ' * Generated from the WordPress WXR export by scripts/build-image-alt-manifest.py.',
    ' * Do not hand-edit inherited entries: regenerate from the ledger when source media changes.',
    ' * Full provenance, unmatched assets, and review statuses live in',
    ' * docs/wordpress-to-astro-image-alt-ledger.json and .csv.',
    ' */',
    '',
    "export type ImageAltSource = 'wordpress-inherited';",
    '',
    'export interface ImageAltRecord {',
    '  alt: string;',
    '  source: ImageAltSource;',
    '  wordpressUploadPath: string;',
    '  wordpressPublicUrl: string;',
    '  wordpressAttachmentId: string;',
    '}',
    '',
    'export const inheritedImageAltByPath: Record<string, ImageAltRecord> = {',
]
for item in records:
    def esc(value: str) -> str:
        return value.replace('\\', '\\\\').replace("'", "\\'").replace('\n', ' ')
    lines.append(f"  '{esc(item['astro_public_path'])}': {{")
    lines.append(f"    alt: '{esc(item['legacy_alt'])}',")
    lines.append("    source: 'wordpress-inherited',")
    lines.append(f"    wordpressUploadPath: '{esc(item['wordpress_upload_path'])}',")
    lines.append(f"    wordpressPublicUrl: '{esc(item['wordpress_public_url'])}',")
    lines.append(f"    wordpressAttachmentId: '{esc(item['wordpress_attachment_id'])}',")
    lines.append('  },')
lines.extend([
    '};',
    '',
    '/** Return the inherited WordPress alt text when the current asset has a verified source match. */',
    'export function getInheritedImageAlt(path: string, fallback: string): string {',
    '  return inheritedImageAltByPath[path]?.alt || fallback;',
    '}',
    '',
])
OUTPUT.write_text('\n'.join(lines), encoding='utf-8')
print(f'Wrote {OUTPUT.relative_to(ROOT)} with {len(records)} inherited alt records')
