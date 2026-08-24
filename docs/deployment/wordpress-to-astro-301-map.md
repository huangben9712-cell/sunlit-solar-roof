# WordPress → Astro Production 301 Map

**Status:** Pre-deployment candidate. Apply only after the Astro static build is verified in a separate Cloudways application or staging target. Do not rely on Astro’s preview-time meta refresh pages as the production migration mechanism.

> Each redirect below must be implemented as a **single-hop HTTP 301** at Cloudways/Apache/Nginx/Cloudflare. The goal is to preserve the user journey and existing search signals by directing each legacy URL to its closest live Astro equivalent, never to a generic homepage merely for convenience.

## Migration Scope

The final read-only WordPress audit found 38 published legacy page/post paths in the WordPress export, all of which appeared in the available Cloudways logs. Three paths remain direct Astro content paths; all other changed paths need server-level handling at cutover. The old WordPress robots file and sitemap must be replaced by Astro’s `robots.txt` and `/sitemap.xml` after the domain points at the static application.

## Directly Preserved Paths

| Legacy path | Astro treatment | Notes |
|---|---|---|
| `/` | Serve Astro homepage | Root URL remains canonical. |
| `/privacy-policy/` | Serve Astro privacy policy | Same public path. |
| `/thank-you/` | Serve Astro thank-you page | Keep `noindex`; it is a conversion completion page, not a search landing page. |

## Existing Product, System and Company URLs

| WordPress URL path | Astro canonical path | Reason |
|---|---|---|
| `/supply-scope/` | `/system-overview/` | Legacy alternate system name. |
| `/solar-roofs/` | `/system-overview/` | Legacy system overview. |
| `/invisible-solar-roof/` | `/system-overview/` | Retired product/category landing page. |
| `/lumina-slate-series/` | `/lumina-slate/` | Lumina Slate product-line migration. |
| `/storm-guard-series/` | `/storm-guard/` | Storm Guard product-line migration. |
| `/contact-us/` | `/contact/` | Contact page migration. |
| `/about-us/` | `/about/` | About page migration. |
| `/knowledges/` | `/articles/` | Legacy content hub. |
| `/project/` | `/projects/` | Legacy project hub. |

## Migrated Legacy Articles

| WordPress URL path | Astro canonical path |
|---|---|
| `/sunlit-bipv-story/` | `/articles/sunlit-bipv-story/` |
| `/import-solar-roof/` | `/articles/import-solar-roof/` |
| `/solar-roof-electrical-system/` | `/articles/solar-roof-electrical-system/` |
| `/solar-roof-case-study/` | `/articles/solar-roof-case-study/` |
| `/what-is-a-solar-roof/` | `/resources/knowledge-base/what-is-solar-roof/` |
| `/why-are-most-solar-roofs-black/` | `/articles/why-are-most-solar-roofs-black/` |
| `/solar-roof-roi-for-developers/` | `/articles/solar-roof-roi-for-developers/` |
| `/solar-roofing-business-model/` | `/articles/solar-roofing-business-model/` |
| `/storm-guard-story/` | `/articles/storm-guard-story/` |
| `/solar-system-categories/` | `/articles/solar-system-categories/` |
| `/future-of-solar-roofs/` | `/articles/future-of-solar-roofs/` |
| `/offshore-bipv-guide/` | `/articles/offshore-bipv-guide/` |
| `/lumina-slate-story/` | `/articles/lumina-slate-story/` |
| `/how-to-install-solar-roof/` | `/articles/how-to-install-solar-roof/` |

## Product Component and Installation Detail Pages

The old WordPress pages are narrow product component or installation step pages. Their full standalone prose is not being recreated as duplicate pages; instead, each resolves to the matching component library or installation evidence within the relevant product page. The fragment anchor is sent in the redirect response; it is not a request received by the server.

| WordPress URL path | Astro canonical path |
|---|---|
| `/lumina-slate-series/lumina-slate-series-roof-base-layer-installation/` | `/lumina-slate/#installation-evidence` |
| `/lumina-slate-series/lumina-slate-series-electrical-system/` | `/lumina-slate/#component-library` |
| `/lumina-slate-series/lumina-slate-series-ridge-edge-tiles/` | `/lumina-slate/#component-library` |
| `/lumina-slate-series/lumina-slate-series-main-roofing-tiles-installation/` | `/lumina-slate/#installation-evidence` |
| `/storm-guard-series/storm-guard-series-roofing-tiles/` | `/storm-guard/#component-library` |
| `/storm-guard-series/storm-guard-series-roof-base-layer/` | `/storm-guard/#installation-evidence` |
| `/storm-guard-series/storm-guard-series-electrical-system/` | `/storm-guard/#component-library` |
| `/storm-guard-series/storm-guard-series-ridge-edge-tiles/` | `/storm-guard/#component-library` |

