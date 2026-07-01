/**
 * System Components Data
 * Detailed component specifications for each system
 */

export interface Component {
  id: string;
  name: string;
  description: string;
  function: string;
  material?: string;
}

export interface SystemComponents {
  system: string;
  components: Component[];
}

export const luminaSlateComponents: Component[] = [
  {
    id: "lumina-roof-base",
    name: "Roof Base Layer",
    description: "Structural foundation for the BIPV system with waterproofing and insulation",
    function: "Provides structural support and weatherproofing",
    material: "Waterproofing membrane and thermal insulation",
  },
  {
    id: "lumina-active-tiles",
    name: "Active PV Glass Tiles",
    description: "Double-glass photovoltaic roofing tiles with integrated solar cells",
    function: "Generate electrical power from sunlight",
    material: "Tempered glass with monocrystalline silicon cells",
  },
  {
    id: "lumina-inactive-tiles",
    name: "Matching Inactive Glass Tiles",
    description: "Non-PV glass tiles matching active tiles for complete roof coverage",
    function: "Complete roof coverage with consistent aesthetics",
    material: "Tempered glass",
  },
  {
    id: "lumina-ridge-edge",
    name: "Ridge & Edge Tiles",
    description: "Specialized tiles for roof edges and ridges",
    function: "Weatherproof edges and provide clean aesthetics",
    material: "Tempered glass with aluminum frame",
  },
  {
    id: "lumina-electrical",
    name: "Electrical System",
    description: "Power generation and management system",
    function: "Convert solar power to usable electricity",
    material: "Copper wiring and aluminum enclosures",
  },
];

export const stormGuardComponents: Component[] = [
  {
    id: "storm-roof-base",
    name: "Roof Base Layer",
    description: "Structural foundation for the metal BIPV system with waterproofing and insulation",
    function: "Provides structural support and weatherproofing",
    material: "Waterproofing membrane and thermal insulation",
  },
  {
    id: "storm-active-sheets",
    name: "Active Metal Solar Roof Sheets",
    description: "Metal solar roof sheets with integrated photovoltaic cells",
    function: "Generate electrical power while providing roof protection",
    material: "Aluminum-Magnesium-Manganese alloy with solar cells",
  },
  {
    id: "storm-inactive-sheets",
    name: "Matching Inactive Metal Roof Elements",
    description: "Non-PV metal sheets matching active sheets for complete coverage",
    function: "Complete roof coverage with consistent appearance",
    material: "Aluminum-Magnesium-Manganese alloy",
  },
  {
    id: "storm-ridge-edge",
    name: "Ridge & Edge Pieces",
    description: "Specialized metal pieces for roof edges and ridges",
    function: "Weatherproof edges and provide clean aesthetics",
    material: "Aluminum-Magnesium-Manganese alloy with stainless steel fasteners",
  },
  {
    id: "storm-electrical",
    name: "Electrical System",
    description: "Power generation and management system",
    function: "Convert solar power to usable electricity",
    material: "Copper wiring and aluminum enclosures",
  },
];

export const allSystemComponents: SystemComponents[] = [
  {
    system: "Lumina Slate",
    components: luminaSlateComponents,
  },
  {
    system: "Storm Guard",
    components: stormGuardComponents,
  },
];

export const getComponentsBySystem = (system: string): Component[] => {
  const systemData = allSystemComponents.find((s) => s.system === system);
  return systemData ? systemData.components : [];
};

export const getComponentById = (id: string): Component | undefined => {
  for (const system of allSystemComponents) {
    const component = system.components.find((c) => c.id === id);
    if (component) return component;
  }
  return undefined;
};
