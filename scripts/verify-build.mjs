import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { featuredProjects, projectAnchor, validateProjectSlugs } from '../src/content/projects.ts';

assert.deepEqual(featuredProjects([{ featured: false, id: 0 }, { featured: true, id: 1 }, { featured: true, id: 2 }, { featured: true, id: 3 }]).map((p) => p.id), [1, 2]);
assert.deepEqual(featuredProjects([{ featured: false }]), []);
assert.equal(featuredProjects([{ featured: true }]).length, 1);
assert.throws(() => validateProjectSlugs([{ slug: 'same' }, { slug: 'same' }]));
assert.throws(() => validateProjectSlugs([{ slug: 'bad slug' }]));
assert.equal(projectAnchor('demo-crm'), 'project-demo-crm');

const preview = process.env.PUBLIC_PORTFOLIO_PREVIEW === 'true';
const site = preview ? process.env.PUBLIC_PORTFOLIO_PREVIEW_SITE : 'https://suthipongt.github.io';
assert.ok(site, 'preview verification requires PUBLIC_PORTFOLIO_PREVIEW_SITE');
const base = preview ? `${(process.env.PUBLIC_PORTFOLIO_PREVIEW_BASE ?? '/profile').replace(/\/$/, '')}/` : '/profile/';
const pageNames = ['home', 'portfolio', 'about', 'contact'];
const pages = ['en', 'th'].flatMap((lang) => pageNames.map((name) => {
  const segment = name === 'home' ? '' : `${name}/`;
  const locale = lang === 'en' ? 'en/' : '';
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
    const localePath = `${base}${locale === 'en' ? 'en/' : ''}${page.name === 'home' ? '' : `${page.name}/`}`;
    assert.ok(html.includes(`hreflang="${locale}" href="${site}${localePath}"`), `${page.file}: ${locale} alternate`);
    assert.ok(html.includes(`href="${localePath}"`), `${page.file}: ${locale} switch`);
  }
  const thaiPath = `${base}${page.name === 'home' ? '' : `${page.name}/`}`;
  assert.ok(html.includes(`hreflang="x-default" href="${site}${thaiPath}"`), `${page.file}: Thai x-default`);
  const demoCount = (html.match(/data-demo-project=/g) ?? []).length;
  if (preview && page.name === 'home') assert.ok(demoCount <= 2, `${page.file}: at most two featured concepts`);
  else assert.equal(demoCount, preview && page.name === 'portfolio' ? 4 : 0, `${page.file}: demo isolation`);
  assert.ok(!html.includes('class="preview-banner"'), `${page.file}: visible preview banner`);
  assert.ok(!html.includes('class="demo-label"'), `${page.file}: repeated demo label`);
  if (preview && page.name === 'portfolio') {
    assert.ok(html.includes(page.lang === 'en' ? 'The images and descriptions below are illustrative, not verified client deliveries.' : 'ภาพและคำอธิบายต่อไปนี้จัดทำเพื่อประกอบการนำเสนอ ไม่ใช่ผลงานที่ยืนยันว่าได้ส่งมอบให้ลูกค้า'), `${page.file}: concept disclosure`);
  }
  if (page.name === 'portfolio') {
    assert.ok(!html.includes('class="tile-facts"'), `${page.file}: no technical fact rows`);
    if (preview) {
      const cards = html.match(/<article\b[\s\S]*?<\/article>/g) ?? [];
      for (const card of cards) {
        const visible = card.replace(/<[^>]*>/g, ' ');
        assert.doesNotMatch(visible, /\b(?:concept|sample|demo|TypeScript|Astro)\b|แนวคิด|ตัวอย่าง/i, `${page.file}: card labels or technology`);
      }
    }
  }
  if (!preview) {
    assert.ok(!html.includes('data-demo-project='), `${page.file}: demo project in production`);
    for (const name of ['Fieldnote', 'Relay', 'Commonplace', 'Ledgerway']) assert.ok(!html.includes(name), `${page.file}: concept project in production`);
  }
  assert.ok(!/href=["']https?:\/\/(?:[^/]+\.)?github\.com(?:[/:?#]|["'])/i.test(html), `${page.file}: GitHub navigation`);
  if (page.name === 'contact') {
    assert.ok(!html.includes('<form'), `${page.file}: native submission must be unavailable`);
    assert.ok(html.includes('role="form"'), `${page.file}: form landmark`);
    assert.ok(html.includes(page.lang === 'en' ? 'This contact form is being prepared and cannot send messages yet.' : 'แบบฟอร์มอยู่ระหว่างการเตรียมเปิดใช้งาน ยังไม่สามารถส่งข้อความได้ในขณะนี้'), `${page.file}: unavailable notice`);
    for (const id of ['contact-name', 'contact-email', 'contact-type', 'contact-message']) {
      assert.ok(html.includes(`for="${id}"`) && html.includes(`id="${id}"`), `${page.file}: labeled ${id}`);
    }
    assert.match(html, /<button\b[^>]*type="button"[^>]*disabled/, `${page.file}: disabled button`);
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

for (const name of pageNames) {
  const segment = name === 'home' ? '' : `${name}/`;
  const html = readFileSync(`dist/th/${segment}index.html`, 'utf8');
  assert.ok(html.includes('content="noindex, follow"'), `legacy ${name}: noindex`);
  assert.ok(html.includes(`rel="canonical" href="${site}${base}${segment}"`), `legacy ${name}: canonical`);
  assert.ok(html.includes(`content="0;url=${base}${segment}"`), `legacy ${name}: redirect`);
}

for (const lang of ['en', 'th']) {
  const locale = lang === 'en' ? 'en/' : '';
  const home = readFileSync(`dist/${locale}index.html`, 'utf8');
  const portfolio = readFileSync(`dist/${locale}portfolio/index.html`, 'utf8');
  const ids = [...portfolio.matchAll(/\bid="(project-[a-z0-9-]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, ids.length, `${lang}: unique project anchors`);
  const links = [...home.matchAll(new RegExp(`href="${base}${locale}portfolio/#(project-[a-z0-9-]+)"`, 'g'))].map((m) => m[1]);
  for (const id of links) assert.ok(ids.includes(id), `${lang}: featured link target ${id}`);
  const featuredCount = (home.match(/data-demo-project=/g) ?? []).length;
  if (preview) assert.equal(new Set(links).size, featuredCount, `${lang}: each featured project links to its target`);
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
  assert.ok(!sitemap.includes(`${site}${base}th/`), 'sitemap: legacy Thai URLs excluded');
  for (const page of pages) assert.ok(sitemap.includes(`<loc>${site}${page.path}</loc>`), `sitemap: ${page.path}`);
  assert.ok(robots.includes(`${site}${base}sitemap-index.xml`), 'robots: sitemap URL');
  console.log('PASS production sitemap, robots, and demo exclusion');
}
