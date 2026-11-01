# Suthipong Toonritsa — Client-Focused Portfolio

Static, bilingual portfolio for business websites and custom business software, built for `https://suthipongt.github.io/profile/`.

## Tooling

| Package | Version |
| --- | --- |
| Astro | 6.4.8 |
| TypeScript | 6.0.3 |
| Tailwind CSS / PostCSS plugin | 4.3.3 |
| PostCSS | 8.5.32 |
| @astrojs/sitemap | 3.7.4 |
| @astrojs/check | 0.9.12 |
| pnpm | 12.16.1 |
| Node.js | 24.22.2 |

Exact dependency versions are recorded in `package.json` and `pnpm-lock.yaml`.

## Local development

```sh
nvm use
node -v
pnpm -v
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
pnpm verify
```

The static output is `dist/`. English is at `/profile/`; Thai is at `/profile/th/`. `astro.config.mjs` sets `site`, `base`, and static output. The sitemap integration creates `sitemap-index.xml`, referenced from `public/robots.txt`.

## Content status

The homepage presents services for corporate websites, CRM systems, CMS platforms, and ERP / business management systems. Its sections are Hero, Selected Work, Services, Technology, Process, About, and Contact. Service categories describe work available for discussion; they are not evidence of completed client projects.

English and Thai copy lives in `src/content/site.ts`. Typed project records live in `src/content/projects.ts`. Only records with `status: 'approved'` render. The list is currently empty, so both languages show a short empty state instead of fabricated case studies. A future project record can have multiple imported local screenshots with bilingual alt text and captions, or no screenshots; live and repository URLs are optional. Put approved images under `src/assets/projects/` for Astro image optimization. Verify project facts, image rights, and screenshot privacy before adding any record.

Both language routes render HTML at build time. The only contact link is the repository owner's verified public GitHub profile. The mobile menu uses a small script to close after an anchor is selected. No previous template images or bundled scripts are used.

## GitHub Pages release plan

The build-only workflow in `.github/workflows/verify.yml` selects Node.js `24.22.2` from `.nvmrc` and pnpm `12.16.1`. It runs on pull requests or manual dispatch and never deploys. After review, configure Pages to use GitHub Actions. Any future deployment workflow must use the same pinned versions, install with pnpm using the committed lockfile, run `pnpm check` and `pnpm build`, then upload `dist/` as the Pages artifact and deploy only from an approved release branch. The feature branch does not deploy automatically.

The original site remains recoverable from Git history at commit `c3e0d5b2fa41f88d0dd41f23deda5b3995b313f2`. No history rewrite is required.
