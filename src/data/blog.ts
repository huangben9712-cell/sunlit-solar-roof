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
    content: "This legacy article should be preserved as a technical buyer guide. The new version should explain that a solar roof project is not only about placing PV tiles. It requires roof base preparation, waterproofing, active and inactive roof elements, flashing details, fixings, cable routing and coordination with qualified local roofing and electrical professionals.\n\nFor the new site, this article should be rewritten around Sunlit's complete system logic: the local team installs the roof, while Sunlit supports product scope, documents, drawings and component coordination. Avoid suggesting that a non-qualified installer can handle electrical work independently.",
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
    content: "This article should become one of the cornerstone SEO pages for the new site. The central point is simple: a real solar roof is not an add-on panel system and not just a few active tiles. It is a coordinated roof package combining active PV roof elements, matching inactive elements, waterproofing, flashing, fixings and accessories.\n\nThe new version should speak to developers, roofing contractors, importers and solar installers who need to understand why integrated roofing changes the buying decision. Keep the tone practical and avoid exaggerated market claims.",
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
    content: "This article is valuable because it connects product discussion with the reality of overseas procurement. It should be preserved as a trust-building story for importers, distributors and project buyers.\n\nThe rewrite should focus on what has to be clarified before shipment: roof drawings, active and inactive layout, accessories, packaging, shipping destination, local installation team and electrical configuration. This article can internally link to the Contact page and the roof drawing guide.",
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
    content: "This article should support the Lumina Slate product page. The useful angle is not hype, but why a premium solar roof needs active glass PV tiles and matching inactive glass tiles to create a complete architectural roof surface.\n\nThe new version should explain buyer situations where Lumina Slate makes sense: villas, high-end residential projects, premium developments, architects and developers who cannot accept conventional panel aesthetics.",
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
    content: "This article should support the Storm Guard page. It should position Storm Guard as a modern metal solar roof system for projects where cost position, scale, roof coverage and practical installation discussion matter more than premium glass aesthetics.\n\nThe rewrite should avoid unverified extreme-weather claims unless specific test documents are available. Keep the buyer message clear: active metal solar sheets plus matching inactive metal roof elements form a complete roof package.",
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
    content: "This is one of the most strategically valuable legacy articles. It should target importers, distributors and contractors who worry about overseas sourcing risk.\n\nThe new version should explain common traps: comparing only active tile price, ignoring inactive roof elements, missing flashing and accessories, unclear packaging, no roof drawing review, and electrical scope confusion. It should become a buyer education article and link strongly to Resources and Contact.",
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
    content: "This article should be preserved because many buyers confuse the roof package with the complete electrical system. The new version should explain that the roof system and electrical configuration are project-dependent.\n\nSome buyers only need roof elements and PV components; others need inverter, battery and distribution equipment. The correct answer depends on grid connection, backup requirements, load profile, local rules and installation team capability.",
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
    content: "This article should be rewritten as a practical import checklist for roofing distributors, building material importers and solar installers.\n\nKey sections should include: confirm project type, collect roof drawings, define active and inactive coverage, request sample evaluation, clarify packaging, check document requirements, discuss shipping terms and avoid quoting only a single active tile price.",
    sourceUrl: "https://www.sunlitsolarroof.com/import-solar-roof/"
  },
  { id: 9, slug: "solar-system-categories", title: "Grid-Tied, Off-Grid, or Hybrid? How to Choose the Right Solar Setup", category: "Technical & Installation", priority: "P1", date: "2025-10-30", summary: "Guide for explaining grid-tied, off-grid and hybrid electrical setups.", content: "Keep as a technical support article. Rewrite only after the core product and importer articles are finished.", sourceUrl: "https://www.sunlitsolarroof.com/solar-system-categories/" },
  { id: 10, slug: "solar-roof-roi-for-developers", title: "Why Developers Are Doing the Math Wrong on Solar Roofs", category: "Market Insights & ROI", priority: "P1", date: "2026-03-31", summary: "Developer-focused article on how solar roofs affect project value beyond simple electricity payback.", content: "Keep as a developer education article. Avoid unsupported ROI numbers unless tied to a specific market and assumptions.", sourceUrl: "https://www.sunlitsolarroof.com/solar-roof-roi-for-developers/" },
  { id: 11, slug: "future-of-solar-roofs", title: "Why Energy Independence Will Become the Biggest Premium for High End Real Estate", category: "Market Insights & ROI", priority: "P1", date: "2026-04-01", summary: "Market insight article about energy independence as a premium real estate value.", content: "Keep as thought leadership. Rewrite with more evidence before publishing as a core SEO article.", sourceUrl: "https://www.sunlitsolarroof.com/future-of-solar-roofs/" },
  { id: 12, slug: "solar-roofing-business-model", title: "The IKEA Model of Solar Roofing: Who We Work With", category: "Market Insights & ROI", priority: "P1", date: "2026-04-02", summary: "Explains Sunlit's cooperation model with distributors, installers, contractors and developers.", content: "Useful for About or distributor cooperation content. Keep as P1 until the main pages are stable.", sourceUrl: "https://www.sunlitsolarroof.com/solar-roofing-business-model/" },
  { id: 13, slug: "sunlit-bipv-story", title: "From Premium Exterior Contracting to Advanced BIPV: The Sunlit Story", category: "Products & Case Studies", priority: "P2", date: "2026-05-16", summary: "Brand story article that can support the About page after fact-checking.", content: "Keep as a later brand-story rewrite. It should not outrank product and project content in the first migration pass.", sourceUrl: "https://www.sunlitsolarroof.com/sunlit-bipv-story/" },
  { id: 14, slug: "why-are-most-solar-roofs-black", title: "Why Are Most Solar Roofs Black?", category: "Products & Case Studies", priority: "P1", date: "2026-06-05", summary: "Explains the visual and technical reasons many solar roof products are black.", content: "Useful supporting article for Lumina Slate and Storm Guard visual discussions. Keep as P1.", sourceUrl: "https://www.sunlitsolarroof.com/why-are-most-solar-roofs-black/" }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => blogPosts.find((p) => p.slug === slug);
export const getPriorityBlogPosts = (priority: string = "P0"): BlogPost[] => blogPosts.filter((p) => p.priority === priority);
