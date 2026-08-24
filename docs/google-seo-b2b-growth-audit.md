# Sunlit Google SEO and B2B Buyer-Path Audit

## Audit Standard

This audit measures the site against two operating principles: attracting relevant organic searches for solar roof and BIPV queries, and helping B2B visitors progress from education to a credible project conversation. The standard is based on Google Search Essentials, Google’s helpful people-first content guidance, and the crawl–index–serve model.

## Current Technical Baseline

| Area | Current finding | Directional assessment |
|---|---|---|
| Static rendering | Astro generates 65 current pages in production build | Strong. HTML content is available without relying on browser-only rendering. |
| Titles and canonicals | All 84 generated HTML files contain a title and canonical tag | Strong baseline. |
| Meta descriptions | 64 of 84 generated HTML files contain a description | Incomplete. Page-specific descriptions should cover every indexable page. |
| Sitemap | Sitemap contains the main pages, 26 project URLs, 14 articles and the completed Resources routes | Improved, but must be validated again after final route/redirect decisions. |
| Robots | Allows crawling and names the sitemap | Correct baseline. |
| Structured data | No generated page currently contains JSON-LD / schema.org markup | Missing opportunity for Organization, Product and Breadcrumb understanding. |
| Search measurement | Layout still uses `G-XXXXXXXXXX`; no Search Console or working conversion-event configuration is present in code | Critical operational gap. |
| Conversion measurement | No `whatsapp_click` or form-submit tracking markers exist | Critical operational gap. |
| Contact form delivery | Current POST form only points to `/thank-you/` and has no visible receiver integration | Critical conversion-reliability gap. |
| Thank-you indexing | `/thank-you/` is not in sitemap, but carries no explicit noindex control | Minor technical cleanup required. |
| Supply Scope routing | `/system-overview/` serves successfully in preview, but Astro config also declares a redirect from it to nonexistent `/supply-scope/` | Critical migration / crawl consistency bug. |
| Redirect quality | Astro static redirects are build-time HTML/meta-refresh behavior, not confirmed production HTTP 301 rules | Must be replaced by host/CDN-level single-hop HTTP 301 rules during migration. |

## Immediate Technical Interpretation

The Astro format is an advantage for crawlability and maintenance, but it is not yet a measurable SEO operating system. The site has the foundations for discovery—rendered HTML, canonical tags, a sitemap and crawlable links—but it lacks the production measurement, redirect discipline and reliable lead capture needed to know whether pages are indexed, which queries they serve, and whether visitors become conversations.

Sources:

1. Google Search Essentials. https://developers.google.com/search/docs/essentials
2. Google Search Central, How Search Works. https://developers.google.com/search/docs/fundamentals/how-search-works
3. Google Search Central, Creating helpful, reliable, people-first content. https://developers.google.com/search/docs/fundamentals/creating-helpful-content

## Buyer Education and Conversation Path

### What Is Already Aligned

The site is directionally aligned with the desired manufacturer-led buyer journey. The homepage and product pages present Sunlit as a China factory supplying complete BIPV roof packages rather than individual tiles. The new Resources hub establishes a readable path from two start guides, to the Knowledge Base, to documents and a project-stage WhatsApp request. The Knowledge Base now uses 14 image-led article cards with a consistent browsing rule, while the Download Center distinguishes a genuine direct PDF from documents that must be selected for a real project.

This is a better people-first model than publishing generic solar articles at scale. It maps to genuine buyer questions: what a solar roof is, how it differs from conventional panels, which system fits, how components and installation work, what documents are available, and what must be shared to discuss a project.

### Current Gaps

| Buyer need | Current coverage | Gap to close |
|---|---|---|
| Understand solar roof system versus solar roof tile | Covered across the explainer and a legacy article | Two URLs appear to target the same “what is a solar roof” intent. Consolidate authority: retain one canonical pillar guide and reposition the other as a clearly distinct system-versus-tile article or redirect it. |
| Compare alternatives | Strong: dedicated solar roof versus solar panels page and product-line pages | Add an explicit B2B decision table: system, tile, conventional BAPV panel, scope supplied, installation party, ideal project type. |
| Understand installation | One installation article, installation cards and product-page footage | Build a dedicated installation hub with actual prerequisites, sequence, component roles, downloadable checklist and clear “installer should verify locally” scope. |
| Evaluate technical fit | Product pages, component libraries and one direct Lumina PDF | Add a public system overview / selection sheet and a product-line comparison PDF. Do not imply that unavailable certificates are public downloads. |
| Validate factory credibility | Project imagery, factory positioning, project cards and testing claims | Add dated/attributed first-party evidence: factory capability facts, test conditions, document IDs where appropriate, installation partner context and project facts. |
| Start a project conversation | Resources pages use prefixed WhatsApp message; floating WhatsApp exists | Most main-site CTAs still point to `/contact/`; the contact form has no visible delivery integration. Standardize project CTAs to WhatsApp and/or install a verified form receiver before production. |

