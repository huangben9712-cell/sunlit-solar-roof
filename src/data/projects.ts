/**
 * Project references migrated from the old WordPress project content type.
 * P0 cases preserve public-facing project detail and image URLs from the legacy site.
 * Remaining projects are kept as reference entries and can be expanded in later passes.
 */

export interface Project {
  id: number;
  slug: string;
  name: string;
  location: string;
  system: "Lumina Slate" | "Storm Guard";
  application: string;
  overview?: string;
  challenge?: string;
  sunlitSolution?: string;
  technicalHighlights?: string[];
  roofArea?: string;
  capacity?: string;
  status?: string;
  images?: string[];
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "beijing-new-world-lizun",
    name: "Beijing New World Lizun: Compact Efficiency & Uncompromising Waterproofing",
    location: "China",
    system: "Lumina Slate",
    application: "Residential",
    overview: "This compact villa project demonstrates how Lumina Slate can be applied to a mid-sized residential roof where the owner needed both clean aesthetics and meaningful solar output. The original legacy case focused on the roof build-up beneath the visible solar tiles, especially the batten structure and waterproof underlayment.",
    challenge: "The villa had a compact roof footprint of about 145 sq.m and required an efficient 6 kW system without bulky add-on panels. Beijing's seasonal rain also made waterproofing, ventilation and long-term roof reliability key concerns for the project.",
    sunlitSolution: "Lumina Slate Pro was installed over a wooden batten framework with waterproof underlayment and counter-batten ventilation. The final roof kept a flush dark slate appearance while integrating active solar roof tiles into the roof surface.",
    technicalHighlights: ["System Type: Grid-Tied Residential", "Solar Tiles: Lumina Slate Series (Pro)", "Installed Capacity: 6 kWp", "Active Roof Area: 145 sq.m", "Annual Estimated Output: 7,200 kWh"],
    roofArea: "145 sq.m",
    capacity: "6 kWp",
    status: "Reference",
    images: ["/images/projects/beijing-new-world-lizun/sunlit-bipv-roof-villa-construction-site.webp", "/images/projects/beijing-new-world-lizun/sunlit-bipv-mounting-system-wooden-battens-scaled.webp", "/images/projects/beijing-new-world-lizun/sunlit-solar-roof-installation-over-battens.webp", "/images/projects/beijing-new-world-lizun/sunlit-solar-slate-roof-edge-finish-beijing.webp"],
    sourceUrl: "https://www.sunlitsolarroof.com/project/beijing-new-world-lizun/"
  },
  {
    id: 2,
    slug: "hangzhou-xianghu-arcadia-villa",
    name: "Hangzhou Xianghu Arcadia Villa: Seamless Solar Integration in Scenic Nature",
    location: "Hangzhou, China",
    system: "Lumina Slate",
    application: "Residential",
    overview: "A high-end villa project in a scenic area where conventional solar panels were not acceptable visually. The legacy case is valuable because it explains the commercial reason for BIPV: the roof needed to generate power while preserving the premium character of the property.",
    challenge: "The development had strict aesthetic requirements, while the existing roof was nearing replacement and the owner wanted better energy resilience. Traditional rack-mounted solar panels would have conflicted with the community appearance and the architectural value of the house.",
    sunlitSolution: "Lumina Slate was used as a full roof replacement, combining active PV roof tiles and matching roof elements into a single architectural surface. The project positioned the solar roof as both an energy upgrade and a premium exterior improvement.",
    technicalHighlights: ["System Type: Grid-Tied Residential", "Solar Tiles: Lumina Slate Series", "Installed Capacity: 10 kWp", "Total Project Area: 227 sq.m", "Annual Estimated Output: 12,000 kWh"],
    roofArea: "227 sq.m",
    capacity: "10 kWp",
    status: "Reference",
    images: ["/images/projects/hangzhou-xianghu-arcadia-villa/sunlit-bipv-roof-scenic-harmony-xianghu-mountains.webp", "/images/projects/hangzhou-xianghu-arcadia-villa/sunlit-solar-roof-tiles-detail-decorative-vent.webp", "/images/projects/hangzhou-xianghu-arcadia-villa/sunlit-solar-slate-installed-texture-close-up.webp", "/images/projects/hangzhou-xianghu-arcadia-villa/sunlit-solar-slate-roof-tiles-xianghu-details.webp"],
    sourceUrl: "https://www.sunlitsolarroof.com/project/hangzhou-xianghu-arcadia-villa/"
  },
  {
    id: 3,
    slug: "nanjing-nanshan-lake",
    name: "Nanjing Nanshan Lake Resort: Vibrant Architecture Meets Green Energy",
    location: "China",
    system: "Lumina Slate",
    application: "Hospitality",
    overview: "A resort villa case where roof color, roof geometry and rain-management details mattered as much as power generation. This is a useful case for hospitality and scenic-property buyers who cannot accept a visually disruptive solar installation.",
    challenge: "The building had a yellow facade, red brick chimney and multiple intersecting roof slopes. The client wanted a 10 kW solar system, but industrial blue panels would have damaged the warm architectural style and the roof valleys required careful water-management details.",
    sunlitSolution: "Lumina Slate Pro+ was selected to create a deep matte roof surface that contrasts with the warm facade. The project also highlighted valley flashing and modular roof-tile integration for a complex lakeside roof.",
    technicalHighlights: ["System Type: Grid-Tied Holiday Resort", "Solar Tiles: Lumina Slate Series (Pro+)", "Installed Capacity: 10 kWp", "Active Roof Area: 245 sq.m", "Annual Estimated Output: 12,000 kWh"],
    roofArea: "245 sq.m",
    capacity: "10 kWp",
    status: "Reference",
    images: ["/images/projects/nanjing-nanshan-lake/sunlit-bipv-roof-gable-edge-finish.webp", "/images/projects/nanjing-nanshan-lake/sunlit-solar-roof-yellow-resort-villa-aerial.webp", "/images/projects/nanjing-nanshan-lake/sunlit-solar-slate-interlocking-texture.webp", "/images/projects/nanjing-nanshan-lake/sunlit-solar-tiles-flat-roof-transition.webp"],
    sourceUrl: "https://www.sunlitsolarroof.com/project/nanjing-nanshan-lake/"
  },
  {
    id: 4,
    slug: "xuzhou-luxury-villa-the-ultimate-bipv-vs-bapv-contrast",
    name: "Xuzhou Luxury Villa: The Ultimate BIPV vs. BAPV Contrast",
    location: "Xuzhou, Jiangsu Province, China",
    system: "Lumina Slate",
    application: "Residential",
    overview: "This legacy case is especially useful because it compares the visual result of integrated solar roofing with nearby rack-mounted panel installations. It supports the core Sunlit positioning: a solar roof should become the roof, not sit awkwardly on top of it.",
    challenge: "The client wanted solar energy but rejected the visual clutter of traditional rack-mounted panels on neighboring villas. The villa also had complex hip-roof geometry where rectangular panels would have left awkward gaps and poor visual coverage.",
    sunlitSolution: "Lumina Slate replaced conventional roof material and created a flush integrated solar roof. The modular roof-tile layout helped cover complex slopes more naturally than standard panels while keeping the roofline clean.",
    technicalHighlights: ["System Type: Grid-Tied Residential", "Solar Tiles: Lumina Slate Series (Pro)", "Installed Capacity: 13 kWp", "Active Roof Area: 140.6 sq.m", "Annual Estimated Output: 14,000 kWh"],
    roofArea: "140.6 sq.m",
    capacity: "13 kWp",
    status: "Reference",
    images: ["/images/projects/xuzhou-luxury-villa-the-ultimate-bipv-vs-bapv-contrast/sunlit-bipv-roof-vent-pipe-integration.webp", "/images/projects/xuzhou-luxury-villa-the-ultimate-bipv-vs-bapv-contrast/sunlit-bipv-vs-bapv-solar-roof-comparison.webp", "/images/projects/xuzhou-luxury-villa-the-ultimate-bipv-vs-bapv-contrast/sunlit-invisible-solar-roof-neighborhood-upgrade.webp", "/images/projects/xuzhou-luxury-villa-the-ultimate-bipv-vs-bapv-contrast/sunlit-solar-tiles-flush-mount-design.webp"],
    sourceUrl: "https://www.sunlitsolarroof.com/project/xuzhou-luxury-villa-the-ultimate-bipv-vs-bapv-contrast/"
  },
  {
    id: 5,
    slug: "jiaxing-boutique-homestay",
    name: "Jiaxing Boutique Homestay: Elevating Hospitality with Invisible Solar",
    location: "China",
    system: "Lumina Slate",
    application: "Hospitality",
    overview: "A boutique hospitality case where the roof was part of the guest experience. This case is useful for hotels, resorts and homestays that want an energy story without damaging the property's visual identity.",
    challenge: "The property owner wanted to reduce operating electricity costs, but traditional solar panels would have disrupted the carefully designed hospitality atmosphere. The project needed meaningful solar capacity on a moderate roof area.",
    sunlitSolution: "Lumina Slate Pro was integrated as the primary roof surface, creating a dark minimalist roof that supports the building's eco-friendly positioning while preserving the exterior appearance.",
    technicalHighlights: ["System Type: Commercial / Hospitality", "Solar Tiles: Lumina Slate Series (Pro)", "Installed Capacity: 8 kWp", "Active Roof Area: 180 sq.m", "Annual Estimated Output: 9,600 kWh"],
    roofArea: "180 sq.m",
    capacity: "8 kWp",
    status: "Reference",
    images: ["/images/projects/jiaxing-boutique-homestay/sunlit-bipv-solar-roof-homestay-jiaxing.webp", "/images/projects/jiaxing-boutique-homestay/sunlit-invisible-solar-slate-sleek-surface.webp", "/images/projects/jiaxing-boutique-homestay/sunlit-solar-roof-valley-flashing-details.webp", "/images/projects/jiaxing-boutique-homestay/sunlit-solar-tiles-clean-energy-guesthouse.webp"],
    sourceUrl: "https://www.sunlitsolarroof.com/project/jiaxing-boutique-homestay/"
  },
  {
    id: 6,
    slug: "usa-private-gymnasium",
    name: "USA Private Gymnasium: Large-Scale BIPV Application on Complex Rooflines",
    location: "United States",
    system: "Lumina Slate",
    application: "Commercial",
    overview: "A large commercial roof reference showing how Lumina Slate can be discussed beyond small residential villas. The original case focused on a large private gymnasium roof with multiple slopes and a strong requirement for visual integration.",
    challenge: "The building had a very large roof area and the owner wanted substantial solar capacity without industrial rack-mounted panels. The roof geometry included multiple hips, valleys and intersecting slopes, making clean visual continuity and water management important.",
    sunlitSolution: "Lumina Slate Pro+ was used as the visible roof surface. The project records emphasized batten alignment, complex roofline treatment and a unified appearance over a large roof area.",
    technicalHighlights: ["System Type: Commercial / Private Leisure", "Solar Tiles: Lumina Slate Series", "Installed Capacity: 75 kWp", "Active Roof Area: 1200 sq.m", "Annual Estimated Output: 90,000 kWh"],
    roofArea: "1200 sq.m",
    capacity: "75 kWp",
    status: "Reference",
    images: ["/images/projects/usa-private-gymnasium/sunlit-bipv-solar-roof-gymnasium-aerial-usa-scaled.webp", "/images/projects/usa-private-gymnasium/usa-gymnasium-solar-roof-construction-scaffolding.webp", "/images/projects/usa-private-gymnasium/usa-large-gym-invisible-solar-roof-facade.webp", "/images/projects/usa-private-gymnasium/usa-solar-roof-substructure-wooden-battens-scaled.webp"],
    sourceUrl: "https://www.sunlitsolarroof.com/project/usa-private-gymnasium/"
  },
  {
    id: 7,
    slug: "large-scale-commercial-complex",
    name: "Large-Scale Commercial Complex: Storm Guard Commercial Roof Reference",
    location: "China",
    system: "Storm Guard",
    application: "Commercial",
    overview: "A large commercial reference for Storm Guard. The legacy case is useful for showing that Sunlit's offer is not limited to premium villas; the metal system is positioned for larger, more practical roof applications.",
    challenge: "The commercial complex required a large roof-area solar solution with stronger weather-resistance expectations than a standard residential project. The buyer needed a roof-integrated system rather than a separate rack-mounted panel array.",
    sunlitSolution: "Storm Guard was selected as a reinforced metal solar roof system for a large roof area. The case highlights drainage, roof-surface continuity and high-capacity project discussion for commercial buyers.",
    technicalHighlights: ["System Type: Large-Scale Commercial Complex", "Solar Tiles: Storm Guard Series", "Installed Capacity: 150 kWp", "Active Roof Area: 1,500 sq.m", "Annual Estimated Output: 180,000 kWh"],
    roofArea: "1,500 sq.m",
    capacity: "150 kWp",
    status: "Reference",
    images: ["/images/projects/large-scale-commercial-complex/storm-guard-bipv-extreme-weather-water-shedding.webp", "/images/projects/large-scale-commercial-complex/storm-guard-heavy-duty-solar-tiles-commercial-scale.webp", "/images/projects/large-scale-commercial-complex/storm-guard-hurricane-resistant-solar-roof-construction-scaled.webp", "/images/projects/large-scale-commercial-complex/storm-guard-large-scale-bipv-integration-aerial-scaled.webp"],
    sourceUrl: "https://www.sunlitsolarroof.com/project/large-scale-commercial-complex/"
  },
  {
    id: 8,
    slug: "us-coastal-community",
    name: "US Coastal Community: Neighborhood-Scale BIPV Deployment",
    location: "United States",
    system: "Lumina Slate",
    application: "Community",
    overview: "A neighborhood-scale reference showing how integrated solar roofing can support developer and HOA-driven projects where visual consistency matters across multiple homes.",
    challenge: "The developer wanted to offer greener homes in a premium coastal community, but standard rack-mounted solar panels were not aligned with the desired neighborhood appearance. Uniform roof aesthetics and scalable deployment were the main project concerns.",
    sunlitSolution: "Lumina Slate was positioned as a standard roofing material for the development, allowing solar generation to be integrated into the roof appearance instead of added as a separate rooftop object.",
    technicalHighlights: ["System Type: Community-Scale Residential Development", "Capacity: 10-15 kWp per household", "Key Features: HOA-compliant aesthetic, neighborhood uniformity, developer-ready scalability", "Application Environment: High-end coastal / waterfront communities"],
    capacity: "10-15 kWp per household",
    status: "Reference",
    images: ["/images/projects/us-coastal-community/neighborhood-scale-solar-roof-deployment.webp", "/images/projects/us-coastal-community/solar-roof-standard-for-new-developments.webp", "/images/projects/us-coastal-community/us-coastal-villa-invisible-solar-roof.webp", "/images/projects/us-coastal-community/us-modern-home-bipv-facade-integration.webp"],
    sourceUrl: "https://www.sunlitsolarroof.com/project/us-coastal-community/"
  },
  { id: 9, slug: "beijing-poly-longshang-luxury-villa-bipv-integration-on-complex-roof-geometry", name: "Beijing Poly Longshang Luxury Villa: BIPV Integration on Complex Roof Geometry", location: "China", system: "Lumina Slate", application: "Residential", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/beijing-poly-longshang-luxury-villa-bipv-integration-on-complex-roof-geometry/" },
  { id: 10, slug: "beijing-tanxiangshan-villa", name: "Beijing Tanxiangshan Villa: High-Capacity BIPV Roofing Solutions", location: "China", system: "Lumina Slate", application: "Residential", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/beijing-tanxiangshan-villa/" },
  { id: 11, slug: "hangzhou-eco-tech-building", name: "Hangzhou Eco-Tech Building: BIPV Integration on Timber Structures", location: "China", system: "Lumina Slate", application: "Commercial", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/hangzhou-eco-tech-building/" },
  { id: 12, slug: "hangzhou-jiuxi-rose-garden", name: "Hangzhou Jiuxi Rose Garden: Powering Ultra-Luxury European Estates", location: "China", system: "Lumina Slate", application: "Residential", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/hangzhou-jiuxi-rose-garden/" },
  { id: 13, slug: "hangzhou-yunxi-diegu-villa", name: "Hangzhou Yunxi Diegu Villa: Aesthetic Solar Upgrades for Premium Communities", location: "China", system: "Lumina Slate", application: "Residential", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/hangzhou-yunxi-diegu-villa/" },
  { id: 14, slug: "nanjing-shanshui-huamen-villa-custom-solar-integration-on-complex-rooflines", name: "Nanjing Shanshui Huamen Villa: Custom Solar Integration on Complex Rooflines", location: "China", system: "Lumina Slate", application: "Residential", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/nanjing-shanshui-huamen-villa-custom-solar-integration-on-complex-rooflines/" },
  { id: 15, slug: "shanghai-ansheng-huayuan-villa", name: "Shanghai Ansheng Huayuan Villa: Modernizing Urban Residences with BIPV", location: "China", system: "Lumina Slate", application: "Residential", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/shanghai-ansheng-huayuan-villa/" },
  { id: 16, slug: "shanghai-hongqiao-royal-villa", name: "Shanghai Hongqiao Royal Villa: High-Density Solar Power for Premium Estates", location: "China", system: "Lumina Slate", application: "Residential", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/shanghai-hongqiao-royal-villa/" },
  { id: 17, slug: "suzhou-urban-relay-station", name: "Suzhou Urban Relay Station: Empowering Smart City Infrastructure", location: "China", system: "Lumina Slate", application: "Infrastructure", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/suzhou-urban-relay-station/" },
  { id: 18, slug: "yiwu-golf-villa", name: "Yiwu Golf Villa: Maximum Power Density on a Compact Roof", location: "China", system: "Lumina Slate", application: "Residential", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/yiwu-golf-villa/" },
  { id: 19, slug: "urban-low-slope-extension", name: "Urban Low-Slope Extension: Flat Roof Solar Reference", location: "China", system: "Storm Guard", application: "Residential", overview: "Legacy Storm Guard reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/urban-low-slope-extension/" },
  { id: 20, slug: "urban-compact-home-retrofit", name: "Urban Compact Home Retrofit: Solar Integration Reference", location: "China", system: "Storm Guard", application: "Residential", overview: "Legacy Storm Guard reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/urban-compact-home-retrofit/" },
  { id: 21, slug: "urban-eco-park", name: "Urban Eco-Park Energy Station: BIPV Showcase Reference", location: "China", system: "Lumina Slate", application: "Infrastructure", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/urban-eco-park/" },
  { id: 22, slug: "custom-red-bipv-solutions", name: "Heritage Aesthetic Meets Green Energy: Custom Red BIPV Solutions", location: "China", system: "Lumina Slate", application: "Residential", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/custom-red-bipv-solutions/" },
  { id: 23, slug: "modern-minimalist-residence", name: "Modern Minimalist Residence: Ultra-Flat Horizontal Solar Integration", location: "China", system: "Lumina Slate", application: "Residential", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/modern-minimalist-residence/" },
  { id: 24, slug: "pioneer-residential-retrofit", name: "Pioneer Residential Retrofit: The Evolution of BIPV Integration", location: "China", system: "Lumina Slate", application: "Residential", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/pioneer-residential-retrofit/" },
  { id: 25, slug: "premium-waterfront-estate", name: "Premium Waterfront Estate: Architectural BIPV for Custom Mansions", location: "China", system: "Lumina Slate", application: "Residential", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/premium-waterfront-estate/" },
  { id: 26, slug: "public-utility-infrastructure", name: "Public Utility Infrastructure: Curved BIPV Integration Reference", location: "China", system: "Lumina Slate", application: "Infrastructure", overview: "Legacy project reference migrated from the old website. Keep as a visual and application reference; expand with verified details in a later pass.", status: "Reference", sourceUrl: "https://www.sunlitsolarroof.com/project/public-utility-infrastructure/" }
];

export const getProjectBySlug = (slug: string): Project | undefined => projects.find((p) => p.slug === slug);
export const getProjectsBySystem = (system: string): Project[] => projects.filter((p) => p.system === system);
export const getProjectsByApplication = (application: string): Project[] => projects.filter((p) => p.application === application);
