# Article Media and Image Alt Operations Guide

This document records where image alt information is stored in the Astro project and how to regenerate it from the WordPress export before a production migration.

## Canonical Locations

| Purpose | Astro location | What it contains |
|---|---|---|
| Full asset provenance ledger | `docs/wordpress-to-astro-image-alt-ledger.json` | Every local `public/images/` asset, its exact Astro save path, matching WordPress upload URL where available, original WordPress alt, and review status. |
| Spreadsheet-friendly ledger | `docs/wordpress-to-astro-image-alt-ledger.csv` | The same per-file mapping for manual review in a spreadsheet. |
| Runtime inherited alt data | `src/data/imageAltManifest.ts` | 138 exact filename matches with meaningful WordPress alt. Project/card templates call `getInheritedImageAlt()` before falling back to local contextual copy. |
| Article media source record | `docs/wordpress-article-media-source.json` | Original WordPress featured/inline image URLs, alt and original heading context. |
| Article media copy record | `docs/wordpress-article-media-migration.json` | The exact Astro destination, source URL, original alt and fallback-review status for all article media. |
| Article media files | `public/images/articles/<article-slug>/` | 14 restored feature images and 4 restored inline article images. |
| Article runtime media metadata | `src/data/articleMedia.ts` | Generated article cover/inline image records with original alt source provenance. |
| Editable article content | `src/content/articles/<article-slug>.md` | One Markdown file per article. Frontmatter holds title, description, date, category, original WordPress URL and cover data; Markdown body carries inline image alt. |

## Current Coverage

The WordPress export includes 569 image attachment records. The Astro project currently contains 194 pre-existing local image assets, of which 138 have an exact filename match to a WordPress image with meaningful alt text; those 138 are available in `imageAltManifest.ts`. The remaining 56 files have no exact filename match in the WordPress export and remain explicitly flagged for manual review in the ledger instead of being assigned fabricated WordPress provenance.

Article migration restored all 14 WordPress featured images and all 4 known inline images. Every copied article image has a source URL and source alt saved in the JSON migration record. Where WordPress supplied an empty or generic alt, the generated metadata uses `editorial-fallback-needs-review`; this prevents a vague old value such as `home` or `news` from being treated as an approved SEO description.

## Regeneration Order

Run the scripts from the repository root only after placing the verified WordPress WXR export at the source path noted inside each script:

```bash
python3 scripts/generate-wordpress-alt-ledger.py
python3 scripts/build-image-alt-manifest.py
python3 scripts/audit-wordpress-article-media.py
python3 scripts/migrate-wordpress-article-media.py
python3 scripts/migrate-blog-to-content-collection.py
pnpm build
```

The first two scripts produce the full-site image ledger and runtime inherited-alt module. The next three scripts generate the article media source record, copy only article media used by published posts, and rebuild the editable Markdown content files. Review any `editorial-fallback-needs-review` entries before production deployment.

## Preview Verification

On the article migration branch, the rebuilt page `/articles/why-are-most-solar-roofs-black/` was visually checked. It renders the restored WordPress cover image, all three original inline images placed under their original H2 sections, the original alt text in HTML, a generated table of contents and the preserved article body.