### Article-Template Issues

The article template has useful cover images, table of contents, related posts and a final project CTA. However, it publicly exposes an “Original WordPress source” link on every migrated article. This is a migration artifact, not a buyer benefit. It should be removed before the Astro version replaces WordPress, otherwise readers and crawlers are sent back to the old site and content signals are split.

Articles have no displayed author, reviewer, expert role or material update date beyond their imported publication date. For a manufacturer site, each technical article should visibly state whether it is written or reviewed by the Sunlit product, engineering or export team, and cite the actual evidence used where practical. This strengthens the first-hand-experience and trust signals that Google asks site owners to demonstrate.

## Competitive Content Pattern Check

Direct review of four public manufacturer sites confirms a repeatable pattern rather than a need for generic high-volume blogging. GAF combines a concrete product explanation with product documents, specifications, code/standards context, warranty materials and FAQ. Solarstone separates homeowner, professional and roofer audiences, provides planning/BIM tools, shows projects and gives legal/company details. SunStyle combines distinct product definition, long-term deployment figures, technical parameters, project galleries and stakeholder-specific contact options. Roofit combines product modules, third-party award/association references, named customer stories and dated media coverage.

The defensible lesson for Sunlit is not to mimic consumer claims, calculators or unverified certification language. It is to make first-party manufacturer evidence easier to inspect: explicit system scope, component role, product specifications, controlled test context, dated project facts, available project documents, factory capacity/process facts, and collaboration context with installers or distributors.

Sources:

4. GAF Energy. *Timberline Solar ES 2*. https://www.gaf.energy/timberline-solar/
5. Solarstone. *Solarstone Home*. https://www.solarstone.com/
6. SunStyle. *The Future of Solar Roofing*. https://sunstyle.com/
7. Roofit.Solar. *Integrated Solar Roof*. https://roofit.solar/

## Public Search Baseline

Public search results currently show the Sunlit homepage and multiple legacy WordPress URLs, including `/what-is-a-solar-roof/`, `/storm-guard-series/`, `/project/`, `/lumina-slate-series/` and individual `/project/.../` cases. This confirms that the old domain has at least some discovered and indexed URL history. It also confirms that migration must protect URL equity with a final one-to-one HTTP 301 mapping; replacing the site without this map risks discarding the limited discovery already earned.

The visible snippets continue to emphasize broad phrases such as “BIPV solar roof tile manufacturer,” “typhoon-proof,” and “invisible solar roof.” These can be useful only when supported by page-specific evidence. The next Astro version should avoid simply repeating them across every page; it should allocate one primary intent per canonical page and use project evidence, product documentation and buyer-specific content to support it.

## Directional Verdict

**The site is now moving in the right direction, but it is not yet ready to rely on organic traffic for predictable inquiries.** The manufacturer identity is a strength: it creates a real audience, first-party access to products and projects, and a legitimate reason to explain system scope, sourcing, installation evidence and documents. Astro’s static architecture, unified image alt work, rebuilt Resources hub and project/portfolio base all support this direction.

The remaining gap is not visual design. It is the absence of a controlled search-growth operating system: measurement is inactive, migration rules are unsafe, ownership/evidence signals are thin, intent allocation is incomplete, and there is no ongoing process to turn factory facts and completed projects into named, linkable resources.

## Content Strategy: One Primary Intent per Canonical Page

| Search intent / buyer question | Recommended canonical asset | Current state | Next action |
|---|---|---|---|
| What is a solar roof system? | `What Is a Solar Roof System?` pillar in Knowledge Base | Two pages overlap: guide plus an article | Keep the detailed guide as the pillar; convert or redirect the legacy article into `Solar Roof System vs Solar Roof Tiles`. |
| Solar roof versus solar panels | Existing `/solar-roof-vs-solar-panels/` | Correct asset exists | Add decision conditions, sourceable caveats and clear links to both product lines. |
| What is included in a solar roof system? | `/system-overview/` | Strong manufacturing/scope opportunity | Resolve route conflict; add a visual system-scope diagram, buyer checklist and downloadable public overview sheet. |
| Solar roof tiles / BIPV roof | Product-line pages: Lumina Slate and Storm Guard | Product detail is strong | Separate tile-system and metal-sheet-system intent; add installation constraints, use cases and documents that are supported by real product data. |
| BIPV roof installation | Installation hub | Fragmented across an article, videos and pages | Create a single hub with prerequisites, sequence, component responsibility, downloadable checklist and local-code limitation. |
| Importing / sourcing solar roof from a manufacturer | Factory sourcing guide | Existing article can seed the topic | Rebuild around actual factory process, packaging, order-stage documents, lead times only where supportable, and buyer inputs required for quotation. |
| Project proof | Project detail pages | 26 projects and strong imagery exist | Enrich each published case with date/region when publishable, roof type, product line, installed scope, technical constraint, project outcome and named source of evidence. |

The priority is **not** to publish dozens of keyword variations. Google asks site owners to prioritize original, substantial, audience-useful information and to demonstrate first-hand expertise and a clear site purpose.[1] A manufacturer can do that through verified system documents, actual production/packing evidence, project records and the technical reasoning behind component choices.

## Evidence and Trust Assets to Build

1. **Article accountability.** Add a visible author or reviewer identity such as `Reviewed by Sunlit Product & Engineering Team`, a material-update date and a short source/evidence note on technical pages.
2. **Product-document honesty.** Publish only documents that exist and are current. Start with a system overview, Lumina Slate datasheet, and a clearly labelled product-line comparison; request project-specific files through WhatsApp only when genuinely tailored.
3. **Project evidence format.** Use a repeatable case template. It should record the building type, market/region where publishable, roof constraint, selected system, supplied scope, image source, and what the case demonstrates. It must not make unsupported output, certification or warranty claims.
4. **Installation evidence format.** Combine actual site images/video frames with a manufacturer-versus-local-installer responsibility note. This creates value without implying that a global factory can certify local construction compliance.
5. **External trust.** Do not buy bulk backlinks. Publish the evidence assets first, then distribute real product launches, completed project stories, partner/installer case studies, trade-show participation and technical contributions to relevant roofing, solar, architecture and distributor channels. Google’s own guidance says to tell people about the site in relevant communities; it does not recommend manufactured links.[2]

## 90-Day Priority Sequence

| Timeframe | Objective | Concrete deliverable | Success measure |
|---|---|---|---|
| Weeks 0–2 | Make the system observable and migration-safe | Real GA4 ID; Search Console ownership; `whatsapp_click`, document-download and form-submit events; verified form receiver; one-to-one WordPress-to-Astro HTTP 301 map; resolve `/system-overview/` conflict | Search Console receives sitemap; test inquiries arrive; analytics events are visible; no important old URL maps to 404 or chains |
| Weeks 3–6 | Make the content architecture unambiguous | Resolve `what is` overlap; create system-vs-tile pillar, system overview PDF, installation hub and a first enriched project case template | Every priority page has one intended query family, evidence source and next buyer step |
| Weeks 7–10 | Turn factory evidence into linkable assets | Two documented project stories, one verified installation/technical guide, one sourcing/document guide, updated product document page | New pages earn impressions in Search Console and become credible outreach targets |
| Weeks 11–12 | Begin relevant distribution, not link-volume chasing | Partner/installer co-published case outreach, industry media/product-release outreach, distributor and association profile review | Qualified third-party mentions/referrals and referral sessions; no paid-link or unrelated-directory campaign |

## Metrics That Matter

The operating funnel should be measured as:

`Indexable canonical URLs → Search Console impressions → organic clicks → visits to product/project/resources pages → WhatsApp click or verified form submit → qualified project conversation → quote / order.`

The primary Google dashboard is Search Console: monitor indexed pages, queries, impressions, clicks and average position by page group. Google provides the Performance reports and URL Inspection for exactly this purpose.[3] GA4 then measures onsite behavior; WhatsApp links need an explicit event because a chat opening is an intent signal, not a confirmed inquiry. Track a qualified inquiry only after a human identifies a real project, buyer role, market and/or roof requirement.

## What Not to Do

Do not treat the site as a keyword factory, create country pages without genuine localized substance, copy manufacturer specifications from competitors, claim universal code compliance, publish certificates that cannot be verified, write fake project results, buy link packages, or count a WhatsApp click as a sales lead. These tactics conflict with the people-first and trust-focused direction needed for a manufacturer site.[1] [2]

## References

1. Google Search Central. *Creating helpful, reliable, people-first content*. https://developers.google.com/search/docs/fundamentals/creating-helpful-content
2. Google Search Central. *Google Search Essentials*. https://developers.google.com/search/docs/essentials
3. Google Search Console. *Improve your performance on Google Search*. https://search.google.com/search-console/about
4. GAF Energy. *Timberline Solar ES 2*. https://www.gaf.energy/timberline-solar/
5. Solarstone. *Solarstone Home*. https://www.solarstone.com/
6. SunStyle. *The Future of Solar Roofing*. https://sunstyle.com/
7. Roofit.Solar. *Integrated Solar Roof*. https://roofit.solar/

## Implementation Preview Check

The new `Solar Roof System vs Solar Roof Tiles` article renders with its B2B-oriented title, table of contents, system-versus-tile table, explicit local-responsibility caveat, review note, links to the comparison and supply-scope pages, and a project conversation CTA. The Contact page now presents the same qualification fields but uses `Continue on WhatsApp`, ensuring that the submitted context is composed into a WhatsApp message instead of being posted to an unconfigured thank-you route.
