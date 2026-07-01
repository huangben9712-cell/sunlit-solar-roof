/**
 * Product Data
 * Reusable product definitions for Lumina Slate and Storm Guard
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
    description: "Premium glass solar roof system with integrated photovoltaic tiles",
    positioning: "Double-glass photovoltaic roof tiles with anti-glare surface and matching glass inactive tiles. Premium aesthetics with integrated solar generation.",
    activeElement: {
      name: "Glass PV Roof Tiles",
      description: "Double-glass photovoltaic tiles with integrated solar cells",
    },
    inactiveElement: {
      name: "Matching Glass Inactive Tiles",
      description: "Non-PV glass tiles matching the active elements for complete roof coverage",
    },
    applications: ["Residential", "Commercial", "Hospitality", "Architectural Projects"],
    bestFor: ["Premium aesthetics", "Architectural integration", "High-end projects"],
    costPosition: "Premium",
  },
  stormGuard: {
    id: "storm-guard",
    name: "Storm Guard",
    slug: "storm-guard-metal-solar-roof-system",
    description: "Metal solar roof system with integrated photovoltaic sheets",
    positioning: "Metal solar roof sheets with integrated solar cells and matching inactive metal roof elements. Modern metal aesthetics with integrated power generation.",
    activeElement: {
      name: "Metal Solar Roof Sheets",
      description: "Metal roof sheets with integrated photovoltaic cells",
    },
    inactiveElement: {
      name: "Matching Metal Roof Elements",
      description: "Non-PV metal sheets matching the active elements for complete roof coverage",
    },
    applications: ["Residential", "Commercial", "Industrial", "Infrastructure"],
    bestFor: ["Cost-effectiveness", "Modern aesthetics", "Broad application range"],
    costPosition: "Cost-effective",
  },
};

export const productsList = Object.values(products);

export const getProductBySlug = (slug: string): Product | undefined => {
  return Object.values(products).find((p) => p.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return Object.values(products).find((p) => p.id === id);
};
