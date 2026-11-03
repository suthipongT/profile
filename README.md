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

The static output is `dist/`. `astro.config.mjs` configures the Astro static site, GitHub Pages origin, and base path.

## Languages and routes

Thai is the default language. The four production routes and their English equivalents are:

| Page | Thai | English |
| --- | --- | --- |
| Home | `/profile/` | `/profile/en/` |
| Portfolio | `/profile/portfolio/` | `/profile/en/portfolio/` |
| About | `/profile/about/` | `/profile/en/about/` |
| Contact | `/profile/contact/` | `/profile/en/contact/` |

The language switch is manual and keeps the visitor on the equivalent page. The site does not automatically select a language from the browser, geolocation, or IP address. A preview built with `/profile-preview/` as its base uses the same route structure: for example, Thai `/profile-preview/about/` and English `/profile-preview/en/about/`.

Canonical and reciprocal `hreflang` links use these current routes; `x-default` points to the matching Thai page. The production sitemap contains the eight canonical routes, and `robots.txt` references it. Preview pages use `noindex, nofollow, noarchive` and have no sitemap.

The previous `/profile/th/` URLs, including their Portfolio, About, and Contact paths, remain as static HTML compatibility pages. Each uses a meta refresh and a fallback link to the matching Thai route; these are not HTTP 301 or 302 redirects. They have `noindex`, canonical links to the current Thai routes, and are excluded from the production sitemap. The same behavior applies to `/profile-preview/th/` when that preview base is configured.

## Content status

The homepage presents corporate websites, CRM systems, CMS platforms, and ERP / business management systems, followed by featured work. The Portfolio page shows approved projects in a filterable image grid; About and Contact have their own routes. Service categories describe work available for discussion; they are not evidence of completed client projects.

English and Thai page copy lives in `src/content/pages.ts`; verified capabilities and category names live in `src/content/site.ts`. Typed project records live in `src/content/projects.ts`. Only records with `status: 'approved'` render. The list is currently empty, so Home and Portfolio show restrained empty states instead of fabricated case studies. A future project record can have multiple imported local screenshots with bilingual alt text and captions, or no screenshots; an approved public HTTPS live URL is optional; repository URLs are not presented. Put approved images under `src/assets/projects/` for Astro image optimization. Verify project facts, image rights, and screenshot privacy before adding any record.

## Fictional design preview

Four original SVG interface concepts live under `preview-assets/`, with isolated records in `src/content/demo-projects.ts`. They are fictional design samples, not client work. The preview build copies the artwork into `dist/demo/`; the normal build does not emit any demo artwork or render the records. Home shows two featured samples, while Portfolio shows all four with visible English/Thai labels. Preview pages carry `noindex, nofollow, noarchive`; preview `robots.txt` disallows crawling and no sitemap is generated. Contact does not currently provide a channel for receiving inquiries.

For a local preview build, provide the actual preview origin and optional base path:

```sh
ASTRO_TELEMETRY_DISABLED=1 PUBLIC_PORTFOLIO_PREVIEW=true PUBLIC_PORTFOLIO_PREVIEW_SITE=http://127.0.0.1:4321 pnpm build
ASTRO_TELEMETRY_DISABLED=1 PUBLIC_PORTFOLIO_PREVIEW=true PUBLIC_PORTFOLIO_PREVIEW_SITE=http://127.0.0.1:4321 pnpm verify
pnpm preview --host 127.0.0.1
```

Before any future hosted preview, set `PUBLIC_PORTFOLIO_PREVIEW_SITE` to that host's origin and `PUBLIC_PORTFOLIO_PREVIEW_BASE` to its repository path if different from `/profile`. A preview build fails without a host origin and refuses the production `/profile/` canonical URL. The preview flag is opt-in and does not override approval status for real projects. Rebuild without the flag for production output; never reuse a preview `dist/` directory as a production artifact.

All eight canonical routes render HTML at build time. Customer-facing navigation does not link to the developer’s GitHub profile or repositories. The mobile menu uses a small script to close after a page is selected or Escape is pressed. No reference-site images, text, branding, or bundled scripts are used.

## GitHub Pages release plan

The build-only workflow in `.github/workflows/verify.yml` selects Node.js `24.22.2` from `.nvmrc` and pnpm `12.16.1`. It runs on pull requests or manual dispatch and never deploys. After review, configure Pages to use GitHub Actions. Any future deployment workflow must use the same pinned versions, install with pnpm using the committed lockfile, run `pnpm check` and `pnpm build`, then upload `dist/` as the Pages artifact and deploy only from an approved release branch. The feature branch does not deploy automatically.

The original site remains recoverable from Git history at commit `c3e0d5b2fa41f88d0dd41f23deda5b3995b313f2`. No history rewrite is required.
