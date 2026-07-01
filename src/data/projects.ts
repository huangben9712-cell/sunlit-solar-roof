/**
 * Project references.
 * Keep only reliable high-level information here. Do not invent roof area,
 * capacity, certification, wind rating, year or detailed performance data.
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
  relatedSystem?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  { id: 1, slug: "beijing-new-world-lizun", name: "Beijing New World Lizun Solar Roof Reference", location: "Beijing, China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 2, slug: "hangzhou-xianghu-arcadia-villa", name: "Hangzhou Xianghu Arcadia Villa Solar Roof Reference", location: "Hangzhou, China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 3, slug: "nanjing-nanshan-lake-resort", name: "Nanjing Nanshan Lake Resort Solar Roof Reference", location: "Nanjing, China", system: "Lumina Slate", application: "Hospitality", status: "Reference" },
  { id: 4, slug: "xuzhou-luxury-villa", name: "Xuzhou Luxury Villa Solar Roof Reference", location: "Xuzhou, China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 5, slug: "beijing-poly-longshang-luxury-villa", name: "Beijing Poly Longshang Villa Solar Roof Reference", location: "Beijing, China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 6, slug: "beijing-tanxiangshan-villa", name: "Beijing Tanxiangshan Villa Solar Roof Reference", location: "Beijing, China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 7, slug: "hangzhou-eco-tech-building", name: "Hangzhou Eco-Tech Building Solar Roof Reference", location: "Hangzhou, China", system: "Lumina Slate", application: "Commercial", status: "Reference" },
  { id: 8, slug: "hangzhou-jiuxi-rose-garden", name: "Hangzhou Jiuxi Rose Garden Solar Roof Reference", location: "Hangzhou, China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 9, slug: "hangzhou-yunxi-diegu-villa", name: "Hangzhou Yunxi Diegu Villa Solar Roof Reference", location: "Hangzhou, China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 10, slug: "jiaxing-boutique-homestay", name: "Jiaxing Boutique Homestay Solar Roof Reference", location: "Jiaxing, China", system: "Lumina Slate", application: "Hospitality", status: "Reference" },
  { id: 11, slug: "nanjing-shanshui-huamen-villa", name: "Nanjing Shanshui Huamen Villa Solar Roof Reference", location: "Nanjing, China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 12, slug: "shanghai-ansheng-huayuan-villa", name: "Shanghai Ansheng Huayuan Villa Solar Roof Reference", location: "Shanghai, China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 13, slug: "shanghai-hongqiao-royal-villa", name: "Shanghai Hongqiao Royal Villa Solar Roof Reference", location: "Shanghai, China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 14, slug: "suzhou-urban-relay-station", name: "Suzhou Urban Relay Station Solar Roof Reference", location: "Suzhou, China", system: "Lumina Slate", application: "Infrastructure", status: "Reference" },
  { id: 15, slug: "yiwu-golf-villa", name: "Yiwu Golf Villa Solar Roof Reference", location: "Yiwu, China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 16, slug: "usa-private-gymnasium", name: "USA Private Gymnasium Solar Roof Reference", location: "USA", system: "Lumina Slate", application: "Community", status: "Reference" },
  { id: 17, slug: "large-scale-commercial-complex", name: "Commercial Complex Solar Roof Reference", location: "China", system: "Lumina Slate", application: "Commercial", status: "Reference" },
  { id: 18, slug: "urban-low-slope-extension", name: "Urban Low-Slope Roof Solar Reference", location: "China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 19, slug: "urban-compact-home-retrofit", name: "Urban Compact Home Solar Roof Reference", location: "China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 20, slug: "urban-eco-park-energy-station", name: "Urban Eco-Park Solar Roof Reference", location: "China", system: "Lumina Slate", application: "Infrastructure", status: "Reference" },
  { id: 21, slug: "heritage-aesthetic-meets-green-energy", name: "Custom Color Solar Roof Reference", location: "China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 22, slug: "modern-minimalist-residence", name: "Modern Minimalist Residence Solar Roof Reference", location: "China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 23, slug: "pioneer-residential-retrofit", name: "Residential Retrofit Solar Roof Reference", location: "China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 24, slug: "premium-waterfront-estate", name: "Waterfront Estate Solar Roof Reference", location: "China", system: "Lumina Slate", application: "Residential", status: "Reference" },
  { id: 25, slug: "us-coastal-community", name: "US Coastal Community Solar Roof Reference", location: "USA", system: "Lumina Slate", application: "Community", status: "Reference" },
  { id: 26, slug: "public-utility-infrastructure", name: "Public Utility Infrastructure Solar Roof Reference", location: "China", system: "Lumina Slate", application: "Infrastructure", status: "Reference" }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getProjectsBySystem = (system: string): Project[] => {
  return projects.filter((p) => p.system === system);
};

export const getProjectsByApplication = (application: string): Project[] => {
  return projects.filter((p) => p.application === application);
};
