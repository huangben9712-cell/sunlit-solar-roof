# September redesign recovery — 2026-10-20

Production was serving a design that existed nowhere in git. This records what was
missing, how it was brought back, and how the result was proven identical.

## What was missing

The 2026-09-05/06 session (uncommitted, uploaded over SFTP) did more than publish one
article. It changed the information architecture:

| Page | Before (in git) | On production |
|---|---|---|
| `/articles/` | plain list of article cards | the full knowledge-base hub: hero, stats, two "Start Here" guides, articles grouped by category, WhatsApp CTA |
| `/resources/knowledge-base/` | standalone hub page | retired, 301 → `/articles/` |
| `/resources/` | older copy ("Start with the two essentials") | rewritten ("Start with the decision you need to make") |
| `/system-overview/` | original layout, column-style spec table | full redesign: two-product-line cards, numbered supply steps, comparison table |
| Navigation | "Knowledge Base" → `/resources/knowledge-base/` | "Articles" → `/articles/` |
| Analytics | GA4 only | GA4 + Microsoft Clarity (`wvnrksr2cdj`), GA4 event routing, table scroll helpers |

`global.css` also gained four component classes: `sunlit-mobile-grid`,
`sunlit-table-scroll`, `sunlit-data-row`, `sunlit-data-value`.

## How it was recovered

The live HTML was the only surviving copy, so it was treated as the source of truth.

1. Fetched all four affected pages from production.
2. Compared them block by block against a local build to identify the exact deltas
   (39 of 44 blocks on `/articles/` matched the repository's knowledge-base template,
   which revealed the merge rather than a rewrite).
3. Rebuilt `/articles/` from the knowledge-base template with the September copy,
   the new `Business & Sourcing` category and the retitled hero — keeping the
   `getCollection` loop so new articles still appear automatically.
4. Transplanted the `/system-overview/` and `/resources/` markup verbatim (both pages
   are static, with no scoped styles or `data-astro-cid` attributes to break).
5. Ported the CSS classes, the Clarity snippet, the GA4 `send_to` routing, the article
   table-scroll wrapper and the two "Swipe the table" hints.
6. Added the `/resources/knowledge-base/` → `/articles/` redirect to `astro.config.mjs`,
   `public/_redirects` and `public/.htaccess`, and dropped the hub from `sitemap.xml.ts`.

## How it was verified

Two independent comparisons against production, run over every URL in the sitemap:

- **Block parity** — every `main` content block on 54 URLs. Final state: 0 differences.
- **Full-text parity** — the entire `main` text, whitespace-normalised, compared
  character by character. Final state: **54/54 identical**.

The only residual differences are produced by Cloudflare, not by the build:

- `/contact/` and `/privacy-policy/` show `[email protected]` on production because the
  zone runs Email Address Obfuscation. The served HTML is rewritten at the edge; the
  build output contains the real address. It will keep working after the Pages cutover.
- HTML is minified and asset hashes differ where markup changed, as expected.

## What to do differently

The recovery cost a day of forensic work for a session that would have taken minutes to
commit. The branch strategy, the build stamp (`/build-info.json`) and
`scripts/verify-deployment.mjs` now make the same drift visible immediately.
