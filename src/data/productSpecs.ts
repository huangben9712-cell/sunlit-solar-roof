export type ProductLineKey = 'luminaSlate' | 'stormGuard';

export interface SpecItem {
  label: string;
  value: string;
}

export interface ActiveTileSpec {
  productLine: 'Lumina Slate' | 'Storm Guard';
  displayName: string;
  shortName: string;
  powerPmax: string;
  size: string;
  effectiveSize: string;
  weight: string;
  appearanceArea: string;
  effectiveArea: string;
  encapsulation: string;
  cellType: string;
  vpm: string;
  imp: string;
  voc: string;
  isc: string;
  wattsPerSquareMeter: string;
  moduleEfficiency: string;
  areaEfficiency: string;
  color: string;
  sharedPerformance: SpecItem[];
  sourceNote: string;
}

export const sharedActiveTilePerformance: SpecItem[] = [
  { label: 'Mechanical Load', value: '≥5400Pa' },
  { label: 'Fire Rating', value: 'Grade A' },
  { label: 'Wind Resistance', value: '12-level typhoon' },
  { label: 'Hail Resistance', value: '35mm' },
  { label: 'IP Rating', value: 'IP68' },
  { label: 'Installation', value: 'Overlap (up/down/left/right)' },
  { label: 'Waterproofing', value: 'Structural waterproof' },
];

export const activeTileSpecs: Record<ProductLineKey, ActiveTileSpec> = {
  luminaSlate: {
    productLine: 'Lumina Slate',
    displayName: 'Lumina Slate Active Solar Tile',
    shortName: 'Active Glass PV Tile',
    powerPmax: '70W',
    size: '1240 × 390 × 6.2 mm',
    effectiveSize: '1220 × 340 × 5.8 mm',
    weight: '6 ± 0.5 kg',
    appearanceArea: '0.484 m²',
    effectiveArea: '0.414 m²',
    encapsulation: 'Double glass adhesive',
    cellType: 'Monocrystalline PERC',
    vpm: '7.83V',
    imp: '8.94A',
    voc: '9.58V',
    isc: '9.72A',
    wattsPerSquareMeter: '170W/m²',
    moduleEfficiency: '14.46%',
    areaEfficiency: '17%',
    color: 'Black matte',
    sharedPerformance: sharedActiveTilePerformance,
    sourceNote: 'Source: docs/component-image-inventory.md active tile specs from latest datasheet.',
  },
  stormGuard: {
    productLine: 'Storm Guard',
    displayName: 'Storm Guard Active Solar Tile',
    shortName: 'Active Metal Solar Roof Sheet',
    powerPmax: '135W',
    size: '1950 × 420 mm',
    effectiveSize: '1850 × 420 mm',
    weight: '9.3 ± 0.2 kg',
    appearanceArea: '0.81 m²',
    effectiveArea: '0.777 m²',
    encapsulation: 'Single glass adhesive',
    cellType: 'Monocrystalline TOPCON',
    vpm: '22.03V',
    imp: '6.13A',
    voc: '25.31V',
    isc: '6.45A',
    wattsPerSquareMeter: '175W/m²',
    moduleEfficiency: '16.67%',
    areaEfficiency: '17.50%',
    color: 'Black',
    sharedPerformance: sharedActiveTilePerformance,
    sourceNote: 'Source: docs/component-image-inventory.md active tile specs from latest datasheet.',
  },
};

export const productComparison: SpecItem[] = [
  { label: 'Lumina Slate', value: 'Premium glass solar roof tile line for villas and architecture-led roofs.' },
  { label: 'Storm Guard', value: 'Modern metal solar roof sheet line for larger, practical and cost-positioned projects.' },
];

export const specDataRule = 'Product specs must be imported from src/data/productSpecs.ts or verified against docs/component-image-inventory.md. Do not handwrite placeholder values on pages.';