## Retired Legacy Language Pages

The current Astro production candidate is English-only. Until genuinely maintained translations exist, each legacy non-English landing page redirects to the closest English canonical system page rather than becoming an accidental 404. Do not mark these new English pages with a false language alternate annotation.

| WordPress URL path | Astro canonical path | Legacy language |
|---|---|---|
| `/osynligt-solcellstak-for-premiumprojekt/` | `/system-overview/` | Swedish |
| `/tetto-solare-invisibile-per-gli-edifici-di-pregio/` | `/system-overview/` | Italian |
| `/techo-solar-invisible-para-promociones-premium/` | `/system-overview/` | Spanish |
| `/telhado-solar-invisivel-para-empreendimentos-de-luxo/` | `/system-overview/` | Portuguese |
| `/onzichtbaar-zonnedak-voor-hoogwaardige-projecten/` | `/system-overview/` | Dutch |
| `/unsichtbares-solardach-fuer-premium-entwicklungen/` | `/system-overview/` | German |

## Legacy Taxonomies and Author Archive

| WordPress URL path | Astro canonical path |
|---|---|
| `/category/sourcing-guide/` | `/articles/` |
| `/category/market-insights/` | `/articles/` |
| `/category/case-studies/` | `/articles/` |
| `/category/technical-installation/` | `/articles/` |
| `/author/huangben/` | `/about/` |

## Legacy Documents

Both files must exist in Astro `public/downloads/` before launch. Preserve the old file URLs with HTTP 301 so links from indexed pages, PDFs, messages or partners do not fail.

| WordPress upload path | Astro public path |
|---|---|
| `/wp-content/uploads/2026/05/sunlit-lumina-slate-bipv-solar-roof-brochure-2026.pdf` | `/downloads/lumina-slate-bipv-solar-roof-brochure-2026.pdf` |
| `/wp-content/uploads/2026/05/sunlit-storm-guard-bipv-solar-roof-brochure-2026.pdf` | `/downloads/storm-guard-bipv-solar-roof-brochure-2026.pdf` |

## Legacy Project Pattern

Apply only after verifying that the destination project route exists in the Astro build.

```apache
RewriteRule ^project/([^/]+)/?$ /projects/$1/ [R=301,L,NE]
```

## Apache / Cloudways Rule Template

Place explicit mappings before the generic project pattern. Use `NE` where a destination includes a fragment anchor, so `#installation-evidence` and `#component-library` remain fragments in the response Location.

