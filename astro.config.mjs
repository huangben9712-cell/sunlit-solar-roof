// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
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
