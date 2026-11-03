import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { cpSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const preview = process.env.PUBLIC_PORTFOLIO_PREVIEW === 'true';
const previewSite = process.env.PUBLIC_PORTFOLIO_PREVIEW_SITE;
if (preview && !previewSite) {
  throw new Error('Preview builds require PUBLIC_PORTFOLIO_PREVIEW_SITE (the preview host origin).');
}
if (preview && !/^https?:\/\//.test(previewSite)) {
  throw new Error('PUBLIC_PORTFOLIO_PREVIEW_SITE must be an absolute HTTP(S) origin.');
}
const previewBase = process.env.PUBLIC_PORTFOLIO_PREVIEW_BASE ?? '/profile';
if (preview) {
  const parsed = new URL(previewSite);
  if (parsed.href !== `${parsed.origin}/`) {
    throw new Error('PUBLIC_PORTFOLIO_PREVIEW_SITE must be an origin without a path, query, or fragment. Set the path with PUBLIC_PORTFOLIO_PREVIEW_BASE.');
  }
  if (!previewBase.startsWith('/') || previewBase.includes('..')) {
    throw new Error('PUBLIC_PORTFOLIO_PREVIEW_BASE must be an absolute path without parent segments.');
  }
  if (parsed.origin === 'https://suthipongt.github.io' && previewBase.replace(/\/$/, '') === '/profile') {
    throw new Error('Preview canonical URLs must differ from the production /profile/ site.');
  }
}
const previewArtwork = {
  name: 'preview-artwork',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const target = join(fileURLToPath(dir), 'demo');
      mkdirSync(target, { recursive: true });
      cpSync(new URL('./preview-assets/', import.meta.url), target, { recursive: true });
    },
  },
};

export default defineConfig({
  site: preview ? previewSite : 'https://suthipongt.github.io',
  base: preview ? previewBase : '/profile',
  output: 'static',
  trailingSlash: 'always',
  integrations: preview ? [previewArtwork] : [sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/profile/th/') })],
});
