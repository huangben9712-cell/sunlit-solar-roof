# Cloudflare Pages cutover — 2026-10-22

**Status: `www` is live on Cloudflare Pages. The apex still redirects through Cloudways
and must be moved before the Cloudways subscription is cancelled.**

## What changed

| Item | Before | After |
|---|---|---|
| `www.sunlitsolarroof.com` | `A 138.197.87.147` (Cloudways), proxied | `CNAME sunlit-solar-roof.pages.dev`, proxied |
| Pages custom domain | none | `www.sunlitsolarroof.com` (active) |
| `sunlitsolarroof.com` (apex) | `A 138.197.87.147` → Apache 301 to `www` | **unchanged** |
| Mail (MX, SPF, DKIM, DMARC, `send`, `mail`, `go`) | — | **untouched** |

The DNS snapshot taken immediately before the change is stored outside the repository in
`~/.dsh/dns-backup/` (14 records).

## Verification after cutover

`node scripts/verify-deployment.mjs https://www.sunlitsolarroof.com --production` → **12/12**

- `/build-info.json` reports `acb7869` on branch `main` — the deployed artifact is the merged commit
- all 54 sitemap URLs return 200 and are self-canonical
- all 60 redirects return a single-hop 301 to the expected target
- the retired knowledge-base hub 301s to `/articles/`
- unknown paths return 404
- apex still redirects to `www` in one hop

There was a ~50 second window of HTTP 522 while the Pages custom domain certificate
was provisioned. It resolved without intervention.

## Remaining dependency on Cloudways

The apex record still points at the Cloudways origin, which is what answers
`sunlitsolarroof.com` with a 301 to `www`. Two things follow:

1. The site works correctly today; nothing needs to change urgently.
2. **Cloudways cannot be cancelled while this is true** — cancelling it would drop the
   apex hostname.

To finish the migration, replace the apex record with `CNAME sunlit-solar-roof.pages.dev`
(proxied) and add a **Redirect Rule** in Cloudflare:

- Rule name: `apex to www`
- If: `hostname eq "sunlitsolarroof.com"`
- Then: Dynamic redirect, status **301**, expression
  `concat("https://www.sunlitsolarroof.com", http.request.uri.path)`
- Preserve query string: on

This needs either the dashboard (Rules → Redirect Rules) or a token with
*Zone → Config → Edit*; the current automation token does not have it.

## Rollback

Restore the two records from the DNS snapshot:

```
www  A  138.197.87.147  proxied
apex A  138.197.87.147  proxied
```

Cloudflare records are proxied, so the switch is immediate — there is no TTL propagation
window.

## Before cancelling Cloudways

1. Apex moved to Pages with the redirect rule above, and verified.
2. Export the full Cloudways `public_html` — it still contains the hidden WordPress
   rollback archive — plus any database dump, to local storage or object storage.
3. Two to four weeks of stable Pages operation, checked against Search Console.
