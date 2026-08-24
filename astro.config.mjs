// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://www.sunlitsolarroof.com',
  redirects: {
    // /system-overview/ is the canonical Supply Scope page. Legacy discovery paths
    // must point to it; never redirect the canonical page to a route that does not exist.
    '/supply-scope/': '/system-overview/',
    '/supply-scope': '/system-overview/',
    '/solar-roofs/': '/system-overview/',
    '/invisible-solar-roof/': '/system-overview/',
    '/lumina-slate-series/': '/lumina-slate/',
    '/storm-guard-series/': '/storm-guard/',
    '/contact-us/': '/contact/',
    '/about-us/': '/about/',
    '/knowledges/': '/articles/',
    '/project/': '/projects/',
    '/import-solar-roof/': '/articles/import-solar-roof/',
    '/what-is-a-solar-roof/': '/resources/knowledge-base/what-is-solar-roof/',
    '/articles/what-is-a-solar-roof/': '/resources/knowledge-base/what-is-solar-roof/',
    '/solar-roof-roi-for-developers/': '/articles/solar-roof-roi-for-developers/',
    '/storm-guard-story/': '/articles/storm-guard-story/',
    '/lumina-slate-story/': '/articles/lumina-slate-story/',
    '/how-to-install-solar-roof/': '/articles/how-to-install-solar-roof/',

    // Published WordPress articles whose Astro canonical URLs now live under /articles/.
    '/sunlit-bipv-story/': '/articles/sunlit-bipv-story/',
    '/solar-roof-electrical-system/': '/articles/solar-roof-electrical-system/',
    '/solar-roof-case-study/': '/articles/solar-roof-case-study/',
    '/why-are-most-solar-roofs-black/': '/articles/why-are-most-solar-roofs-black/',
    '/solar-roofing-business-model/': '/articles/solar-roofing-business-model/',
    '/solar-system-categories/': '/articles/solar-system-categories/',
    '/future-of-solar-roofs/': '/articles/future-of-solar-roofs/',
    '/offshore-bipv-guide/': '/articles/offshore-bipv-guide/',

    // Legacy product-component and installation details now resolve to the
    // corresponding component library or installation evidence on each product page.
    '/lumina-slate-series/lumina-slate-series-roof-base-layer-installation/': '/lumina-slate/#installation-evidence',
    '/lumina-slate-series/lumina-slate-series-electrical-system/': '/lumina-slate/#component-library',
    '/lumina-slate-series/lumina-slate-series-ridge-edge-tiles/': '/lumina-slate/#component-library',
    '/lumina-slate-series/lumina-slate-series-main-roofing-tiles-installation/': '/lumina-slate/#installation-evidence',
    '/storm-guard-series/storm-guard-series-roofing-tiles/': '/storm-guard/#component-library',
    '/storm-guard-series/storm-guard-series-roof-base-layer/': '/storm-guard/#installation-evidence',
    '/storm-guard-series/storm-guard-series-electrical-system/': '/storm-guard/#component-library',
    '/storm-guard-series/storm-guard-series-ridge-edge-tiles/': '/storm-guard/#component-library',

    // Legacy WPML landing pages are retired in favor of the English canonical system overview.
    '/osynligt-solcellstak-for-premiumprojekt/': '/system-overview/',
    '/tetto-solare-invisibile-per-gli-edifici-di-pregio/': '/system-overview/',
    '/techo-solar-invisible-para-promociones-premium/': '/system-overview/',
    '/telhado-solar-invisivel-para-empreendimentos-de-luxo/': '/system-overview/',
    '/onzichtbaar-zonnedak-voor-hoogwaardige-projecten/': '/system-overview/',
    '/unsichtbares-solardach-fuer-premium-entwicklungen/': '/system-overview/',

    '/category/sourcing-guide/': '/articles/',
    '/category/market-insights/': '/articles/',
    '/category/case-studies/': '/articles/',
    '/category/technical-installation/': '/articles/',
    '/author/huangben/': '/about/',
  },
  vite: {
    ssr: {
      external: ['svgo']
    },
    server: {
      middlewareMode: false,
      allowedHosts: [
        '.manuspre.computer',
        '.manus.computer',
        '.manus-asia.computer',
        '.manuscomputer.ai',
        '.manusvm.computer',
        'localhost',
        '127.0.0.1',
      ]
    }
  }
});
