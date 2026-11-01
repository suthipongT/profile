import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const preview = import.meta.env.PUBLIC_PORTFOLIO_PREVIEW === 'true';
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const text = preview
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL(`${base}sitemap-index.xml`, site).href}\n`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
