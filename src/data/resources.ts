/**
 * Resources Data
 * Public buyer guides and request-based documents
 */

export interface Resource {
  id: string;
  slug: string;
  title: string;
  category: "Buyer Guides" | "Request Documents";
  type: "guide" | "document";
  summary: string;
  content?: string;
  isPublic: boolean;
}

export const resources: Resource[] = [
  // Public Buyer Guides
  {
    id: "what-is-bipv",
    slug: "what-is-bipv",
    title: "What Is a Complete Solar Roof System?",
    category: "Buyer Guides",
    type: "guide",
    summary: "Understanding Building Integrated Photovoltaic (BIPV) systems and how they differ from traditional solar installations.",
    content: `A complete solar roof system, also called Building Integrated Photovoltaic (BIPV), combines the roof structure with solar power generation. Instead of adding solar panels on top of an existing roof, a BIPV system integrates photovoltaic elements directly into the roof itself.

Key characteristics:
- Integrated solar cells in the roof material
- Matching inactive roof elements for complete coverage
- Electrical system for power generation and management
- Designed as a complete system, not an add-on

BIPV systems serve two functions simultaneously: they protect the building from weather while generating electricity. This integration creates a more cohesive aesthetic compared to traditional rooftop solar panels.`,
    isPublic: true,
  },
  {
    id: "lumina-vs-stormguard",
    slug: "lumina-vs-stormguard",
    title: "Lumina Slate vs Storm Guard: System Comparison",
    category: "Buyer Guides",
    type: "guide",
    summary: "Compare the two complete solar roof systems to determine which is right for your project.",
    content: `Both Lumina Slate and Storm Guard are complete BIPV systems, but they serve different project needs.

Lumina Slate (Glass System):
- Premium glass aesthetics with integrated solar cells
- Best for: Residential villas, high-end commercial, architectural projects
- Appearance: Premium slate-like glass tiles
- Material: Double-glass with monocrystalline cells
- Positioning: Premium aesthetics with power generation

Storm Guard (Metal System):
- Modern metal aesthetics with integrated solar cells
- Best for: Commercial, industrial, hospitality, infrastructure
- Appearance: Modern metal roof sheets
- Material: Aluminum-Magnesium-Manganese alloy with solar cells
- Positioning: Cost-effective with broad application range

Both systems include:
- Roof base layer with waterproofing
- Active elements (PV tiles or sheets)
- Matching inactive elements for complete coverage
- Ridge and edge components
- Electrical generation system

Selection depends on your project type, aesthetic preferences, budget, and application.`,
    isPublic: true,
  },
  {
    id: "active-vs-inactive",
    slug: "active-vs-inactive",
    title: "Active vs Inactive Roof Elements: Why Both Matter",
    category: "Buyer Guides",
    type: "guide",
    summary: "Understand the role of both active and inactive elements in a complete solar roof system.",
    content: `A complete solar roof system consists of two types of elements: active and inactive.

Active Elements:
- Contain integrated photovoltaic cells
- Generate electrical power from sunlight
- Connected to the electrical system
- Produce the solar energy output

Inactive Elements:
- Non-PV roof elements matching the active tiles or sheets
- Provide complete roof coverage
- Maintain consistent aesthetics
- Ensure weatherproofing across the entire roof

Why Both Are Necessary:
1. Complete Coverage: Not every part of a roof can accommodate solar cells. Inactive elements fill these areas.
2. Aesthetics: A roof with only scattered active elements would look incomplete. Inactive elements create visual continuity.
3. Functionality: Inactive elements provide structural support and weatherproofing where solar cells are not needed.
4. System Integration: Together, active and inactive elements form a complete, unified roof system.

The ratio of active to inactive elements depends on your roof shape, orientation, and solar capacity goals.`,
    isPublic: true,
  },
  {
    id: "roof-drawing-guide",
    slug: "roof-drawing-guide",
    title: "How to Prepare a Roof Drawing for Quotation",
    category: "Buyer Guides",
    type: "guide",
    summary: "Step-by-step guide to prepare accurate roof drawings for system evaluation and quotation.",
    content: `To provide an accurate quotation, we need clear information about your roof. Here's how to prepare:

What We Need:
1. Roof Layout
   - Top-down view of the roof
   - Dimensions of each roof section
   - Indication of roof pitch or slope

2. Roof Features
   - Location of skylights, vents, or other penetrations
   - Chimney or equipment locations
   - Roof edges and ridges

3. Project Information
   - Building location and country
   - Estimated total roof area (m²)
   - Target solar capacity (kW)
   - Project timeline

How to Prepare:
- Use architectural drawings if available
- Sketch the roof layout on paper or digitally
- Include measurements and dimensions
- Mark any obstacles or special features
- Indicate roof orientation (north, south, etc.)

Formats We Accept:
- PDF architectural drawings
- JPG or PNG photos of sketches
- CAD files
- Simple hand-drawn sketches with dimensions

Next Steps:
1. Prepare your roof drawing
2. Gather project information
3. Submit through our contact form
4. Our team will review and provide quotation

Contact us if you need assistance preparing your roof drawing.`,
    isPublic: true,
  },

  // Request-Based Documents
  {
    id: "product-catalog",
    slug: "product-catalog",
    title: "Product Catalog",
    category: "Request Documents",
    type: "document",
    summary: "Complete product specifications and system information for both Lumina Slate and Storm Guard.",
    isPublic: false,
  },
  {
    id: "lumina-datasheet",
    slug: "lumina-datasheet",
    title: "Lumina Slate Technical Datasheet",
    category: "Request Documents",
    type: "document",
    summary: "Detailed technical specifications for the Lumina Slate glass solar roof system.",
    isPublic: false,
  },
  {
    id: "stormguard-datasheet",
    slug: "stormguard-datasheet",
    title: "Storm Guard Technical Datasheet",
    category: "Request Documents",
    type: "document",
    summary: "Detailed technical specifications for the Storm Guard metal solar roof system.",
    isPublic: false,
  },
  {
    id: "installation-notes",
    slug: "installation-notes",
    title: "Installation Notes",
    category: "Request Documents",
    type: "document",
    summary: "Installation guidelines and best practices for both system types.",
    isPublic: false,
  },
  {
    id: "warranty-docs",
    slug: "warranty-docs",
    title: "Warranty Documents",
    category: "Request Documents",
    type: "document",
    summary: "Warranty terms, coverage details, and claim procedures.",
    isPublic: false,
  },
  {
    id: "certifications",
    slug: "certifications",
    title: "Certification Documents",
    category: "Request Documents",
    type: "document",
    summary: "Quality and safety certifications for our manufacturing and products.",
    isPublic: false,
  },
];

export const getResourceBySlug = (slug: string): Resource | undefined => {
  return resources.find((r) => r.slug === slug);
};

export const getPublicGuides = (): Resource[] => {
  return resources.filter((r) => r.isPublic);
};

export const getRequestDocuments = (): Resource[] => {
  return resources.filter((r) => !r.isPublic);
};

export const getResourcesByCategory = (category: string): Resource[] => {
  return resources.filter((r) => r.category === category);
};
