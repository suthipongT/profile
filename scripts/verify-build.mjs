import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const preview = process.env.PUBLIC_PORTFOLIO_PREVIEW === 'true';
const site = preview ? process.env.PUBLIC_PORTFOLIO_PREVIEW_SITE : 'https://suthipongt.github.io';
assert.ok(site, 'preview verification requires PUBLIC_PORTFOLIO_PREVIEW_SITE');
const base = preview ? `${(process.env.PUBLIC_PORTFOLIO_PREVIEW_BASE ?? '/profile').replace(/\/$/, '')}/` : '/profile/';
const pageNames = ['home', 'portfolio', 'about', 'contact'];
const pages = ['en', 'th'].flatMap((lang) => pageNames.map((name) => {
  const segment = name === 'home' ? '' : `${name}/`;
  const locale = lang === 'th' ? 'th/' : '';
  return { lang, name, path: `${base}${locale}${segment}`, file: `dist/${locale}${segment}index.html` };
}));

for (const page of pages) {
  const html = readFileSync(page.file, 'utf8');
  assert.match(html, new RegExp(`<html lang="${page.lang}"`), `${page.file}: language`);
  assert.ok(html.includes('<main id="main">'), `${page.file}: main landmark`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${page.file}: one h1`);
  assert.ok(html.includes('fonts.googleapis.com/css2?family=Prompt'), `${page.file}: Prompt font`);
  assert.ok(html.includes(preview ? 'content="noindex, nofollow, noarchive"' : 'content="index, follow"'), `${page.file}: robots metadata`);
  assert.ok(html.includes(`rel="canonical" href="${site}${page.path}"`), `${page.file}: canonical`);
  assert.ok(html.includes(`property="og:url" content="${site}${page.path}"`), `${page.file}: Open Graph URL`);
  for (const locale of ['en', 'th']) {
    const localePath = `${base}${locale === 'th' ? 'th/' : ''}${page.name === 'home' ? '' : `${page.name}/`}`;
    assert.ok(html.includes(`hreflang="${locale}" href="${site}${localePath}"`), `${page.file}: ${locale} alternate`);
    assert.ok(html.includes(`href="${localePath}"`), `${page.file}: ${locale} switch`);
  }
  const expectedDemoCount = preview ? page.name === 'portfolio' ? 4 : page.name === 'home' ? 2 : 0 : 0;
  assert.equal((html.match(/data-demo-project=/g) ?? []).length, expectedDemoCount, `${page.file}: demo isolation`);
  assert.ok(!html.includes('class="preview-banner"'), `${page.file}: visible preview banner`);
  assert.ok(!html.includes('class="demo-label"'), `${page.file}: repeated demo label`);
  if (preview && page.name === 'portfolio') {
    assert.ok(html.includes(page.lang === 'en' ? 'Concept projects — illustrative website and software designs.' : 'ผลงานแนวคิดการออกแบบเว็บไซต์และระบบซอฟต์แวร์'), `${page.file}: concept disclosure`);
  }
  if (!preview) {
    assert.ok(!html.includes('data-demo-project='), `${page.file}: demo project in production`);
    for (const name of ['Fieldnote', 'Relay', 'Commonplace', 'Ledgerway']) assert.ok(!html.includes(name), `${page.file}: concept project in production`);
  }
  assert.ok(!/href=["']https?:\/\/(?:[^/]+\.)?github\.com(?:[/:?#]|["'])/i.test(html), `${page.file}: GitHub navigation`);
  if (page.name === 'contact') {
    assert.ok(!html.includes('<form'), `${page.file}: contact form would collect data`);
    assert.ok(html.includes(page.lang === 'en' ? 'A contact channel is not available yet.' : 'ขณะนี้ยังไม่มีช่องทางติดต่อ'), `${page.file}: contact availability`);
  }
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (!url || url.startsWith('#') || /^https?:/.test(url) || url.startsWith('mailto:')) continue;
    assert.ok(url.startsWith(base), `${page.file}: path outside ${base}: ${url}`);
    const relative = url.slice(base.length).split('#')[0];
    if (!relative) continue;
    const asset = /\.[a-z0-9]+$/i.test(relative) ? resolve('dist', relative) : resolve('dist', relative, 'index.html');
    assert.ok(existsSync(asset), `${page.file}: missing path ${url}`);
  }
  console.log(`PASS ${page.file}: route, localization, metadata, links, isolation`);
}

const css = readdirSync('dist/_astro').filter((name) => name.endsWith('.css')).map((name) => readFileSync(`dist/_astro/${name}`, 'utf8')).join('');
assert.ok(css.includes('position:sticky'), 'sticky header CSS missing');
assert.ok(css.includes('#0b1d27'), 'required dark palette missing');
const robots = readFileSync('dist/robots.txt', 'utf8');
if (preview) {
  assert.ok(robots.includes('Disallow: /'), 'preview robots must disallow crawling');
  assert.ok(!existsSync('dist/sitemap-index.xml'), 'preview sitemap must be absent');
  for (const name of ['corporate', 'crm', 'cms', 'erp']) assert.ok(existsSync(`dist/demo/${name}.svg`), `missing preview artwork: ${name}`);
  console.log('PASS preview robots, sitemap exclusion, and four demo artworks');
} else {
  assert.ok(!existsSync('dist/demo'), 'demo artwork must be absent from production');
  const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
  for (const page of pages) assert.ok(sitemap.includes(`<loc>${site}${page.path}</loc>`), `sitemap: ${page.path}`);
  assert.ok(robots.includes(`${site}${base}sitemap-index.xml`), 'robots: sitemap URL');
  console.log('PASS production sitemap, robots, and demo exclusion');
}
