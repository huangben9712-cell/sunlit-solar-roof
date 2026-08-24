#!/usr/bin/env python3
"""Convert the existing TypeScript blog strings into maintainable Astro content files.

The original article text remains the source of truth for body copy. WordPress article media
and its original alt values are inserted from the article-media migration ledger. The script
writes one Markdown file per article to src/content/articles/ and an Astro content schema.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BLOG = ROOT / 'src/data/blog.ts'
MEDIA_LEDGER = ROOT / 'docs/wordpress-article-media-migration.json'
CONTENT_DIR = ROOT / 'src/content/articles'
CONFIG = ROOT / 'src/content/config.ts'

ENTRY_RE = re.compile(
    r"id:\s*(?P<id>\d+),\s*"
    r"slug:\s*\"(?P<slug>[^\"]+)\",\s*"
    r"title:\s*\"(?P<title>(?:[^\"\\]|\\.)*)\",\s*"
    r"category:\s*\"(?P<category>(?:[^\"\\]|\\.)*)\",\s*"
    r"priority:\s*\"(?P<priority>P[012])\",\s*"
    r"date:\s*\"(?P<date>[^\"]+)\",\s*"
    r"summary:\s*\"(?P<summary>(?:[^\"\\]|\\.)*)\",\s*"
    r"content:\s*`(?P<content>.*?)`,\s*"
    r"sourceUrl:\s*\"(?P<sourceUrl>[^\"]+)\"",
    re.S,
)


def unescape_ts_string(value: str) -> str:
    return value.replace('\\"', '"').replace("\\'", "'").replace('\\n', '\n')


def yaml_quote(value: str) -> str:
    # JSON is valid YAML scalar syntax and safely preserves punctuation/unicode.
    return json.dumps(value, ensure_ascii=False)


def normalize_heading(value: str) -> str:
    value = re.sub(r'^#+\s*', '', value).strip()
    value = re.sub(r'[*_`]', '', value)
    value = re.sub(r'\s+', ' ', value)
    return value.lower()


def clean_markdown(content: str) -> list[str]:
    lines = content.splitlines()
    result: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        # Empty h3 placeholders in the old TypeScript conversion have no content value.
        if stripped in {'###', '##', '#'}:
            i += 1
            continue
        # Legacy conversion represented list bullets as a lone dash followed by a blank line.
        if stripped == '-' and i + 2 < len(lines) and not lines[i + 1].strip() and lines[i + 2].strip():
            result.append('- ' + lines[i + 2].strip())
            i += 3
            continue
        result.append(line.rstrip())
        i += 1
    # Collapse excessive blank runs while keeping normal Markdown paragraph spacing.
    normalized: list[str] = []
    blank_run = 0
    for line in result:
        if not line.strip():
            blank_run += 1
            if blank_run <= 1:
                normalized.append('')
        else:
            blank_run = 0
            normalized.append(line)
    return normalized


def insert_inline_media(lines: list[str], inline: list[dict]) -> list[str]:
    by_heading: dict[str, list[dict]] = {}
    unanchored: list[dict] = []
    for image in inline:
        key = normalize_heading(image.get('afterHeading', ''))
        if key:
            by_heading.setdefault(key, []).append(image)
        else:
            unanchored.append(image)

    output: list[str] = []
    inserted: set[str] = set()
    for line in lines:
        output.append(line)
        if re.match(r'^#{2,4}\s+', line):
            key = normalize_heading(line)
            for image in by_heading.get(key, []):
                output.extend(['', f"![{image['alt']}]({image['src']})", ''])
                inserted.add(image['src'])
    remaining = [image for image in inline if image['src'] not in inserted] + unanchored
    if remaining:
        output.extend(['', '## Visual References', ''])
        for image in remaining:
            output.extend([f"![{image['alt']}]({image['src']})", ''])
    return output


def main() -> None:
    CONTENT_DIR.mkdir(parents=True, exist_ok=True)
    media = json.loads(MEDIA_LEDGER.read_text(encoding='utf-8'))
    media_by_slug = {item['slug']: item for item in media['articles']}
    source = BLOG.read_text(encoding='utf-8')
    entries = list(ENTRY_RE.finditer(source))
    if len(entries) != 14:
        raise RuntimeError(f'Expected 14 blog entries, found {len(entries)}')

    for match in entries:
        item = {key: unescape_ts_string(value) for key, value in match.groupdict().items()}
        media_item = media_by_slug.get(item['slug'], {'cover': None, 'inline': []})
        frontmatter = [
            '---',
            f"title: {yaml_quote(item['title'])}",
            f"description: {yaml_quote(item['summary'])}",
            f"date: {item['date']}",
            f"category: {yaml_quote(item['category'])}",
            f"priority: {item['priority']}",
            f"legacyUrl: {yaml_quote(item['sourceUrl'])}",
        ]
        if media_item.get('cover'):
            cover = media_item['cover']
            frontmatter.extend([
                'cover:',
                f"  src: {yaml_quote(cover['src'])}",
                f"  alt: {yaml_quote(cover['alt'])}",
                f"  altStatus: {cover['altStatus']}",
                f"  wordpressSourceUrl: {yaml_quote(cover['wordpressSourceUrl'])}",
                f"  wordpressSourceAlt: {yaml_quote(cover['wordpressSourceAlt'])}",
            ])
        frontmatter.extend(['---', ''])
        body_lines = insert_inline_media(clean_markdown(item['content']), media_item.get('inline', []))
        output = '\n'.join(frontmatter + body_lines).rstrip() + '\n'
        (CONTENT_DIR / f"{item['slug']}.md").write_text(output, encoding='utf-8')

    CONFIG.parent.mkdir(parents=True, exist_ok=True)
    CONFIG.write_text("""import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    priority: z.enum(['P0', 'P1', 'P2']),
    legacyUrl: z.string().url(),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
      altStatus: z.enum(['wordpress-inherited', 'editorial-fallback-needs-review']),
      wordpressSourceUrl: z.string().url(),
      wordpressSourceAlt: z.string(),
    }).optional(),
  }),
});

export const collections = { articles };
""", encoding='utf-8')
    print(f'Wrote {len(entries)} Markdown articles to {CONTENT_DIR.relative_to(ROOT)}')
    print(f'Wrote {CONFIG.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
