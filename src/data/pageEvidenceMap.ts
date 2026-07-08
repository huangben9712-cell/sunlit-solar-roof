import type { MediaEvidenceType } from './mediaAssets';

export interface PageEvidencePlan {
  page: string;
  route: string;
  status: 'locked' | 'near-locked' | 'exploration' | 'planned';
  primaryBuyerQuestion: string;
  evidenceTypes: MediaEvidenceType[];
  recommendedAssetGroups: string[];
  nextBuildAction: string;
  ownerHint: 'ChatGPT' | 'Manus' | 'OpenCode' | 'Image/Video AI' | 'Mixed';
}

export const pageEvidenceMap: PageEvidencePlan[] = [
  {
    page: 'Home',
    route: '/',
    status: 'near-locked',
    primaryBuyerQuestion: 'Who are you, what do you supply, and are you worth exploring further?',
    evidenceTypes: ['aesthetic', 'project', 'factory', 'component'],
    recommendedAssetGroups: ['project-images', 'component-images', 'factory-images', 'testing-videos'],
    nextBuildAction: 'Do not redesign. Optional future module only: NEW: Proof Behind the Product.',
    ownerHint: 'Mixed',
  },
  {
    page: 'Supply Scope',
    route: '/system-overview/',
    status: 'exploration',
    primaryBuyerQuestion: 'What exactly does Sunlit supply from the factory, and what is handled locally?',
    evidenceTypes: ['component', 'factory', 'installation', 'shipping'],
    recommendedAssetGroups: ['component-images', 'factory-images', 'shipping-images', 'storm-installation-images'],
    nextBuildAction: 'Rework into a visual roof-package explanation page using real component photos.',
    ownerHint: 'Manus',
  },
  {
    page: 'Lumina Slate',
    route: '/lumina-slate/',
    status: 'exploration',
    primaryBuyerQuestion: 'Is this premium glass solar roof tile line attractive and credible enough for high-end projects?',
    evidenceTypes: ['aesthetic', 'component', 'project', 'installation', 'quality'],
    recommendedAssetGroups: ['project-images', 'component-images', 'lumina-installation-videos', 'lumina-project-drone-video', 'testing-videos'],
    nextBuildAction: 'Rebuild as a visual proof page: project gallery, component photos, installation proof and accurate specs.',
    ownerHint: 'Manus',
  },
  {
    page: 'Storm Guard',
    route: '/storm-guard/',
    status: 'exploration',
    primaryBuyerQuestion: 'Is this modern metal solar roof sheet line practical for larger or cost-positioned projects?',
    evidenceTypes: ['aesthetic', 'component', 'project', 'installation', 'quality'],
    recommendedAssetGroups: ['project-images', 'component-images', 'storm-installation-images', 'storm-installation-videos', 'testing-videos'],
    nextBuildAction: 'Rebuild as a modern engineering-friendly product page with component and install proof.',
    ownerHint: 'Manus',
  },
  {
    page: 'Projects',
    route: '/projects/',
    status: 'near-locked',
    primaryBuyerQuestion: 'Have you supplied real projects that look credible?',
    evidenceTypes: ['project', 'aesthetic'],
    recommendedAssetGroups: ['project-images', 'onsite-whatsapp-videos'],
    nextBuildAction: 'Do not redesign now. Later connect product pages to related project cards.',
    ownerHint: 'Manus',
  },
  {
    page: 'Project Detail',
    route: '/projects/[slug]/',
    status: 'near-locked',
    primaryBuyerQuestion: 'Is this case real and relevant to my project?',
    evidenceTypes: ['project', 'aesthetic', 'installation'],
    recommendedAssetGroups: ['project-images', 'onsite-whatsapp-videos', 'lumina-project-drone-video'],
    nextBuildAction: 'Do not redesign now. Later add product-line links and proof media carefully.',
    ownerHint: 'Manus',
  },
  {
    page: 'About',
    route: '/about/',
    status: 'exploration',
    primaryBuyerQuestion: 'Is Sunlit a real supplier with factory-side capability and export experience?',
    evidenceTypes: ['factory', 'shipping', 'quality'],
    recommendedAssetGroups: ['factory-images', 'factory-videos', 'shipping-images', 'shipping-videos', 'testing-videos'],
    nextBuildAction: 'Rebuild as factory identity page with production, sample, lab and export proof.',
    ownerHint: 'Manus',
  },
  {
    page: 'Quality & Documents',
    route: '/resources/quality-documents/',
    status: 'planned',
    primaryBuyerQuestion: 'What reduces product, quality, packing and documentation risk?',
    evidenceTypes: ['quality', 'shipping', 'factory'],
    recommendedAssetGroups: ['testing-videos', 'factory-images', 'shipping-images', 'shipping-videos'],
    nextBuildAction: 'Create as a new risk-reduction page after product pages are aligned.',
    ownerHint: 'Mixed',
  },
  {
    page: 'Resources / Articles',
    route: '/resources/[slug]/',
    status: 'exploration',
    primaryBuyerQuestion: 'What question does this article answer, and what should I do next?',
    evidenceTypes: ['aesthetic', 'component', 'project'],
    recommendedAssetGroups: ['project-images', 'component-images'],
    nextBuildAction: 'Use editorial hero, inline visual evidence and buyer-note sections. Avoid text-only SEO pages.',
    ownerHint: 'Manus',
  },
  {
    page: 'Contact',
    route: '/contact/',
    status: 'exploration',
    primaryBuyerQuestion: 'Can I ask a question without complete drawings or full project information?',
    evidenceTypes: ['factory', 'shipping', 'quality'],
    recommendedAssetGroups: ['factory-images', 'shipping-images', 'testing-videos'],
    nextBuildAction: 'Keep low-friction. Add only light trust evidence if needed.',
    ownerHint: 'ChatGPT',
  },
];
