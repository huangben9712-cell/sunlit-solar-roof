/** Blog and knowledge articles migrated from the legacy WordPress site. */

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  priority: "P0" | "P1" | "P2";
  date: string;
  summary: string;
  content: string;
  sourceUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "how-to-install-solar-roof",
    title: "How to Install a Solar Roof: A No-Nonsense Guide for Builders",
    category: "Technical & Installation",
    priority: "P0",
    date: "2025-10-30",
    summary: "A practical installation guide for builders evaluating integrated solar roof systems and the coordination required between roofing and electrical work.",
    content: `A solar roof installation is not the same as placing ordinary panels on top of a finished roof. The roof itself becomes part of the solar system. That means the roofing work, waterproofing details and electrical planning must be coordinated from the beginning.

For builders, roofers and solar installers, the biggest mistake is to think only about the active PV pieces. A complete solar roof system also includes inactive matching roof elements, flashing, fixings, edge pieces, cable paths and project documents. If these items are ignored during quotation, the project becomes difficult during installation.

## 1. Start with the roof structure

Before discussing capacity, the local team should confirm the roof structure, slope, battens, waterproofing layer and load path. The solar roof elements need a stable base. The underlayment and roof build-up should be discussed before the active and inactive layout is finalized.

## 2. Plan active and inactive coverage together

Only part of a roof may be suitable for active solar elements. Edges, valleys, shaded areas, narrow sections and roof penetrations may need inactive roof elements. This is why Sunlit treats active and inactive coverage as one roof package instead of quoting active tiles alone.

## 3. Confirm flashing and edge details

Many installation problems happen at valleys, ridges, eaves, wall junctions, skylights and pipe penetrations. These areas need proper flashing and accessory planning. A clean solar roof is not only about the surface tiles; it is about how the whole roof closes and drains.

## 4. Coordinate electrical work with qualified professionals

The local electrical team should handle string design, inverter connection, grounding, protection devices and grid or battery integration according to local rules. Sunlit can support product information and roof-side planning, but final electrical work should be completed by qualified local professionals.

## 5. Use drawings before final quotation

A serious quotation needs roof drawings or measured dimensions. Without layout information, it is impossible to estimate the active-to-inactive ratio, accessories, packaging and real project cost accurately. For the first discussion, photos and sketches are acceptable. For final quotation, roof drawings are strongly recommended.`,
    sourceUrl: "https://www.sunlitsolarroof.com/how-to-install-solar-roof/"
  },
  {
    id: 2,
    slug: "what-is-a-solar-roof",
    title: "What is a Solar Roof? And Why 2026 is the Year to Make Your Move",
    category: "Market Insights & ROI",
    priority: "P0",
    date: "2026-01-12",
    summary: "Explains the difference between ordinary rooftop panels, isolated solar tiles and a true complete solar roof system.",
    content: `A solar roof is not just a roof with solar panels on it. It is a roofing system where solar generation is integrated into the roof surface itself. The roof protects the building and generates electricity at the same time.

This distinction matters for developers, roofing contractors, distributors and homeowners. If the product is only a solar panel, the roof and the solar system are two separate layers. If the product is a true solar roof system, the roof material, the PV elements and the surrounding accessories must be designed as one package.

## Solar panels vs solar roof systems

Traditional solar panels are usually installed above an existing roof using racks. They are effective for energy generation, but they often change the visual appearance of the building. For high-end homes, villas, resorts and premium developments, this can be a serious problem.

A solar roof system takes a different approach. The active PV elements become part of the roofing surface. Matching inactive elements complete the non-generating areas. Flashing, fixings and accessories help the system work as a complete roof.

## Why inactive elements matter

Many buyers first ask for the price of active solar tiles. That is understandable, but it is incomplete. A real roof has edges, hips, ridges, valleys, shaded areas and non-standard shapes. Not every area should be active. Matching inactive roof elements make the final roof look consistent and allow the project to be quoted as a complete roof.

## The B2B buying decision is different

For distributors and installers, the question is not only wattage. They need to know what the package includes, how the roof is installed, how inactive coverage is handled, what documents are available and how the project will be shipped. A complete solar roof system must answer all of these questions.

## Where Sunlit fits

Sunlit Solar Roof supplies integrated solar roofing systems for overseas projects. Lumina Slate focuses on premium glass slate appearance. Storm Guard focuses on modern metal roof applications and a more practical cost position. Both systems are built around the same logic: active PV elements plus matching inactive roof elements and the accessories needed for a complete roof package.`,
    sourceUrl: "https://www.sunlitsolarroof.com/what-is-a-solar-roof/"
  },
  {
    id: 3,
    slug: "solar-roof-case-study",
    title: "A Real Case Study: Building a Solar Roof Across the Ocean",
    category: "Products & Case Studies",
    priority: "P0",
    date: "2026-03-31",
    summary: "A story-style article about cross-border solar roof project coordination and the practical problems buyers face.",
    content: `Cross-border solar roof projects look simple at the inquiry stage. A buyer sends a roof size, asks for a price, and expects a direct answer. In reality, the useful work starts before the quotation.

A solar roof project needs drawings, active and inactive layout discussion, accessory scope, packaging, shipping terms and local installation coordination. If these questions are not solved early, the buyer may receive a price that looks attractive but cannot be used for a real project.

## The first question is not price

Price matters, but the first question should be: what exactly is being quoted? Is it only active PV tiles? Does it include matching inactive roof elements? Are ridge pieces, edge pieces, flashing and fixings included? What about electrical equipment, inverter or battery scope?

A complete quote must define the product boundary clearly.

## Roof drawings change everything

Two roofs with the same square meter area can require very different bills of materials. One roof may be simple and rectangular. Another may have hips, valleys, dormers, chimneys and shaded areas. The active-to-inactive ratio changes. Accessory needs change. Packaging and installation discussion also change.

That is why Sunlit asks for drawings whenever possible. A drawing-based quotation is slower than a simple square-meter price, but it is much more useful.

## Shipping is part of the product experience

For overseas buyers, the product is not truly delivered until it arrives safely and can be identified by the local installation team. Packaging, labels, component lists and documentation matter. A supplier that only thinks about factory price is not enough for a serious solar roof project.

## The practical lesson

A good overseas solar roof project starts with clear scope. Before payment and shipment, the buyer should understand the roof package, the documents, the local installation role and the electrical responsibility. That is the difference between buying a few solar products and building a real solar roof.`,
    sourceUrl: "https://www.sunlitsolarroof.com/solar-roof-case-study/"
  },
  {
    id: 4,
    slug: "lumina-slate-story",
    title: "The Story Behind Lumina Slate: Building a Better Solar Roof",
    category: "Products & Case Studies",
    priority: "P0",
    date: "2026-04-01",
    summary: "Product story for the premium glass slate-look solar roof system.",
    content: `Lumina Slate was created for projects where ordinary solar panels are visually unacceptable. The goal is not simply to hide solar power. The goal is to make solar generation part of a premium roof surface.

For many high-end villas, resort buildings and architectural projects, the roof is part of the property value. A bulky rack-mounted system can reduce the visual quality of the building even if it works electrically. Lumina Slate addresses this problem with a slate-look glass solar roof system.

## Active glass PV tiles

The active elements generate electricity while forming the visible roof surface. They are designed to look closer to premium slate roofing than ordinary blue or framed PV modules. This makes them suitable for projects where exterior appearance is a serious buying factor.

## Matching inactive glass tiles

A premium solar roof cannot use active PV elements everywhere. Some areas need non-generating roof pieces. Lumina Slate uses matching inactive glass roof tiles so edges, narrow zones and non-active roof areas can keep the same visual language.

## Why this matters for B2B buyers

Distributors, developers and installers need a product that can be explained clearly to premium clients. The selling point is not only electricity. It is roof replacement, energy generation and architectural appearance in one package.

## Best-fit projects

Lumina Slate is best suited for villas, high-end residential developments, boutique hospitality projects and architectural roofs where the owner wants solar energy without the visual compromise of standard panels. It is a premium system, so it should be used where appearance and positioning justify the cost.`,
    sourceUrl: "https://www.sunlitsolarroof.com/lumina-slate-story/"
  },
  {
    id: 5,
    slug: "storm-guard-story",
    title: "The Storm Guard Solar Roof: Built for Builders, Not Laboratories",
    category: "Products & Case Studies",
    priority: "P0",
    date: "2026-04-02",
    summary: "Product story for the practical metal solar roof system.",
    content: `Storm Guard is Sunlit's modern metal solar roof system. It is designed for buyers who need an integrated solar roof but do not necessarily need the premium glass appearance of Lumina Slate.

The product logic is practical: active metal solar roof sheets, matching inactive metal roof elements and the accessories needed to discuss a complete roof package. This makes Storm Guard useful for modern homes, commercial roofs, public buildings and larger roof areas.

## Why metal solar roofing matters

Many roofs already use metal profiles because they are practical, modern and scalable. A metal solar roof system builds on that logic. Instead of adding solar panels above the roof, the active solar sheet becomes part of the roof surface.

## Active and inactive elements

The same complete-system logic applies. Active elements generate electricity. Inactive elements complete roof areas that should not be active. This helps the project avoid a patchwork appearance and allows the buyer to discuss the roof as one package.

## Cost position

Storm Guard is positioned as more cost-effective than a premium glass solar roof system. That does not mean it is a cheap add-on product. It means it is better suited for buyers who need scale, modern metal aesthetics and practical project economics.

## Best-fit projects

Storm Guard should be evaluated for modern residential roofs, commercial buildings, public facilities and large roof projects. The final choice depends on roof design, budget, project size and local installation requirements.`,
    sourceUrl: "https://www.sunlitsolarroof.com/storm-guard-story/"
  },
  {
    id: 6,
    slug: "offshore-bipv-guide",
    title: "The Offshore BIPV Trap: An Importer’s Survival Guide to Solar Roofs",
    category: "Importing & Sourcing",
    priority: "P0",
    date: "2026-04-04",
    summary: "A sourcing guide for overseas buyers evaluating BIPV suppliers and avoiding incomplete product scopes.",
    content: `Importing BIPV and solar roof products can look attractive on paper. The product is innovative, the project value is high, and the supplier price may look competitive. But many buyers fall into the same trap: they compare active tile prices and forget that a roof is a complete system.

If you are an importer, distributor or contractor, the real question is not just how much one solar tile costs. The real question is whether the supplier can help you define a usable roof package.

## Trap 1: comparing only active tile price

Active PV tiles are only one part of the roof. You also need inactive matching roof elements, flashing, fixings, edge pieces, ridge pieces and sometimes electrical components. A low active-tile price can become meaningless if the rest of the roof package is unclear.

## Trap 2: ignoring roof drawings

Without drawings, the supplier cannot know the active-to-inactive ratio, roof accessories, valleys, ridges or packaging scope. A serious supplier should ask for roof drawings or at least clear dimensions before giving a reliable project quote.

## Trap 3: unclear installation responsibility

A Chinese supplier usually does not replace the local roofer and electrician. The correct model is coordination: the supplier provides product scope and documents, while qualified local professionals handle installation according to local rules.

## Trap 4: missing documents

Before importing, ask what documents are available: datasheets, installation notes, warranty documents, packing list, product photos and project references. Certification requirements vary by market, so do not assume a certificate applies to every country or project.

## A better sourcing method

Start with the project. Send drawings, roof area, country, delivery destination and buyer role. Ask for the full roof package scope, not just the active tile price. This approach protects your margin, reduces project risk and makes the quotation useful for real buyers.`,
    sourceUrl: "https://www.sunlitsolarroof.com/offshore-bipv-guide/"
  },
  {
    id: 7,
    slug: "solar-roof-electrical-system",
    title: "How to Choose the Right Electrical System for Your Solar Roof: A Practical Approach",
    category: "Technical & Installation",
    priority: "P0",
    date: "2026-04-10",
    summary: "Practical guide for deciding whether a solar roof project also needs inverters, batteries and other electrical equipment.",
    content: `A solar roof project has two major parts: the roof package and the electrical system. They are connected, but they are not the same thing.

The roof package includes active PV roof elements, matching inactive roof elements, flashing, fixings and accessories. The electrical system may include inverters, batteries, protection devices, distribution equipment and monitoring. Whether these items should be supplied together depends on the project.

## Grid-tied projects

A grid-tied solar roof sends power through an inverter and connects to the local grid according to local rules. This is common for residential and commercial buildings where grid access is stable. Local electrical approval is important.

## Hybrid projects

A hybrid project may include batteries for backup or self-consumption. This is useful where electricity prices are high, outages are common or the owner wants more energy independence. Battery sizing should be based on load profile, not guesswork.

## Off-grid projects

An off-grid project needs a more careful energy balance. The system must consider solar resource, daily load, battery capacity, backup generation and seasonal variation. A solar roof can be part of an off-grid system, but the roof area may limit available PV capacity.

## What buyers should prepare

Before asking for the electrical scope, prepare basic information: project country, grid situation, target capacity, daily loads, backup requirement, battery expectation and local installer capability. Without these details, any electrical quotation is only a rough idea.

## Sunlit's role

Sunlit can discuss the solar roof package and help clarify the roof-side PV scope. Electrical equipment can also be discussed by project, but final design and installation should involve qualified local electrical professionals.`,
    sourceUrl: "https://www.sunlitsolarroof.com/solar-roof-electrical-system/"
  },
  {
    id: 8,
    slug: "import-solar-roof",
    title: "How to Import a Solar Roof Without Losing Your Mind (Or Your Margins)",
    category: "Importing & Sourcing",
    priority: "P0",
    date: "2026-04-17",
    summary: "Importer-focused article about project scope, samples, shipping, documents and margin protection.",
    content: `Importing a solar roof is different from importing standard solar panels. You are not only buying energy equipment. You are buying a roof package that must fit a building, arrive safely and make sense to local installers.

For importers and distributors, the margin is made or lost before the container leaves the factory. The key is to define the scope correctly.

## Step 1: define the buyer and project

Is the buyer a homeowner, developer, installer, roofer or distributor? Is this a villa, commercial roof, public building or development project? The answer changes the system choice and the level of documentation needed.

## Step 2: collect roof drawings

A roof drawing is the fastest way to avoid confusion. It helps the supplier estimate active elements, inactive elements, roof accessories and packaging. Without drawings, you can only discuss a rough budget.

## Step 3: request the full roof package

Do not ask only for the price of active tiles. Ask what is included: active PV elements, matching inactive elements, flashing, fixings, edge pieces, ridge pieces, documents and packaging.

## Step 4: clarify shipping and delivery terms

Solar roof products are fragile and project-specific. Packaging, labels, packing list and delivery destination all matter. DDP, DDU, FOB and EXW pricing can lead to very different responsibilities.

## Step 5: protect your margin

Your margin is protected by clarity. If the quotation is vague, you may later pay for missing accessories, extra shipping, local rework or unhappy customers. A complete quotation is slower, but it is safer.`,
    sourceUrl: "https://www.sunlitsolarroof.com/import-solar-roof/"
  },
  { id: 9, slug: "solar-system-categories", title: "Grid-Tied, Off-Grid, or Hybrid? How to Choose the Right Solar Setup", category: "Technical & Installation", priority: "P1", date: "2025-10-30", summary: "Guide for explaining grid-tied, off-grid and hybrid electrical setups.", content: `This article should be rewritten after the electrical-system article is finalized. It can become a supporting guide that explains grid-tied, hybrid and off-grid setups for buyers who are not electrical specialists.`, sourceUrl: "https://www.sunlitsolarroof.com/solar-system-categories/" },
  { id: 10, slug: "solar-roof-roi-for-developers", title: "Why Developers Are Doing the Math Wrong on Solar Roofs", category: "Market Insights & ROI", priority: "P1", date: "2026-03-31", summary: "Developer-focused article on how solar roofs affect project value beyond simple electricity payback.", content: `This article should be kept as a developer education piece. The rewrite should avoid unsupported ROI promises and focus on premium positioning, differentiation, energy resilience and buyer perception.`, sourceUrl: "https://www.sunlitsolarroof.com/solar-roof-roi-for-developers/" },
  { id: 11, slug: "future-of-solar-roofs", title: "Why Energy Independence Will Become the Biggest Premium for High End Real Estate", category: "Market Insights & ROI", priority: "P1", date: "2026-04-01", summary: "Market insight article about energy independence as a premium real estate value.", content: `This article can become thought leadership after stronger evidence and market-specific examples are added. Keep it secondary until the product, project and importer pages are stronger.`, sourceUrl: "https://www.sunlitsolarroof.com/future-of-solar-roofs/" },
  { id: 12, slug: "solar-roofing-business-model", title: "The IKEA Model of Solar Roofing: Who We Work With", category: "Market Insights & ROI", priority: "P1", date: "2026-04-02", summary: "Explains Sunlit's cooperation model with distributors, installers, contractors and developers.", content: `This article is useful for explaining Sunlit's role: China-based design and manufacturing support, local installation by the buyer's roof and electrical teams, and cooperation with distributors or project partners.`, sourceUrl: "https://www.sunlitsolarroof.com/solar-roofing-business-model/" },
  { id: 13, slug: "sunlit-bipv-story", title: "From Premium Exterior Contracting to Advanced BIPV: The Sunlit Story", category: "Products & Case Studies", priority: "P2", date: "2026-05-16", summary: "Brand story article that can support the About page after fact-checking.", content: `Keep this as a later brand-story rewrite. It should not outrank product, project and buyer-guide content in the first migration pass.`, sourceUrl: "https://www.sunlitsolarroof.com/sunlit-bipv-story/" },
  { id: 14, slug: "why-are-most-solar-roofs-black", title: "Why Are Most Solar Roofs Black?", category: "Products & Case Studies", priority: "P1", date: "2026-06-05", summary: "Explains the visual and technical reasons many solar roof products are black.", content: `This article can support the Lumina Slate and Storm Guard product pages. It should explain the relationship between solar absorption, cell appearance, glass treatment, roof aesthetics and buyer expectations.`, sourceUrl: "https://www.sunlitsolarroof.com/why-are-most-solar-roofs-black/" }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => blogPosts.find((p) => p.slug === slug);
export const getPriorityBlogPosts = (priority: string = "P0"): BlogPost[] => blogPosts.filter((p) => p.priority === priority);
