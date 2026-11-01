import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://suthipongt.github.io',
  base: '/profile',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
