import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const preview = process.env.PUBLIC_PORTFOLIO_PREVIEW === 'true';
const site = preview ? process.env.PUBLIC_PORTFOLIO_PREVIEW_SITE : 'https://suthipongt.github.io';
assert.ok(site, 'preview verification requires PUBLIC_PORTFOLIO_PREVIEW_SITE');
const base = preview ? `${(process.env.PUBLIC_PORTFOLIO_PREVIEW_BASE ?? '/profile').replace(/\/$/, '')}/` : '/profile/';
const pages = [
  { file: 'dist/index.html', lang: 'en', path: base },
  { file: 'dist/th/index.html', lang: 'th', path: `${base}th/` },
];
const sections = ['work', 'services', 'technology', 'process', 'about', 'contact'];

for (const page of pages) {
  const html = readFileSync(page.file, 'utf8');
  assert.match(html, new RegExp(`<html lang="${page.lang}"`), `${page.file}: language`);
  assert.match(html, /<main id="main">/, `${page.file}: main landmark`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${page.file}: one h1`);
  for (const id of sections) assert.ok(html.includes(`id="${id}"`), `${page.file}: missing ${id}`);
  assert.ok(!html.includes('id="experience"'), `${page.file}: resume section remains`);
  assert.ok(html.includes(preview ? 'content="noindex, nofollow, noarchive"' : 'content="index, follow"'), `${page.file}: robots metadata`);
  assert.equal((html.match(/data-demo-project=/g) ?? []).length, preview ? 4 : 0, `${page.file}: demo isolation`);
  if (preview) {
    assert.ok(html.includes(page.lang === 'en' ? 'DESIGN SAMPLE / FICTIONAL CONCEPT' : 'ตัวอย่างงานออกแบบ / แนวคิดสมมติ'), `${page.file}: visible demo label`);
  } else {
    assert.ok(!html.includes('DESIGN SAMPLE / FICTIONAL CONCEPT'), `${page.file}: demo copy in production`);
    assert.ok(!html.includes('ตัวอย่างงานออกแบบ / แนวคิดสมมติ'), `${page.file}: Thai demo copy in production`);
    assert.ok(!html.includes('noindex'), `${page.file}: noindex in production`);
  }
  for (const locale of pages) {
    assert.ok(html.includes(`hreflang="${locale.lang}" href="${site}${locale.path}"`), `${page.file}: missing ${locale.lang} alternate`);
  }
  assert.ok(html.includes(`rel="canonical" href="${site}${page.path}"`), `${page.file}: canonical`);
  assert.ok(html.includes(`property="og:url" content="${site}${page.path}"`), `${page.file}: Open Graph URL`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (!url || url.startsWith('#') || /^https?:/.test(url) || url.startsWith('mailto:')) continue;
    assert.ok(url.startsWith(base), `${page.file}: path outside ${base}: ${url}`);
    const [asset, fragment] = url.slice(base.length).split('#');
    if (fragment) assert.ok(html.includes(`id="${fragment}"`), `${page.file}: missing target ${fragment}`);
    if (asset && /\.[a-z0-9]+$/i.test(asset)) assert.ok(existsSync(resolve('dist', asset)), `${page.file}: missing asset ${asset}`);
  }
  console.log(`PASS ${page.file}: language, metadata, sections, and paths`);
}

const robots = readFileSync('dist/robots.txt', 'utf8');
if (preview) {
  assert.ok(robots.includes('Disallow: /'), 'preview robots: disallow all');
  assert.ok(!existsSync('dist/sitemap-index.xml'), 'preview sitemap must be absent');
  for (const name of ['corporate', 'crm', 'cms', 'erp']) assert.ok(existsSync(`dist/demo/${name}.svg`), `missing preview artwork: ${name}`);
  console.log('PASS preview robots and sitemap isolation');
} else {
  assert.ok(!existsSync('dist/demo'), 'demo artwork must be absent from production');
  const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
  for (const page of pages) assert.ok(sitemap.includes(`<loc>${site}${page.path}</loc>`), `sitemap: ${page.path}`);
  assert.ok(robots.includes(`${site}${base}sitemap-index.xml`), 'robots: sitemap URL');
  console.log('PASS production sitemap and robots.txt');
}
