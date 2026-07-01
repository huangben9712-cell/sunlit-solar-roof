/**
 * FAQs Data
 * Frequently asked questions used across pages
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
    answer: "A complete solar roof system includes active PV tiles or solar sheets that generate electricity, matching inactive roof elements for complete coverage, flashing and drainage details, fixings, and accessories. It's not just isolated solar tiles—it's a coordinated roof package.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "What's the difference between Lumina Slate and Storm Guard?",
    answer: "Lumina Slate is a premium glass system with AG-etched frameless double-glass PV tiles offering slate-like aesthetics, ideal for high-end residential projects. Storm Guard is a cost-effective metal system with Al-Mg-Mn solar roof sheets, suitable for residential, commercial, public, and large-area projects.",
    category: "Products",
  },
  {
    id: "faq-3",
    question: "Do you provide installation support?",
    answer: "We provide installation documents and project support to help your local installation team understand the system. However, installation must be performed by qualified local professionals who are familiar with roofing and electrical work in your region.",
    category: "Support",
  },
  {
    id: "faq-4",
    question: "Can you help with project quotations?",
    answer: "Yes. Send us your roof drawing, project country, estimated roof area, and preferred system. We'll review your project and provide guidance on system choice, product scope, and quotation direction.",
    category: "Sales",
  },
  {
    id: "faq-5",
    question: "What warranty do you offer?",
    answer: "Warranty terms depend on the product and project scope. Detailed warranty documents are available upon request.",
    category: "Warranty",
  },
  {
    id: "faq-6",
    question: "Do you work with distributors and importers?",
    answer: "Yes. We work with roofing distributors, building material importers, solar installers, roofing contractors, developers, and architects. We can discuss distributor cooperation, pricing, and supply arrangements.",
    category: "Sales",
  },
];

export const productFAQs: FAQ[] = [
  {
    id: "product-faq-1",
    question: "What materials are used in the active elements?",
    answer: "Lumina Slate uses AG-etched frameless double-glass PV tiles. Storm Guard uses Al-Mg-Mn (aluminum-magnesium-manganese) metal solar roof sheets.",
    category: "Technical",
  },
  {
    id: "product-faq-2",
    question: "How are the inactive elements matched?",
    answer: "Both systems include matching inactive roof elements that coordinate with the active PV elements. For Lumina Slate, these are glass tiles. For Storm Guard, these are metal sheets. This ensures complete roof coverage and consistent aesthetics.",
    category: "Technical",
  },
  {
    id: "product-faq-3",
    question: "What information do you need for a quotation?",
    answer: "We need: roof drawing or dimensions, project country/region, estimated roof area, preferred system (Lumina Slate or Storm Guard), target solar capacity if available, installation timeline, and any specific project requirements.",
    category: "Sales",
  },
];

export const contactFAQs: FAQ[] = [
  {
    id: "contact-faq-1",
    question: "How long does it take to receive a quotation?",
    answer: "After we receive your project information, we typically provide initial feedback within 2-3 business days. Detailed quotations depend on project complexity.",
    category: "Process",
  },
  {
    id: "contact-faq-2",
    question: "Can I upload a roof drawing?",
    answer: "Yes. You can upload your roof drawing through the contact form. We accept common formats like PDF, JPG, and PNG.",
    category: "Process",
  },
  {
    id: "contact-faq-3",
    question: "What's the best way to contact you?",
    answer: "You can use the contact form on this page, email us at info@sunlitsolarroof.com, or reach out through WhatsApp. We'll respond to all inquiries within 1-2 business days.",
    category: "Contact",
  },
];

export const allFAQs = [...generalFAQs, ...productFAQs, ...contactFAQs];

// Alias for compatibility
export const faqs = allFAQs;

export const getFAQsByCategory = (category: string) => {
  return allFAQs.filter((faq) => faq.category === category);
};

export const getUniqueFAQCategories = () => {
  return Array.from(new Set(allFAQs.map((faq) => faq.category).filter(Boolean))).sort();
};
