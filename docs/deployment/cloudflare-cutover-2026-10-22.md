# Cloudflare Pages cutover — 2026-10-22

**Status: complete. Both `www` and the apex are served by Cloudflare Pages. Cloudways is
no longer in the request path.** The subscription can be cancelled once its
`public_html` (which still holds the WordPress rollback archive) has been exported.

## What changed

| Item | Before | After |
|---|---|---|
| `www.sunlitsolarroof.com` | `A 138.197.87.147` (Cloudways), proxied | `CNAME sunlit-solar-roof.pages.dev`, proxied |
| `sunlitsolarroof.com` (apex) | `A 138.197.87.147` → Apache 301 to `www` | `CNAME sunlit-apex.pages.dev`, proxied, 301 to `www` |
| Pages custom domain | none | `www.sunlitsolarroof.com` on `sunlit-solar-roof` |
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

## How the apex redirect is implemented

The automation token could read Rulesets but not write them, so instead of a Redirect
Rule the apex is served by a second, tiny Pages project: **`sunlit-apex`**.

- Source: `infra/apex-redirect/_redirects`, one rule — `/* https://www.sunlitsolarroof.com/:splat 301`
- Deployed with `npx wrangler pages deploy infra/apex-redirect --project-name sunlit-apex --branch main`
- Custom domain: `sunlitsolarroof.com`
- DNS: `CNAME sunlitsolarroof.com -> sunlit-apex.pages.dev`, proxied

Verified behaviour (path and query string preserved, single hop):

```
/                       -> 301 https://www.sunlitsolarroof.com/
/lumina-slate/          -> 301 https://www.sunlitsolarroof.com/lumina-slate/
/articles/?utm=x        -> 301 https://www.sunlitsolarroof.com/articles/?utm=x
/nonexistent-page/      -> 301 https://www.sunlitsolarroof.com/nonexistent-page/
```

If a Redirect Rule with the right permission ever becomes available, it can replace this
project; until then the project is the mechanism, and it costs nothing on the free plan.

## Rollback

Restore the two records from the DNS snapshot taken before the change:

```
www  A  138.197.87.147  proxied
apex A  138.197.87.147  proxied
```

Cloudflare records are proxied, so the switch is immediate — there is no TTL propagation
window.

## Before cancelling Cloudways

The site no longer depends on Cloudways. What still does is the **data**: its
`public_html` holds the hidden WordPress rollback archive.

1. Export the full `public_html` (including the archive) plus any database dump, to local
   storage or object storage. Application-level SFTP credentials were deleted in the
   August release, so this needs the Cloudways panel or a newly created credential.
2. Cancel the subscription.
3. Leave `public/.htaccess` in the repository until nothing references it any more — it is
   inert on Pages.
