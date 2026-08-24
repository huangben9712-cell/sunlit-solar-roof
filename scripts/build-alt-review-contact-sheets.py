#!/usr/bin/env python3
"""Build contact sheets for visually reviewing Astro assets that lack WordPress alt provenance."""
from __future__ import annotations

import json
import math
from collections import defaultdict
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
INPUT = ROOT / 'docs/alt-review-assets.json'
OUT_DIR = ROOT / 'docs/alt-review-contact-sheets'
MANIFEST = ROOT / 'docs/alt-review-visual-batches.json'

TILE_W, TILE_H = 300, 254
IMAGE_H = 190
LABEL_H = TILE_H - IMAGE_H
MARGIN = 18
COLS = 3


def category_for(asset: dict) -> str:
    path = asset['astro_public_path']
    parts = path.split('/')
    if len(parts) >= 4 and parts[2] == 'components':
        return f'components-{parts[3]}'
    if len(parts) >= 3:
        return parts[2]
    return 'other'


def display_label(asset: dict) -> str:
    path = asset['astro_public_path'].replace('/images/', '')
    return path


def safe_image(path: Path) -> Image.Image:
    with Image.open(path) as raw:
        image = ImageOps.exif_transpose(raw).convert('RGB')
    canvas = Image.new('RGB', (TILE_W, IMAGE_H), 'white')
    image.thumbnail((TILE_W - 8, IMAGE_H - 8))
    canvas.paste(image, ((TILE_W - image.width) // 2, (IMAGE_H - image.height) // 2))
    return canvas


def wrap(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.ImageFont, width: int) -> list[str]:
    words = text.split('/')
    lines, current = [], ''
    for word in words:
        next_line = f'{current}/{word}' if current else word
        if draw.textlength(next_line, font=font) <= width:
            current = next_line
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def main() -> None:
    assets = json.loads(INPUT.read_text(encoding='utf-8'))
    groups: dict[str, list[dict]] = defaultdict(list)
    for asset in assets:
        groups[category_for(asset)].append(asset)
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    font = ImageFont.load_default()
    batches = []
    for category, items in sorted(groups.items()):
        rows = math.ceil(len(items) / COLS)
        sheet = Image.new('RGB', (MARGIN + COLS * (TILE_W + MARGIN), MARGIN + rows * (TILE_H + MARGIN)), '#edf6f1')
        draw = ImageDraw.Draw(sheet)
        for index, asset in enumerate(items):
            col, row = index % COLS, index // COLS
            x, y = MARGIN + col * (TILE_W + MARGIN), MARGIN + row * (TILE_H + MARGIN)
            tile = Image.new('RGB', (TILE_W, TILE_H), 'white')
            image = safe_image(Path(asset['absolute_file_path']))
            tile.paste(image, (0, 0))
            tile_draw = ImageDraw.Draw(tile)
            label = display_label(asset)
            label_lines = wrap(tile_draw, label, font, TILE_W - 14)[-4:]
            for line_index, line in enumerate(label_lines):
                tile_draw.text((7, IMAGE_H + 7 + line_index * 11), line, fill='#17232b', font=font)
            tile_draw.rectangle((0, 0, TILE_W - 1, TILE_H - 1), outline='#b8cabb', width=1)
            sheet.paste(tile, (x, y))
        filename = f'{category}.png'
        sheet.save(OUT_DIR / filename, 'PNG', optimize=True)
        batches.append({
            'category': category,
            'sheet_path': str((OUT_DIR / filename).relative_to(ROOT)),
            'count': len(items),
            'assets': items,
        })
    MANIFEST.write_text(json.dumps({'total': len(assets), 'batches': batches}, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f'Wrote {len(batches)} contact sheets to {OUT_DIR.relative_to(ROOT)}')
    for batch in batches:
        print(f"{batch['category']}: {batch['count']}")


if __name__ == '__main__':
    main()
