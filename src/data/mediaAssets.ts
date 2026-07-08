export type MediaAssetKind = 'image' | 'video' | 'folder';
export type MediaEvidenceType = 'aesthetic' | 'component' | 'project' | 'installation' | 'factory' | 'quality' | 'shipping';
export type MediaAssetRating = 'A' | 'B' | 'C' | 'D';

export interface MediaAssetGroup {
  id: string;
  title: string;
  kind: MediaAssetKind;
  evidenceType: MediaEvidenceType;
  path: string;
  description: string;
  recommendedPages: string[];
  ratingGuide: MediaAssetRating;
  processingNeeded?: string[];
  ownerHint?: 'Manus' | 'OpenCode' | 'Image/Video AI' | 'ChatGPT';
}

export const mediaAssetGroups: MediaAssetGroup[] = [
  {
    id: 'project-images',
    title: 'Project Image Folders',
    kind: 'folder',
    evidenceType: 'project',
    path: '/images/projects/',
    description: 'Project folders with finished roof photos, close-ups and installation/project reference images.',
    recommendedPages: ['Home', 'Lumina Slate', 'Storm Guard', 'Projects', 'Project Detail', 'Articles'],
    ratingGuide: 'A',
    processingNeeded: ['Select hero-grade images', 'Crop for wide hero / square cards / detail galleries', 'Unify color tone when needed'],
    ownerHint: 'Manus',
  },
  {
    id: 'component-images',
    title: 'Component Product Photos',
    kind: 'folder',
    evidenceType: 'component',
    path: '/images/components/',
    description: 'White-background product component photos for shared, Lumina Slate and Storm Guard component libraries.',
    recommendedPages: ['Supply Scope', 'Lumina Slate', 'Storm Guard', 'Downloads', 'Technical Articles'],
    ratingGuide: 'A',
    processingNeeded: ['Use real component photos instead of icons', 'Group by product line', 'Maintain consistent crop and card ratio'],
    ownerHint: 'Manus',
  },
  {
    id: 'factory-images',
    title: 'Factory Images',
    kind: 'folder',
    evidenceType: 'factory',
    path: '/images/factory/',
    description: 'Factory, warehouse, lab and sample-area images for manufacturing identity proof.',
    recommendedPages: ['About', 'Home proof strip', 'Supply Scope', 'Contact trust block'],
    ratingGuide: 'B',
    processingNeeded: ['Select only credible clean images', 'Crop clutter', 'Unify color tone'],
    ownerHint: 'Manus',
  },
  {
    id: 'shipping-images',
    title: 'Shipping & Logistics Images',
    kind: 'folder',
    evidenceType: 'shipping',
    path: '/images/shipping/',
    description: 'Packed products, pallets, containers and shipping proof for export readiness.',
    recommendedPages: ['About', 'Quality & Documents', 'Supply Scope', 'Contact trust block'],
    ratingGuide: 'B',
    processingNeeded: ['Use for trust evidence, not hero aesthetic', 'Crop to show packing / pallets / container context'],
    ownerHint: 'Manus',
  },
  {
    id: 'storm-installation-images',
    title: 'Storm Guard Installation Images',
    kind: 'folder',
    evidenceType: 'installation',
    path: '/images/installation/storm-guard/',
    description: 'Step-by-step Storm Guard installation photos.',
    recommendedPages: ['Storm Guard', 'Installation resources', 'Quality & Documents'],
    ratingGuide: 'B',
    processingNeeded: ['Crop into step cards', 'Add captions', 'Avoid overloading page with every step'],
    ownerHint: 'Manus',
  },
  {
    id: 'factory-videos',
    title: 'Factory Production Videos',
    kind: 'folder',
    evidenceType: 'factory',
    path: '/videos/factory/',
    description: 'PV tile manufacturing and workshop tour videos.',
    recommendedPages: ['About', 'Quality & Documents', 'Home proof strip'],
    ratingGuide: 'B',
    processingNeeded: ['Compress', 'Extract posters', 'Create 15–30 second factory proof reel'],
    ownerHint: 'OpenCode',
  },
  {
    id: 'lumina-installation-videos',
    title: 'Lumina Slate Installation Videos',
    kind: 'folder',
    evidenceType: 'installation',
    path: '/videos/installation/lumina-slate/',
    description: 'Professional Lumina Slate installation guide videos: roof base, tile installation and wiring.',
    recommendedPages: ['Lumina Slate', 'Installation resources'],
    ratingGuide: 'A',
    processingNeeded: ['Compress large MP4 files', 'Extract posters', 'Create 3 short step clips'],
    ownerHint: 'OpenCode',
  },
  {
    id: 'storm-installation-videos',
    title: 'Storm Guard Installation Videos',
    kind: 'folder',
    evidenceType: 'installation',
    path: '/videos/installation/storm-guard/',
    description: 'Storm Guard installation demo videos and finished roof result clip.',
    recommendedPages: ['Storm Guard', 'Installation resources'],
    ratingGuide: 'A',
    processingNeeded: ['Compress', 'Extract posters', 'Create install proof reel'],
    ownerHint: 'OpenCode',
  },
  {
    id: 'onsite-whatsapp-videos',
    title: 'On-site WhatsApp Clips',
    kind: 'folder',
    evidenceType: 'project',
    path: '/videos/installation/on-site/',
    description: 'Short vertical phone videos from real projects. Useful as social proof but should be curated.',
    recommendedPages: ['Projects', 'Project Detail', 'Product proof reels'],
    ratingGuide: 'C',
    processingNeeded: ['Select best clips', 'Convert to webm', 'Use in proof reels rather than raw gallery'],
    ownerHint: 'OpenCode',
  },
  {
    id: 'lumina-project-drone-video',
    title: 'Nanshan Lake Lumina Slate Drone Footage',
    kind: 'video',
    evidenceType: 'aesthetic',
    path: '/videos/projects/lumina-slate-nanshan-lake/南京南山湖航拍.mp4',
    description: 'Aerial drone footage for Lumina Slate project proof and premium visual storytelling.',
    recommendedPages: ['Lumina Slate', 'Projects', 'Project Detail'],
    ratingGuide: 'A',
    processingNeeded: ['Compress', 'Extract hero poster', 'Create 5–8 second loop'],
    ownerHint: 'OpenCode',
  },
  {
    id: 'shipping-videos',
    title: 'Shipping Videos',
    kind: 'folder',
    evidenceType: 'shipping',
    path: '/videos/shipping/',
    description: 'Container loading and export logistics clips.',
    recommendedPages: ['About', 'Quality & Documents', 'Contact trust block'],
    ratingGuide: 'B',
    processingNeeded: ['Compress', 'Extract posters', 'Create shipping proof reel'],
    ownerHint: 'OpenCode',
  },
  {
    id: 'testing-videos',
    title: 'Impact Resistance Testing Videos',
    kind: 'folder',
    evidenceType: 'quality',
    path: '/videos/testing/',
    description: 'Lumina Slate and Storm Guard impact resistance testing videos.',
    recommendedPages: ['Lumina Slate', 'Storm Guard', 'Quality & Documents'],
    ratingGuide: 'A',
    processingNeeded: ['Compress', 'Extract posters', 'Create testing proof clips'],
    ownerHint: 'OpenCode',
  },
];

export const mediaProcessingRules = {
  images: 'Images are already webp. Select, crop, color-match and caption them before use.',
  videos: 'Do not embed raw large videos. Compress, extract poster images and create short proof clips.',
  aiUse: 'AI may improve real asset presentation but must not fake projects or change product structure.',
};
