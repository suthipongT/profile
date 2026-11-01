import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const site = 'https://suthipongt.github.io';
const base = '/profile/';
const pages = [
  { file: 'dist/index.html', lang: 'en', path: base },
  { file: 'dist/th/index.html', lang: 'th', path: `${base}th/` },
];
const sections = ['about', 'expertise', 'stack', 'projects', 'experience', 'contact'];

for (const page of pages) {
  const html = readFileSync(page.file, 'utf8');
  assert.match(html, new RegExp(`<html lang="${page.lang}"`), `${page.file}: language`);
  assert.match(html, /<main id="main">/, `${page.file}: main landmark`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${page.file}: one h1`);
  for (const id of sections) assert.ok(html.includes(`id="${id}"`), `${page.file}: missing ${id}`);
  for (const locale of pages) {
    assert.ok(html.includes(`hreflang="${locale.lang}" href="${site}${locale.path}"`), `${page.file}: missing ${locale.lang} alternate`);
  }
  assert.ok(html.includes(`rel="canonical" href="${site}${page.path}"`), `${page.file}: canonical`);
  assert.ok(html.includes(`property="og:url" content="${site}${page.path}"`), `${page.file}: Open Graph URL`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (!url || url.startsWith('#') || url.startsWith('https:') || url.startsWith('mailto:')) continue;
    assert.ok(url.startsWith(base), `${page.file}: path outside ${base}: ${url}`);
    const [asset, fragment] = url.slice(base.length).split('#');
    if (fragment) assert.ok(html.includes(`id="${fragment}"`), `${page.file}: missing target ${fragment}`);
    if (asset && /\.[a-z0-9]+$/i.test(asset)) assert.ok(existsSync(resolve('dist', asset)), `${page.file}: missing asset ${asset}`);
  }
  console.log(`PASS ${page.file}: language, metadata, sections, and paths`);
}

const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
for (const page of pages) assert.ok(sitemap.includes(`<loc>${site}${page.path}</loc>`), `sitemap: ${page.path}`);
const robots = readFileSync('dist/robots.txt', 'utf8');
assert.ok(robots.includes(`${site}${base}sitemap-index.xml`), 'robots: sitemap URL');
console.log('PASS sitemap and robots.txt');
