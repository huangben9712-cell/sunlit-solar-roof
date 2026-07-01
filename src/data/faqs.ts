/**
 * Frequently asked questions used across pages.
 * Keep answers practical and avoid unsupported claims.
 */

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const generalFAQs: FAQ[] = [
  {
    id: "faq-1",
    question: "What is a complete solar roof system?",
    answer: "A complete solar roof system is a coordinated roof package. It includes active PV roof tiles or solar sheets, matching inactive roof elements, flashing, fixings, accessories and project documents. The goal is to make the roof work as both a building envelope and a power-generating surface.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Is Sunlit selling individual solar tiles or a complete system?",
    answer: "Our focus is the complete system. Active solar elements alone are not enough for a real roof. A project normally also needs inactive elements, edge details, fixing parts, flashing and documentation for local installation discussion.",
    category: "General"
  },
  {
    id: "faq-3",
    question: "What is the difference between Lumina Slate and Storm Guard?",
    answer: "Lumina Slate is a premium glass system with a slate-like appearance, suitable for high-end residential and architectural projects. Storm Guard is a modern metal system with a lower cost position and broader application range for residential, commercial, public and large roof projects.",
    category: "Products"
  },
  {
    id: "faq-4",
    question: "Who are the typical buyers?",
    answer: "Typical buyers include roofing distributors, building material importers, solar installers, roofing contractors, developers, architects and project owners who are evaluating integrated solar roof systems.",
    category: "Sales"
  },
  {
    id: "faq-5",
    question: "What information do you need for a quotation?",
    answer: "The most useful information is project country, delivery destination, roof drawing or sketch, estimated roof area, preferred system, target solar capacity if available and project timeline.",
    category: "Sales"
  },
  {
    id: "faq-6",
    question: "Can you help if I do not know which system to choose?",
    answer: "Yes. Send the project information first. We can help discuss whether Lumina Slate or Storm Guard is more suitable based on appearance, budget, roof type and project use.",
    category: "Sales"
  },
  {
    id: "faq-7",
    question: "Do you provide installation support?",
    answer: "We provide product documents, installation notes and project communication support for your local roof and electrical teams. Local installation should be handled by qualified local professionals who understand local building and electrical requirements.",
    category: "Support"
  },
  {
    id: "faq-8",
    question: "Do you provide warranty and certification documents?",
    answer: "Warranty and certification documents depend on the product, market and project scope. Relevant documents can be shared during project discussion. We avoid making unsupported claims before the exact requirement is clear.",
    category: "Documents"
  }
];

export const productFAQs: FAQ[] = [
  {
    id: "product-faq-1",
    question: "Why are inactive roof elements important?",
    answer: "Not every roof area can or should be active solar. Inactive elements cover edges, shaded areas, narrow sections and non-generating roof areas while keeping the roof appearance consistent.",
    category: "Technical"
  },
  {
    id: "product-faq-2",
    question: "Can the system be quoted without a roof drawing?",
    answer: "A rough discussion can start without a drawing, but accurate quotation needs dimensions or roof drawings. Without layout information, the active and inactive ratio, accessories and packaging scope cannot be evaluated properly.",
    category: "Sales"
  },
  {
    id: "product-faq-3",
    question: "Does the electrical system come with the roof package?",
    answer: "The roof package and electrical configuration should be discussed by project. Buyers may need PV modules or tiles, matching roof elements, accessories, inverters, batteries or other electrical equipment depending on the project scope.",
    category: "Technical"
  },
  {
    id: "product-faq-4",
    question: "Can I request samples first?",
    answer: "Samples can be discussed for product evaluation. For project orders, sample cost and shipping can be handled separately from the full roof quotation.",
    category: "Sales"
  }
];

export const contactFAQs: FAQ[] = [
  {
    id: "contact-faq-1",
    question: "How quickly will you respond?",
    answer: "We normally aim to provide an initial response within one to two business days after receiving project information.",
    category: "Process"
  },
  {
    id: "contact-faq-2",
    question: "What file formats can I send?",
    answer: "PDF drawings, CAD files, JPG or PNG sketches and roof photos are all useful. Clear dimensions are more important than a perfect drawing format at the first inquiry stage.",
    category: "Process"
  },
  {
    id: "contact-faq-3",
    question: "Can I contact you by email directly?",
    answer: "Yes. You can email info@sunlitsolarroof.com with your project information, roof drawing and preferred system.",
    category: "Contact"
  }
];

export const allFAQs = [...generalFAQs, ...productFAQs, ...contactFAQs];
export const faqs = allFAQs;

export const getFAQsByCategory = (category: string) => {
  return allFAQs.filter((faq) => faq.category === category);
};

export const getUniqueFAQCategories = () => {
  return Array.from(new Set(allFAQs.map((faq) => faq.category).filter(Boolean))).sort();
};
