# Media hosting on Cloudflare R2

Video moved out of the build on 2026-10-22. The site deploys in ~1/6 of its former size and
videos are served from an optimised cache layer instead of the Pages origin.

## Why

`dist/` was 427 MiB, of which 354 MiB was 54 `.mp4` files. Every deploy re-uploaded all of
it, and Cloudflare Pages rejects any single file over 25 MiB — one installation video
already had to be re-encoded to 18 MiB to fit. Neither constraint applies to object
storage.

| | Before | After |
|---|---|---|
| `dist/` size | 427 MiB | **73.6 MiB** |
| Files in deploy | 447 | 393 |
| Largest asset | 20.8 MiB | 20.8 MiB (poster images remain) |

## Layout

| Location | Contents | Deployed? |
|---|---|---|
| `media/videos/**/*.mp4` | Source archive of every video | No — archive only |
| `public/videos/**/*.webp` | Poster frames referenced by `<video poster>` | Yes, ~1.9 MiB |
| R2 bucket `sunlit-media` | `videos/**/*.mp4` (54 objects, 353.9 MiB) | Served via CDN |

## Access

- Bucket: `sunlit-media` (private; no public bucket URL)
- Custom domain: `cdn.sunlitsolarroof.com` (CNAME → R2, proxied, TLS managed by R2)
- Public URL shape: `https://cdn.sunlitsolarroof.com/videos/<path>`

## Adding or replacing a video

1. Put the file in `media/videos/<path>` (keeps the archive and the CDN path aligned).
2. Upload it:

```bash
npx wrangler r2 object put "sunlit-media/videos/<path>" --file "media/videos/<path>" --remote
```

3. Reference it in the page as `https://cdn.sunlitsolarroof.com/videos/<path>`.
4. Never add `.mp4` to `public/` — it would be deployed and would trip the 25 MiB check.

A file only needs to be under 25 MiB if it lives in `public/`; R2 has no such limit.

## Known trade-off

`media/videos/` is still tracked by git, so a fresh clone is ~350 MiB heavier. Deploys are
unaffected because the build ignores it. Purging it from history (`git filter-repo`) would
shrink clones but rewrites every commit, which needs coordination with the other
collaborators (Manus, ChatGPT, opencode) — deliberate follow-up, not done yet.
