# Sunlit Solar Roof AI Team Memo — Asset-First Rebuild

## Current Working Principle

The next stage is no longer page-first or copy-first.

We now work in this order:

1. Media assets
2. Evidence chain
3. Page structure
4. Copy support
5. CTA and business follow-up path

The website should not be treated as an information archive. It is a trust-building sales system for overseas B2B buyers.

The buyer path is:

See → Understand → Trust → Ask → Quote / Sample / Project Review

---

## Non-Negotiable Data Rule

Product parameters must come from the latest component inventory / datasheet data.

Do not invent, estimate, or reuse old placeholder specs.

Current authoritative active tile specs:

### Lumina Slate Active Tile
- Power: 70W
- Size: 1240 × 390 × 6.2 mm
- Effective size: 1220 × 340 × 5.8 mm
- Weight: 6 ± 0.5 kg
- Cell type: Monocrystalline PERC
- Fire rating: Grade A
- Hail resistance: 35mm
- IP rating: IP68

### Storm Guard Active Tile
- Power: 135W
- Size: 1950 × 420 mm
- Effective size: 1850 × 420 mm
- Weight: 9.3 ± 0.2 kg
- Cell type: Monocrystalline TOPCON
- Fire rating: Grade A
- Hail resistance: 35mm
- IP rating: IP68

Any page that still shows placeholder values such as 600 × 400 mm, 80–120W, or 7.2mm for active tiles must be corrected.

---

## Core Positioning

Sunlit Solar Roof is a China manufacturer / factory-side supplier of complete solar roof product packages.

We supply:

- Active PV roof tiles / sheets
- Matching inactive roof elements
- Flashing
- Ridge / edge pieces
- Fixings and accessories
- Project documents
- Packaging and export support

We are not a local EPC contractor. Local roofing installation, electrical connection, permitting, grid approval, structural review, scaffolding and final site responsibility are handled by the buyer's qualified local teams.

---

## Evidence Chains

Every page should use real assets as evidence, not only text.

### 1. Product Aesthetic Evidence
Use project images, roof close-ups, aerial views and finished roof photos.

Purpose: make the buyer feel the product looks credible and attractive.

Use on:
- Home
- Lumina Slate
- Storm Guard
- Projects
- Project Detail
- Articles

### 2. Component Completeness Evidence
Use component photos from:
- `public/images/components/shared/`
- `public/images/components/lumina-slate/`
- `public/images/components/storm-guard/`

Purpose: prove we supply a complete roof product package, not just active PV tiles.

Use on:
- Supply Scope
- Lumina Slate
- Storm Guard
- Downloads / Datasheets
- Technical articles

### 3. Project Proof Evidence
Use project folders and project data.

Purpose: prove the product exists, has been installed, and can be shown in real project contexts.

Use on:
- Home selected projects
- Lumina related projects
- Storm Guard related projects
- Projects listing
- Project details
- Articles as inline proof

### 4. Installation Proof Evidence
Use installation videos and on-site clips.

Purpose: reduce buyer anxiety about whether the product can be installed locally.

Use on:
- Lumina Slate
- Storm Guard
- Installation resources
- Project details

### 5. Factory / Quality Evidence
Use factory images, lab images, sample area, production videos and testing videos.

Purpose: prove that Sunlit is not just a marketing website.

Use on:
- About
- Quality & Documents
- Product quality sections
- Contact trust section

### 6. Shipping / Export Evidence
Use packed products, pallets, container loading and shipping videos.

Purpose: prove export readiness and reduce cross-border sourcing risk.

Use on:
- About
- Quality & Documents
- Supply Scope
- Contact page trust block

---

## Page-Level Strategy

### Home
Homepage is basically locked. Do not make major structural changes.

Allowed future addition only if clearly marked:

`NEW: Proof Behind the Product`

It should show four evidence links:
- Factory
- Components
- Projects
- Testing / Shipping

### Supply Scope
This is the Products main entry. Do not create a separate Products Overview page.

Supply Scope should be visual and diagrammatic, not text-heavy.

It must explain:
- active + inactive + accessories
- Lumina vs Storm product direction
- factory-side supply scope
- what local teams handle
- how to start lightly

### Lumina Slate
This is the premium glass solar roof tile page.

It must feel like a high-end architectural product page with strong visual evidence.

Required evidence:
- large finished project images
- roof close-ups
- real component photos
- active / inactive tile relationship
- installation proof
- testing proof
- related Lumina projects
- accurate specs from shared data

### Storm Guard
This is the modern metal solar roof sheet page.

It should feel clean, practical, engineering-friendly and suitable for larger roofs.

Required evidence:
- metal roof project images
- active metal sheet photo
- matching metal sheet photo
- ridge / gable / flashing / gutter / fastener photos
- installation proof
- impact testing proof
- related Storm Guard projects
- accurate specs from shared data

### Projects / Project Detail
These pages are near locked. Do not change now.

Later they should become product proof sources:
- Product page → related projects
- Project detail → related product line

### About
About should prove factory identity.

Use:
- factory images
- production videos
- lab images
- sample area
- shipping images
- export workflow evidence

Avoid generic mission/vision copy.

### Quality & Documents
This should become a strong risk-reduction page.

Use:
- testing videos
- lab images
- packaging/shipping images
- document cards
- datasheet / installation / warranty / BOM / packing list references

### Resources / Articles
Articles should not be only SEO text.

Each article should include:
- strong centered or wide editorial hero
- one major image
- key questions answered
- inline visual evidence every 2–3 screens
- buyer note explaining what decision this article supports
- links to Supply Scope / product pages / contact

---

## AI / Tool Routing

### ChatGPT
Use for:
- strategy
- copy structure
- page logic
- data model design
- GitHub edits when the change is content / structure / data-oriented

### Manus
Use for:
- visual refinement
- layout polish
- interaction design
- high-fidelity page implementation from approved structure

### OpenCode / Local Dev
Use for:
- local file processing
- ffmpeg video compression
- poster extraction
- batch image conversion or renaming
- checking local build errors
- component refactors that require running the app

### Image / Video AI Tools
Use for:
- unified color grading
- composition crops
- cleanup of messy backgrounds
- video proof reels
- lightweight motion from real project images

Do not use AI to fake nonexistent projects or change physical product structure.

---

## Immediate Task Order

1. Build shared data layer:
   - `src/data/productSpecs.ts`
   - `src/data/componentAssets.ts`
   - `src/data/mediaAssets.ts`
   - `src/data/pageEvidenceMap.ts`

2. Correct wrong placeholder specs on product pages.

3. Rebuild Lumina Slate with real project images, component photos and proof media.

4. Rebuild Storm Guard with metal roof, component, install and testing media.

5. Rework Supply Scope into a visual roof-package explanation page.

6. Build About and Quality / Documents with factory, testing and shipping evidence.

---

## One Sentence Summary

Turn assets into evidence, evidence into page structure, and page structure into a low-pressure B2B sales path.
