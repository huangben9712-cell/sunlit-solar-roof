# WordPress → Astro 301 Migration Map

**Status:** Prepared for production cutover; do not apply until the Astro site is complete, verified and served on `www.sunlitsolarroof.com`.

> These must be implemented as single-hop, server/CDN-level **HTTP 301** redirects at Cloudways (Apache/Nginx/Cloudflare), not left to static HTML meta refresh pages. The old URLs remain publicly discoverable, so this map preserves their users and accrued search signals.

## Explicit Page Mappings

| WordPress URL path | Astro canonical path | Reason |
|---|---|---|
| `/system-overview/` | `/system-overview/` | Canonical path remains unchanged; do not redirect it. |
| `/supply-scope/` | `/system-overview/` | Legacy alternate name. |
| `/solar-roofs/` | `/system-overview/` | Legacy system overview path. |
| `/invisible-solar-roof/` | `/system-overview/` | Legacy product/category landing path. |
| `/lumina-slate-series/` | `/lumina-slate/` | Product-line migration. |
| `/storm-guard-series/` | `/storm-guard/` | Product-line migration. |
| `/contact-us/` | `/contact/` | Contact migration. |
| `/about-us/` | `/about/` | About migration. |
| `/knowledges/` | `/articles/` | Legacy article hub. |
| `/project/` | `/projects/` | Legacy project hub. |
| `/import-solar-roof/` | `/articles/import-solar-roof/` | Migrated article. |
| `/what-is-a-solar-roof/` | `/resources/knowledge-base/what-is-solar-roof/` | Consolidate legacy definition page into the canonical pillar guide. |
| `/solar-roof-roi-for-developers/` | `/articles/solar-roof-roi-for-developers/` | Migrated article. |
| `/storm-guard-story/` | `/articles/storm-guard-story/` | Migrated article. |
| `/lumina-slate-story/` | `/articles/lumina-slate-story/` | Migrated article. |
| `/how-to-install-solar-roof/` | `/articles/how-to-install-solar-roof/` | Migrated article. |
| `/category/sourcing-guide/` | `/articles/` | Legacy taxonomy archive. |
| `/category/market-insights/` | `/articles/` | Legacy taxonomy archive. |
| `/category/case-studies/` | `/articles/` | Legacy taxonomy archive. |
| `/category/technical-installation/` | `/articles/` | Legacy taxonomy archive. |
| `/author/huangben/` | `/about/` | Legacy author archive. |

## Pattern Mapping for Legacy Projects

The migration audit confirms the legacy WordPress project slugs correspond to Astro project slugs. Apply this pattern only after checking the generated Astro project route exists:

```apache
# Apache / Cloudways: legacy WordPress project detail to Astro project detail
RewriteRule ^project/([^/]+)/?$ /projects/$1/ [R=301,L]
```

## Apache / Cloudways Rule Skeleton

Use the explicit rules before generic patterns. Deploy these only when the new static Astro files are the live document root and test every legacy URL in this document.

```apache
RewriteEngine On

Redirect 301 /supply-scope/ /system-overview/
Redirect 301 /solar-roofs/ /system-overview/
Redirect 301 /invisible-solar-roof/ /system-overview/
Redirect 301 /lumina-slate-series/ /lumina-slate/
Redirect 301 /storm-guard-series/ /storm-guard/
Redirect 301 /contact-us/ /contact/
Redirect 301 /about-us/ /about/
Redirect 301 /knowledges/ /articles/
Redirect 301 /project/ /projects/
Redirect 301 /import-solar-roof/ /articles/import-solar-roof/
Redirect 301 /what-is-a-solar-roof/ /resources/knowledge-base/what-is-solar-roof/
Redirect 301 /solar-roof-roi-for-developers/ /articles/solar-roof-roi-for-developers/
Redirect 301 /storm-guard-story/ /articles/storm-guard-story/
Redirect 301 /lumina-slate-story/ /articles/lumina-slate-story/
Redirect 301 /how-to-install-solar-roof/ /articles/how-to-install-solar-roof/
Redirect 301 /category/sourcing-guide/ /articles/
Redirect 301 /category/market-insights/ /articles/
Redirect 301 /category/case-studies/ /articles/
Redirect 301 /category/technical-installation/ /articles/
Redirect 301 /author/huangben/ /about/
RewriteRule ^project/([^/]+)/?$ /projects/$1/ [R=301,L]
```

## Cutover Verification

Before changing DNS or the production document root, crawl this map in a staging environment and verify all of the following:

1. Every old indexed URL returns exactly one HTTP 301 and reaches a 200 canonical page.
2. No old URL redirects to a generic homepage when a semantically matching page exists.
3. The target page’s canonical tag points to its own final HTTPS `www` URL.
4. The new `/sitemap.xml` contains the final page but no old URL.
5. Search Console receives the new sitemap and is used to inspect the homepage, product pages, projects, articles and the migrated definition guide.
6. The old WordPress site remains available as a rollback origin until the launch crawl and critical conversion checks are complete.

Reference: Google Search Central, *Site moves and URL changes* — https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes
