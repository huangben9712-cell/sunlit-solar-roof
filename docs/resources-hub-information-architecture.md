# Resources Hub — Information Architecture

## Objective

Resources must help a B2B visitor take one clear next step instead of acting as a second, unfinished website. The hub has four distinct jobs: orient a first-time buyer, offer a curated learning path, expose the complete article library, and provide documents appropriate to the buyer's project stage.

## Route Roles

| Route | One job | Content shown | Content deliberately excluded |
|---|---|---|---|
| `/resources/` | **Resource Centre** — route visitors to the right next action | Two Start Here guides, one Knowledge Base gateway, one Download Center gateway, a short project-support CTA | Article category grids, legacy buyer-guide cards, long document inventories |
| `/resources/knowledge-base/` | **Knowledge Base** — browse all published educational articles | Start Here guides, one optional featured article, a uniform image-led article grid grouped by category | Request-only documents, duplicate Download Center promotion blocks |
| `/resources/downloads/` | **Download Center** — distinguish direct downloads from project-stage documents | Available-now datasheets, on-request documents, clear request checklist and WhatsApp CTA | Generic guide cards, certificate claims presented as downloadable files when they are not |
| `/resources/knowledge-base/what-is-solar-roof/` | **Explainer guide** | The definitive entry guide | Navigation duplication |
| `/solar-roof-vs-solar-panels/` | **Comparison guide** | The decision comparison | Navigation duplication |

## Navigation Rule

The Resources menu should contain three destinations only:

1. **Resource Centre** → `/resources/`
2. **Knowledge Base** → `/resources/knowledge-base/`
3. **Download Center** → `/resources/downloads/`

The two Start Here guides belong inside the Knowledge Base and the Resource Centre, not inside a navigation dropdown. This removes the repeated, visually empty four-item flyout shown in the current interface.

## Card Rules

Every article card must use the same vertical structure: 16:9 cover image, category label, title, short description and `Read article` affordance. Every card gets its cover from the Astro article content collection. There must be no mixture of image cards and text-only cards in the same article grid.

Start Here guides use a larger horizontal or split layout because they are persistent guides, not articles. Download cards use a document marker, product line and access status; they are not styled as articles.

## Conversion Rule

Resources is not a quotation form. A visitor who reaches a document requiring project scope should be directed to WhatsApp with a prefilled request for country, roof area, project type and product line. This maintains the site's primary conversion model without putting competing CTAs on every resource card.

## Preview Verification

The rebuilt `/resources/` preview shows a deliberate four-step hierarchy: a short orientation hero, two large Start Here guide cards, two gateway cards for the Knowledge Base and Download Center, and one project-stage WhatsApp action. The legacy public-guide grid and duplicate document inventory are no longer present.

The rebuilt `/resources/knowledge-base/` preview shows the two Start Here guides above the article library. It reports 14 library articles and displays all published cards under category anchors with image-led cards. The preview confirms that the former mix of text-only article cards and image-bearing featured content has been replaced by one visual card rule.

The rebuilt Download Center preview confirms that it now separates one verified direct datasheet download from project-stage document requests. The document request route is a prefilled WhatsApp message with the four details required for document relevance, rather than a generic request form.

The Resources navigation data was reduced from four entries, including two duplicate feature-guide links, to Resource Centre, Knowledge Base and Download Center. The two feature guides are now discoverable in the Resource Centre and Knowledge Base only.
