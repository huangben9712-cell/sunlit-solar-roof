# Sunlit Production Deployment and SEO Protection Plan

**Candidate baseline:** `seo-content-system` at `199f41b` (local only at the time of this plan).

## Verified Branch Position

The candidate is a linear continuation of the existing `manus` work rather than a competing rewrite:

```text
manus (a640bc1)
  └─ article-media-alt-migration (c612a6c)
      └─ resources-hub-rebuild (7c2602c)
          └─ hero-video-performance (7b24f76)
              └─ seo-content-system (199f41b)
```

The candidate is clean and has passed a production Astro build, which generated 65 static pages and a 54-URL sitemap during audit. It includes the complete previous visual, media, article, Resources and Hero performance work, plus the SEO/measurement foundation.

## Google-Aligned Deployment Principles

Google recommends preparing and testing the new site, mapping old URLs to their corresponding destinations, enabling server-side permanent redirects, submitting a sitemap and monitoring old and new URL traffic during a URL migration.[1] A significant move can cause temporary ranking fluctuation while Google recrawls and reindexes; for small and medium sites it may take weeks or longer for new URLs to replace old URLs. Google states that permanent 301/308 redirects are the preferred server-side signals and that permanent redirects do not cause a loss of PageRank.[1] [2]

The planned Sunlit change stays on the same domain. Therefore, the Search Console **Change of Address** tool is not applicable; that tool is for changing domains or subdomains, not path or infrastructure changes.[1] The focus is correct URL mapping, same-domain server-side redirects, stable canonical URLs and monitoring.

## Minimum Go/No-Go Gates

| Gate | Required state before production replacement | Owner / verification |
|---|---|---|
| Candidate code | `seo-content-system` has a clean worktree, production build passes and final content review is complete | Development review |
| Analytics | A real GA4 Measurement ID is supplied as `PUBLIC_GA_MEASUREMENT_ID`; Real-time view receives a test page view and WhatsApp click | Site owner + deployment test |
| Search Console | The `https://www.sunlitsolarroof.com/` property is verified and existing property access retained | Site owner |
| Migration map | `docs/deployment/wordpress-to-astro-301-map.md` is expanded with all current sitemap/GSC/analytics URLs and reviewed | Site owner + development review |
| Server redirects | Cloudways Apache/Nginx/Cloudflare returns one HTTP 301 from each old path to the final new path | `curl -I` test log |
| Assets | Existing high-value image, PDF and video URLs either remain at the same URL or redirect appropriately | Crawl test |
| Form/WhatsApp | Contact form opens a pre-filled WhatsApp project message; WhatsApp number is confirmed | Manual phone/browser test |
| Sitemap and robots | `/robots.txt` returns 200 and references the new `/sitemap.xml`; the sitemap contains only canonical indexable URLs | Browser and Search Console test |
| Rollback | Current WordPress public files/database and old webroot are backed up; an explicit restore command/procedure exists | Hosting backup check |

No production replacement should occur until every gate above is marked green. This is the mechanism that protects the existing small amount of discovery—not a promise that rankings will never fluctuate.

## Recommended Deployment Sequence

