# Suthipong Toonritsa — Portfolio MVP

Static, bilingual software developer portfolio built for `https://suthipongt.github.io/profile/`.

## Tooling

| Package | Version |
| --- | --- |
| Astro | 6.4.8 |
| TypeScript | 6.0.3 |
| Tailwind CSS / PostCSS plugin | 4.3.3 |
| PostCSS | 8.5.32 |
| @astrojs/sitemap | 3.7.4 |
| @astrojs/check | 0.9.12 |
| pnpm | 11.9.0 |
| Node.js used for initial build | 22.22.2 |

Exact dependency versions are recorded in `package.json` and `pnpm-lock.yaml`.

## Local development

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
pnpm verify:build
```

The static output is `dist/`. English is at `/profile/`; Thai is at `/profile/th/`. `astro.config.mjs` sets `site`, `base`, and static output. The sitemap integration creates `sitemap-index.xml`, referenced from `public/robots.txt`.

## Content status

The previous site included template biography, employment, education, and portfolio entries. The new MVP does **not** treat those as real. Draft project and experience sections are labeled in both languages. Replace them with verified facts before presenting the site as a completed personal portfolio. The only contact link is the repository owner's public GitHub profile. No previous template images or bundled scripts are used.

English and Thai copy lives in `src/content/site.ts`. Both routes render HTML at build time. Navigation works without client-side JavaScript.

## GitHub Pages release plan

After review, configure Pages to use GitHub Actions. The workflow should install with pnpm using the committed lockfile, run `pnpm check` and `pnpm build`, then upload `dist/` as the Pages artifact and deploy only from an approved release branch. The feature branch does not deploy automatically.

The original site remains recoverable from Git history at commit `c3e0d5b2fa41f88d0dd41f23deda5b3995b313f2`. No history rewrite is required.
