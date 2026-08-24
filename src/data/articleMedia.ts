/**
 * Generated from the WordPress WXR export by scripts/migrate-wordpress-article-media.py.
 * WordPress source URLs and original alt values are preserved in the migration ledger.
 * Entries with altStatus `editorial-fallback-needs-review` have no usable original alt.
 */

export type ArticleMediaAltStatus = 'wordpress-inherited' | 'editorial-fallback-needs-review';

export interface ArticleImage {
  src: string;
  alt: string;
  altStatus: ArticleMediaAltStatus;
  caption?: string;
  afterHeading?: string;
  wordpressSourceUrl: string;
  wordpressSourceAlt: string;
}

export interface ArticleMedia {
  cover?: ArticleImage;
  inline: ArticleImage[];
}

export const articleMediaBySlug: Record<string, ArticleMedia> = {
  'how-to-install-solar-roof': {
    cover: {
      src: '/images/articles/how-to-install-solar-roof/cover.png',
      alt: 'Article cover image for How to Install a Solar Roof: A No-Nonsense Guide for Builders',
      altStatus: 'editorial-fallback-needs-review',
      wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2025/10/news.png',
      wordpressSourceAlt: '',
    },
    inline: [
    ],
  },
  'solar-system-categories': {
    cover: {
      src: '/images/articles/solar-system-categories/cover.png',
      alt: 'photovaltic system schem',
      altStatus: 'wordpress-inherited',
      wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2025/10/Garland-UK_Solarise_System-e1642437721224.png',
      wordpressSourceAlt: 'photovaltic system schem',
    },
    inline: [
    ],
  },
  'what-is-a-solar-roof': {
    cover: {
      src: '/images/articles/what-is-a-solar-roof/cover.webp',
      alt: 'Article cover image for What is a Solar Roof? And Why 2026 is the Year to Make Your Move',
      altStatus: 'editorial-fallback-needs-review',
      wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2025/12/Roof-tiles-3-scaled.webp',
      wordpressSourceAlt: 'Roof tiles 3',
    },
    inline: [
    ],
  },
  'solar-roof-roi-for-developers': {
    cover: {
      src: '/images/articles/solar-roof-roi-for-developers/cover.webp',
      alt: 'Article cover image for Why Developers Are Doing the Math Wrong on Solar Roofs',
      altStatus: 'editorial-fallback-needs-review',
      wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2025/10/solutions-banner.webp',
      wordpressSourceAlt: 'solutions banner',
    },
    inline: [
    ],
  },
  'solar-roof-case-study': {
    cover: {
      src: '/images/articles/solar-roof-case-study/cover.png',
      alt: 'Article cover image for A Real Case Study: Building a Solar Roof Across the Ocean',
      altStatus: 'editorial-fallback-needs-review',
      wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2025/10/about-sunlit.png',
      wordpressSourceAlt: 'about sunlit',
    },
    inline: [
    ],
  },
  'future-of-solar-roofs': {
    cover: {
      src: '/images/articles/future-of-solar-roofs/cover.webp',
      alt: 'Luxury coastal villa featuring a sleek, integrated BIPV solar roof at sunset, representing premium energy independence.',
      altStatus: 'wordpress-inherited',
      wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2026/06/luxury-real-estate-with-integrated-bipv-solar-roof.webp',
      wordpressSourceAlt: 'Luxury coastal villa featuring a sleek, integrated BIPV solar roof at sunset, representing premium energy independence.',
    },
    inline: [
      {
        src: '/images/articles/future-of-solar-roofs/inline-01.webp',
        alt: 'Modern high-end home with a seamless black solar roof architecture, showcasing self-sufficient decentralized energy.',
        altStatus: 'wordpress-inherited',
        afterHeading: 'The Geopolitical Premium Will Ignite the Electrification Revolution',
        caption: '',
        wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2026/06/modern-home-energy-independence-solar-tiles-300x169.webp',
        wordpressSourceAlt: 'Modern high-end home with a seamless black solar roof architecture, showcasing self-sufficient decentralized energy.',
      },
    ],
  },
  'lumina-slate-story': {
    cover: {
      src: '/images/articles/lumina-slate-story/cover.jpg',
      alt: 'Article cover image for The Story Behind Lumina Slate: Building a Better Solar Roof',
      altStatus: 'editorial-fallback-needs-review',
      wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2026/04/907250b58e09c6f80c09777050900289.jpg',
      wordpressSourceAlt: '',
    },
    inline: [
    ],
  },
  'storm-guard-story': {
    cover: {
      src: '/images/articles/storm-guard-story/cover.webp',
      alt: 'Photorealistic render of a contemporary luxury villa featuring an integrated solar-metal roof',
      altStatus: 'wordpress-inherited',
      wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2025/11/Product-Specications.webp',
      wordpressSourceAlt: 'Photorealistic render of a contemporary luxury villa featuring an integrated solar-metal roof',
    },
    inline: [
    ],
  },
  'solar-roofing-business-model': {
    cover: {
      src: '/images/articles/solar-roofing-business-model/cover.jpg',
      alt: 'Article cover image for The "IKEA Model" of Solar Roofing: Who We Work With (And Why We Say No)',
      altStatus: 'editorial-fallback-needs-review',
      wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2025/12/home-scaled.jpg',
      wordpressSourceAlt: 'home',
    },
    inline: [
    ],
  },
  'offshore-bipv-guide': {
    cover: {
      src: '/images/articles/offshore-bipv-guide/cover.png',
      alt: 'A photo of a small solar roof I installed myself',
      altStatus: 'wordpress-inherited',
      wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2026/04/微信图片_20260404220928_178_145.png',
      wordpressSourceAlt: 'A photo of a small solar roof I installed myself',
    },
    inline: [
    ],
  },
  'solar-roof-electrical-system': {
    cover: {
      src: '/images/articles/solar-roof-electrical-system/cover.png',
      alt: 'A photo of a home energy storage system—a high-efficiency system designed to work with a solar roof',
      altStatus: 'wordpress-inherited',
      wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2026/04/Liskeard-Leisure-Center-battery-storage-6-scaled.png',
      wordpressSourceAlt: 'A photo of a home energy storage system—a high-efficiency system designed to work with a solar roof',
    },
    inline: [
    ],
  },
  'import-solar-roof': {
    cover: {
      src: '/images/articles/import-solar-roof/cover.png',
      alt: 'The cargo ships we will use for our transnational solar roof project',
      altStatus: 'wordpress-inherited',
      wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2026/04/海运货轮.png',
      wordpressSourceAlt: 'The cargo ships we will use for our transnational solar roof project',
    },
    inline: [
    ],
  },
  'sunlit-bipv-story': {
    cover: {
      src: '/images/articles/sunlit-bipv-story/cover.webp',
      alt: 'Low-angle close-up of Sunlit BIPV roof tiles fitting seamlessly around a classic dormer window under a dramatic sky.',
      altStatus: 'wordpress-inherited',
      wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2026/05/sunlit-bipv-roof-scenic-harmony-xianghu-mountains.webp',
      wordpressSourceAlt: 'Low-angle close-up of Sunlit BIPV roof tiles fitting seamlessly around a classic dormer window under a dramatic sky.',
    },
    inline: [
    ],
  },
  'why-are-most-solar-roofs-black': {
    cover: {
      src: '/images/articles/why-are-most-solar-roofs-black/cover.webp',
      alt: 'Close-up aerial view showing the precise integration of red solar tiles and ventilation systems on a complex roof structure.',
      altStatus: 'wordpress-inherited',
      wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2026/05/integrated-red-solar-tiles-aerial.webp',
      wordpressSourceAlt: 'Close-up aerial view showing the precise integration of red solar tiles and ventilation systems on a complex roof structure.',
    },
    inline: [
      {
        src: '/images/articles/why-are-most-solar-roofs-black/inline-01.webp',
        alt: 'Close-up of dark monocrystalline silicon solar cells with silver busbars under clear glass.',
        altStatus: 'wordpress-inherited',
        afterHeading: 'The Truth Behind the Black Default',
        caption: '',
        wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2026/06/dark-silicon-solar-cells-with-silver-busbars-300x169.webp',
        wordpressSourceAlt: 'Close-up of dark monocrystalline silicon solar cells with silver busbars under clear glass.',
      },
      {
        src: '/images/articles/why-are-most-solar-roofs-black/inline-02.webp',
        alt: 'Front and back view of sleek black BIPV solar roofing tiles showing tempered glass surface and rear wiring.',
        altStatus: 'wordpress-inherited',
        afterHeading: 'The "Color Tax": What You Actually Pay',
        caption: '',
        wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2026/06/premium-black-bipv-solar-roof-tiles-front-and-back-225x300.webp',
        wordpressSourceAlt: 'Front and back view of sleek black BIPV solar roofing tiles showing tempered glass surface and rear wiring.',
      },
      {
        src: '/images/articles/why-are-most-solar-roofs-black/inline-03.webp',
        alt: 'Close-up view of the custom terracotta-colored solar panels and matching non-active tiles designed for heritage roofs.',
        altStatus: 'wordpress-inherited',
        afterHeading: 'Three Ways to Handle Color on a Project',
        caption: '',
        wordpressSourceUrl: 'https://www.sunlitsolarroof.com/wp-content/uploads/2026/05/custom-red-solar-panels-close-up-225x300.webp',
        wordpressSourceAlt: 'Close-up view of the custom terracotta-colored solar panels and matching non-active tiles designed for heritage roofs.',
      },
    ],
  },
};