```apache
RewriteEngine On

RewriteRule ^supply-scope/?$ /system-overview/ [R=301,L]
RewriteRule ^solar-roofs/?$ /system-overview/ [R=301,L]
RewriteRule ^invisible-solar-roof/?$ /system-overview/ [R=301,L]
RewriteRule ^lumina-slate-series/?$ /lumina-slate/ [R=301,L]
RewriteRule ^storm-guard-series/?$ /storm-guard/ [R=301,L]
RewriteRule ^contact-us/?$ /contact/ [R=301,L]
RewriteRule ^about-us/?$ /about/ [R=301,L]
RewriteRule ^knowledges/?$ /articles/ [R=301,L]
RewriteRule ^project/?$ /projects/ [R=301,L]

RewriteRule ^sunlit-bipv-story/?$ /articles/sunlit-bipv-story/ [R=301,L]
RewriteRule ^import-solar-roof/?$ /articles/import-solar-roof/ [R=301,L]
RewriteRule ^solar-roof-electrical-system/?$ /articles/solar-roof-electrical-system/ [R=301,L]
RewriteRule ^solar-roof-case-study/?$ /articles/solar-roof-case-study/ [R=301,L]
RewriteRule ^what-is-a-solar-roof/?$ /resources/knowledge-base/what-is-solar-roof/ [R=301,L]
RewriteRule ^why-are-most-solar-roofs-black/?$ /articles/why-are-most-solar-roofs-black/ [R=301,L]
RewriteRule ^solar-roof-roi-for-developers/?$ /articles/solar-roof-roi-for-developers/ [R=301,L]
RewriteRule ^solar-roofing-business-model/?$ /articles/solar-roofing-business-model/ [R=301,L]
RewriteRule ^storm-guard-story/?$ /articles/storm-guard-story/ [R=301,L]
RewriteRule ^solar-system-categories/?$ /articles/solar-system-categories/ [R=301,L]
RewriteRule ^future-of-solar-roofs/?$ /articles/future-of-solar-roofs/ [R=301,L]
RewriteRule ^offshore-bipv-guide/?$ /articles/offshore-bipv-guide/ [R=301,L]
RewriteRule ^lumina-slate-story/?$ /articles/lumina-slate-story/ [R=301,L]
RewriteRule ^how-to-install-solar-roof/?$ /articles/how-to-install-solar-roof/ [R=301,L]

RewriteRule ^lumina-slate-series/lumina-slate-series-roof-base-layer-installation/?$ /lumina-slate/#installation-evidence [R=301,L,NE]
RewriteRule ^lumina-slate-series/lumina-slate-series-electrical-system/?$ /lumina-slate/#component-library [R=301,L,NE]
RewriteRule ^lumina-slate-series/lumina-slate-series-ridge-edge-tiles/?$ /lumina-slate/#component-library [R=301,L,NE]
RewriteRule ^lumina-slate-series/lumina-slate-series-main-roofing-tiles-installation/?$ /lumina-slate/#installation-evidence [R=301,L,NE]
RewriteRule ^storm-guard-series/storm-guard-series-roofing-tiles/?$ /storm-guard/#component-library [R=301,L,NE]
RewriteRule ^storm-guard-series/storm-guard-series-roof-base-layer/?$ /storm-guard/#installation-evidence [R=301,L,NE]
RewriteRule ^storm-guard-series/storm-guard-series-electrical-system/?$ /storm-guard/#component-library [R=301,L,NE]
RewriteRule ^storm-guard-series/storm-guard-series-ridge-edge-tiles/?$ /storm-guard/#component-library [R=301,L,NE]

RewriteRule ^(?:osynligt-solcellstak-for-premiumprojekt|tetto-solare-invisibile-per-gli-edifici-di-pregio|techo-solar-invisible-para-promociones-premium|telhado-solar-invisivel-para-empreendimentos-de-luxo|onzichtbaar-zonnedak-voor-hoogwaardige-projecten|unsichtbares-solardach-fuer-premium-entwicklungen)/?$ /system-overview/ [R=301,L]

RewriteRule ^category/(?:sourcing-guide|market-insights|case-studies|technical-installation)/?$ /articles/ [R=301,L]
RewriteRule ^author/huangben/?$ /about/ [R=301,L]

RewriteRule ^wp-content/uploads/2026/05/sunlit-lumina-slate-bipv-solar-roof-brochure-2026\.pdf$ /downloads/lumina-slate-bipv-solar-roof-brochure-2026.pdf [R=301,L,NE]
RewriteRule ^wp-content/uploads/2026/05/sunlit-storm-guard-bipv-solar-roof-brochure-2026\.pdf$ /downloads/storm-guard-bipv-solar-roof-brochure-2026.pdf [R=301,L,NE]

RewriteRule ^project/([^/]+)/?$ /projects/$1/ [R=301,L,NE]
```

## Cutover Verification

Before changing the production document root or domain routing, test every row in this document against the staging/static application. A changed legacy URL must return one HTTP 301 and end at a 200 canonical Astro page. Verify that the target’s canonical tag uses its final HTTPS `www` URL, that `/sitemap.xml` includes only final canonical pages, and that the old WordPress application remains available as the rollback origin until launch monitoring is stable.

Reference: [Google Search Central — Site moves and URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)

## Local Preview Checks (Pre-deployment Branch)

- The rewritten Download Center was visually verified on the local preview. It displays two equal public PDF cards: Lumina Slate product brochure and Storm Guard product brochure, each with preview and direct download actions. The project-specific document section remains separate so it does not misrepresent unavailable files as downloads.
- The Storm Guard product hero was visually verified on the local preview. It retains the primary `Request Sample or Quote` action and component navigation, while adding the correct Storm Guard brochure download action.
