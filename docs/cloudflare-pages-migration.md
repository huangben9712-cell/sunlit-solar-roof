# Cloudflare Pages migration plan

Status: **prepared, not executed.** Production still runs on Cloudways (Apache).
This document is the checklist for moving the same static build to Cloudflare Pages
without losing the redirect equity that the WordPress → Astro migration created.

## What already exists in this repo

| File | Consumed by | Purpose |
|---|---|---|
| `public/_redirects` | Cloudflare Pages | Real 301s for every legacy URL. Generated from `astro.config.mjs` + hand-maintained legacy rules. |
| `public/_headers` | Cloudflare Pages | Security and cache headers. |
| `public/.htaccess` | Cloudways / Apache | The same redirect contract for the current host. |
| `scripts/check-redirects.mjs` | CI | Fails the build if `_redirects` drifts from `astro.config.mjs`. |

`astro.config.mjs` `redirects` is the single source of truth for URL mappings.
`public/_redirects` must cover all of them — CI enforces this. Astro still emits
meta-refresh stubs for those paths, but a stub is a `200`, not a `301`, so the
host-level rule is what search engines actually see.

## Path A — Cloudflare Pages with Git integration (recommended)

This gives preview deployments per branch and automatic production deploys from
`main`, which is exactly the branch strategy this repo now uses.

1. **Lower the DNS TTL** for `@` and `www` to 300 seconds at least 24 hours before cutover.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, choose
   `huangben9712-cell/sunlit-solar-roof`.
3. Build settings:

   | Setting | Value |
   |---|---|
   | Production branch | `main` |
   | Framework preset | `Astro` (or `None`) |
   | Build command | `pnpm install --frozen-lockfile && pnpm build` |
   | Build output directory | `dist` |
   | Root directory | *(empty)* |

4. **Environment variables** (Production *and* Preview):

   | Variable | Notes |
   |---|---|
   | `NODE_VERSION` | `22` |
   | `PNPM_VERSION` | `11` |
   | `PUBLIC_GA_MEASUREMENT_ID` | Real GA4 ID (`G-…`). Without it the built site ships no analytics tag. |
   | `PUBLIC_WHATSAPP_NUMBER` | e.g. `8617729920083`, digits only. |

   These are **build-time** values. Changing them requires a redeploy, not a restart.

5. Deploy once to the `*.pages.dev` preview host and validate it (see checklist below)
   **before** touching the production domains.
6. Attach custom domains `www.sunlitsolarroof.com` and `sunlitsolarroof.com`. Cloudflare
   issues the certificate for both.
7. Add a **Redirect Rule** (Rules → Redirect Rules) sending `sunlitsolarroof.com/*` to
   `https://www.sunlitsolarroof.com/$1` with status 301. `_redirects` cannot handle a
   host-level canonicalisation; this rule preserves the current behaviour (verified: the
   apex currently 301s to `www`).
8. Keep the Cloudways site running until the checklist is green, then switch the DNS
   records and keep the old host reachable for a rollback window.

### HSTS

`public/_headers` sends `Strict-Transport-Security: max-age=31536000; includeSubDomains`.
That is safe for this domain because it already serves HTTPS only. Do **not** add
`preload` to the header unless you actually intend to submit the domain to the
preload list — it is very hard to undo.

## Path B — Direct upload with Wrangler

Only needed if Git integration is unavailable.

```bash
pnpm install --frozen-lockfile
pnpm build
npx wrangler pages deploy dist --project-name sunlit-solar-roof
```

Set the same `PUBLIC_*` variables in the shell before `pnpm build`, otherwise the
deployed HTML has no GA4 tag and no WhatsApp destination.

## Pre-cutover validation checklist

Run against the `*.pages.dev` host first, then again against the real domain.

**Redirects — must be a single hop to a 200.**

```bash
for p in /supply-scope/ /solar-roofs/ /invisible-solar-roof/ /storm-guard-series/ \
         /contact-us/ /about-us/ /knowledges/ /project/ \
         /solar-roof-electrical-system/ /what-is-a-solar-roof/ \
         /category/sourcing-guide/ /author/huangben/ \
         /sitemap_index.xml /wp-content/uploads/2026/05/sunlit-lumina-slate-bipv-solar-roof-brochure-2026.pdf ; do
  curl -s -o /dev/null -w "%{http_code} %{redirect_url}  $p\n" -H 'Host: www.sunlitsolarroof.com' "https://<pages-host>$p"
done
```

Every line must be `301` with a single `https://www.sunlitsolarroof.com/...` target.

**Same-host serving**

- `https://www.sunlitsolarroof.com/` → 200, canonical `https://www.sunlitsolarroof.com/`
- `https://sunlitsolarroof.com/` → 301 → `https://www.sunlitsolarroof.com/`
- `/robots.txt` → 200 and references `/sitemap.xml`
- `/sitemap.xml` → 200, every listed URL returns 200 and is self-canonical
- A known 404 path returns 404 (not the homepage, not a 200)

**Build provenance**

- `curl https://<host>/build-info.json` returns the commit you intended to deploy
- `<meta name="build-commit">` in the HTML carries the same value

**Analytics and conversion**

- Page source contains `googletagmanager.com/gtag/js?id=G-…` with the real ID
- GA4 **Realtime** shows the test visit
- WhatsApp links contain the real number, on mobile and desktop
- Contact form submits and lands on `/thank-you/`

**Assets**

- `/_astro/*` returns `content-type: text/css` or `application/javascript` and is served
  from the edge cache on the second request
- Hero video and poster images load; check one `.webp` and one `.mp4`
- A brochure PDF under `/downloads/` opens

## Cutover and rollback

1. Switch DNS during the lowest-traffic window; keep the Cloudways webroot intact.
2. Purge the Cloudflare cache only after the new deployment is live.
3. Rollback = point DNS back at Cloudways. Because `dist/` is byte-identical static
   output, rollback is a DNS change, not a redeploy.
4. Keep `public/.htaccess` in the repo until Cloudflare has served production for at
   least one month with no redirect complaints; then it can be deleted in a dedicated
   commit that also removes it from the deployment notes.

## After cutover

- Resubmit `https://www.sunlitsolarroof.com/sitemap.xml` in Search Console.
- Watch Search Console → Indexing for new 404s and 5xx for 14 days.
- Keep the redirects in place for at least a year.
