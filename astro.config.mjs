// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://www.sunlitsolarroof.com',
  redirects: {
    '/system-overview/': '/supply-scope/',
    '/system-overview': '/supply-scope/',
    '/solar-roofs/': '/supply-scope/',
    '/invisible-solar-roof/': '/supply-scope/',
    '/lumina-slate-series/': '/lumina-slate/',
    '/storm-guard-series/': '/storm-guard/',
    '/contact-us/': '/contact/',
    '/about-us/': '/about/',
    '/knowledges/': '/articles/',
    '/project/': '/projects/',
    '/import-solar-roof/': '/articles/import-solar-roof/',
    '/what-is-a-solar-roof/': '/articles/what-is-a-solar-roof/',
    '/solar-roof-roi-for-developers/': '/articles/solar-roof-roi-for-developers/',
    '/storm-guard-story/': '/articles/storm-guard-story/',
    '/lumina-slate-story/': '/articles/lumina-slate-story/',
    '/how-to-install-solar-roof/': '/articles/how-to-install-solar-roof/',
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
