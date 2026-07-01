/**
 * Product data for the two Sunlit solar roof systems.
 */

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  positioning: string;
  activeElement: {
    name: string;
    description: string;
  };
  inactiveElement: {
    name: string;
    description: string;
  };
  applications: string[];
  bestFor: string[];
  costPosition: string;
}

export const products: Record<string, Product> = {
  luminaSlate: {
    id: "lumina-slate",
    name: "Lumina Slate",
    slug: "lumina-slate-glass-solar-roof-system",
    description: "Premium slate-look glass solar roof system for projects where roof appearance matters.",
    positioning: "Lumina Slate combines AG-etched frameless double-glass PV roof tiles with matching inactive glass tiles, flashing, fixings and accessories. It is designed for villas, premium residential roofs and architectural projects where the roof must look intentional, not like an add-on solar installation.",
    activeElement: {
      name: "AG-Etched Glass PV Roof Tile",
      description: "The active element generates electricity while maintaining a premium slate-like glass roof appearance. Final electrical layout depends on roof drawing and target system capacity."
    },
    inactiveElement: {
      name: "Matching Glass Inactive Tile",
      description: "The inactive element covers non-generating roof areas such as edges, shaded sections or layout gaps while keeping the whole roof visually consistent."
    },
    applications: ["Premium villas", "High-end residential roofs", "Architectural projects", "Boutique hospitality", "Distributor show projects"],
    bestFor: ["Premium roof appearance", "Slate-like glass aesthetics", "Projects where solar panels are visually unacceptable", "Buyers who need a complete active and inactive roof package"],
    costPosition: "Premium"
  },
  stormGuard: {
    id: "storm-guard",
    name: "Storm Guard",
    slug: "storm-guard-metal-solar-roof-system",
    description: "Modern metal solar roof system with active solar sheets and matching inactive metal roof elements.",
    positioning: "Storm Guard combines low-standing-seam Al-Mg-Mn metal solar roof sheets with matching inactive metal roof elements, flashing, fixings and accessories. It is positioned as a practical integrated solar roofing system for modern residential, commercial, public and large roof projects.",
    activeElement: {
      name: "Metal Solar Roof Sheet",
      description: "The active metal solar sheet integrates photovoltaic generation into a modern metal roof surface. Final electrical layout depends on roof drawing and project requirements."
    },
    inactiveElement: {
      name: "Matching Inactive Metal Roof Element",
      description: "The inactive element completes non-generating roof areas while matching the active sheet appearance and helping define the full roof package."
    },
    applications: ["Modern residential roofs", "Commercial buildings", "Public buildings", "Large roof projects", "Cost-sensitive solar roof projects"],
    bestFor: ["Modern metal roof aesthetics", "Lower cost position than premium glass systems", "Large-area roof coverage", "Buyers who need a practical complete solar roof package"],
    costPosition: "Cost-effective"
  }
};

export const productsList = Object.values(products);

export const getProductBySlug = (slug: string): Product | undefined => {
  return Object.values(products).find((p) => p.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return Object.values(products).find((p) => p.id === id);
};
