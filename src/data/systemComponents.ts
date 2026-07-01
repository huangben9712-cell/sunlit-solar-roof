/**
 * System component data for complete solar roof systems.
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
    id: "lumina-base-layer",
    name: "Roof Base and Waterproof Layer",
    description: "The roof base and waterproofing layer support the solar roof package and help define the interface with the building structure.",
    function: "Provides a coordinated base for the roofing system"
  },
  {
    id: "lumina-active-tiles",
    name: "Active Glass PV Roof Tiles",
    description: "AG-etched frameless double-glass PV roof tiles that generate electricity while keeping a premium slate-like roof appearance.",
    function: "Generates solar electricity"
  },
  {
    id: "lumina-inactive-tiles",
    name: "Matching Glass Inactive Tiles",
    description: "Non-PV glass roof tiles that match the active tiles and cover non-generating roof areas.",
    function: "Completes roof coverage and visual continuity"
  },
  {
    id: "lumina-flashing-accessories",
    name: "Flashing and Accessories",
    description: "Ridge, edge, flashing and accessory components are selected according to roof layout and project details.",
    function: "Supports roof edge treatment and integration details"
  },
  {
    id: "lumina-electrical-coordination",
    name: "Electrical Coordination",
    description: "Electrical configuration is discussed by project and may include PV string planning, cable routes and system interface requirements.",
    function: "Connects the active roof elements to the project electrical design"
  }
];

export const stormGuardComponents: Component[] = [
  {
    id: "storm-base-layer",
    name: "Roof Base and Waterproof Layer",
    description: "The roof base and waterproofing layer support the metal solar roof system and help coordinate the roof assembly.",
    function: "Provides a coordinated base for the roofing system"
  },
  {
    id: "storm-active-sheets",
    name: "Active Metal Solar Roof Sheets",
    description: "Low-standing-seam metal solar roof sheets that combine metal roofing appearance with photovoltaic generation.",
    function: "Generates solar electricity while forming the roof surface"
  },
  {
    id: "storm-inactive-elements",
    name: "Matching Inactive Metal Roof Elements",
    description: "Non-PV metal roof elements that match the active sheets and complete roof areas without solar generation.",
    function: "Completes roof coverage and visual consistency"
  },
  {
    id: "storm-flashing-accessories",
    name: "Flashing and Accessories",
    description: "Ridge, edge, flashing, drainage and accessory components are selected according to roof layout and project scope.",
    function: "Supports roof edge treatment and integration details"
  },
  {
    id: "storm-electrical-coordination",
    name: "Electrical Coordination",
    description: "Electrical configuration is discussed by project and depends on active roof layout, target capacity and local electrical requirements.",
    function: "Connects the active roof sheets to the project electrical design"
  }
];

export const allSystemComponents: SystemComponents[] = [
  { system: "Lumina Slate", components: luminaSlateComponents },
  { system: "Storm Guard", components: stormGuardComponents }
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
