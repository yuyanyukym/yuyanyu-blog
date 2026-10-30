import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [preact()],
  output: 'static',
  base: '/xiaobai-blog/',
  vite: {
    server: {
      middlewareMode: false,
    }
  }
});