1. **Freeze the release candidate.** Finish only critical factual/content fixes on `seo-content-system`, then make a tagged release candidate commit. Do not simultaneously change the domain, branding, major URL structure, analytics model and content scope beyond the already planned migration.
2. **Push the candidate branch for review.** Keep `manus` as the pre-release baseline and do not overwrite it. A production branch may be created only after user approval of the reviewed candidate.
3. **Prepare a staging copy on Cloudways.** Use a non-indexed staging URL or protected environment that serves the exact static `dist/` output and the planned server redirect rules. Do not block the final production site with `noindex` after cutover.
4. **Test the redirect map before the switch.** Check the homepage, product pages, all high-value project/article URLs, category archives, assets and the special legacy paths. Every important path must be a direct 301 to a final 200 page with a self-canonical.
5. **Choose a low-risk release window.** Use the lowest recurring traffic window, ideally when someone can watch server logs, Search Console and WhatsApp for the first several hours. Google recommends timing a move to lower traffic where possible.[1]
6. **Switch the webroot / release atomically.** Preserve the same canonical HTTPS `www` host. Apply redirects at the server or CDN, not only Astro-generated meta refresh files. Purge CDN cache only after the final files and redirect rules are present.
7. **Run the release smoke test immediately.** Verify homepage, navigation, critical pages, `robots.txt`, sitemap, OG image, PDFs, WhatsApp, contact handoff, 301s, 404s, canonical tags and GA4 real-time events.
8. **Monitor continuously for 14 days, then weekly for 90 days.** Compare old and new URL clicks/impressions in Search Console, 404/5xx logs, sitemap processing, indexed URL counts, organic sessions, document-download events and qualified WhatsApp project conversations.
9. **Keep redirects at least one year; preserve backups longer.** Google recommends keeping redirects for as long as possible, generally at least one year.[1]

## Rollback Rule

Rollback is not for normal short-term ranking variation. It is appropriate if critical pages return incorrect statuses, canonical URLs are wrong, a redirect pattern sends meaningful URLs to irrelevant destinations, user leads cannot contact Sunlit, or the server cannot reliably serve the new site. Keep the old WordPress webroot/database backup and prior server configuration available for quick restoration. If a rollback happens, document every request/error first so the next attempt resolves the actual cause rather than repeating the move.

## First 30 Days After Release

### Days 0–2: Confirm technical discoverability

Submit `https://www.sunlitsolarroof.com/sitemap.xml` in Search Console, inspect the homepage, both product pages, Resources, the two Start Here guides, the new system-vs-tile article, the installation article and several project pages. Sitemaps are a discovery hint rather than an indexing guarantee; submit them in Search Console to observe fetch/processing errors.[3]

### Days 3–14: Protect current discovery and diagnose gaps

Watch Search Console for clicks and impressions by URL, monitor Coverage/Indexing reports for unexpected failures, and check server logs for redirect errors. Compare legacy search URLs with their target pages. Do not react to day-to-day rank movement by changing titles or URLs repeatedly.

### Days 15–30: Begin measured content iteration

Use Search Console queries to identify which existing pages receive impressions. Improve the matching page only when it has a clear user-information gap or missing first-party evidence. Add one documented project fact card, one product/supply document improvement and one internal link improvement at a time so effects remain interpretable.

## Related External Mentions: What to Do and Not Do

The site does not need to be manually submitted to “all websites.” Google’s Search Essentials recommends being active in relevant communities and telling people about useful products/content while discouraging spam behavior.[4] The correct first actions after launch are:

1. Maintain authentic profiles where Sunlit has a real business presence: the company’s LinkedIn page, relevant trade-show/company profiles, and partner/installer/distributor pages that can accurately describe Sunlit.
2. Ask real project collaborators and approved distributors/installers to link to a completed case study or product page where they genuinely use or specify the product.
3. Send industry media a factual product or project note only when there is a real launch, test milestone, event, partnership or completed project that can be verified.
4. Offer useful assets—system scope guide, data sheet, installation planning checklist and project facts—as the landing pages for these mentions.

Do **not** buy bulk link packages, add the domain to unrelated directories, publish fake project/award claims, automate guest-post spam, or ask unrelated websites for keyword-rich anchors. Quantity is not the objective; a small number of relevant, real-world citations can be useful, while manufactured links can create policy risk.[4]

## References

[1] Google Search Central. *How to move a site*. https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes

[2] Google Search Central. *Redirects and Google Search*. https://developers.google.com/search/docs/crawling-indexing/301-redirects

[3] Google Search Central. *Build and submit a sitemap*. https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

[4] Google Search Central. *Google Search Essentials*. https://developers.google.com/search/docs/essentials
