import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { render, institutional, routeMeta, pathToView } from '../dist-server/entry-server.js';

const root = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(root, '..');
const distDir = path.join(projectRoot, 'dist');

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const jsonForHtml = (value) => JSON.stringify(value).replaceAll('<', '\\u003c');

const absoluteUrl = (routePath) => `${institutional.site}${routePath === '/' ? '' : routePath}`;

const validIsoDate = (value) => typeof value === 'string' && !Number.isNaN(Date.parse(value)) ? value : null;
const isoDateFor = (meta) => validIsoDate(meta.datePublished);

function buildJsonLd(routePath, meta, isArticle) {
  const canonical = absoluteUrl(routePath);
  const image = absoluteUrl(meta.image || '/logo-euvouserdoutor.webp');
  const authorId = `${institutional.site}/autor/jeff-queiroz#person`;
  const organizationId = `${institutional.site}/#organization`;
  const graph = [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'EuvouserDoutor',
      legalName: 'EuvouserDoutor',
      url: institutional.site,
      logo: `${institutional.site}/logo-euvouserdoutor.webp`,
      founder: { '@id': authorId },
      sameAs: [institutional.instagram, institutional.facebook, institutional.youtube, institutional.telegram, institutional.linkedin, institutional.pinterest].filter(Boolean),
    },
    {
      '@type': 'Person',
      '@id': authorId,
      name: 'Jeff Queiroz',
      alternateName: 'Jefferson Viana Queiroz',
      url: `${institutional.site}/autor/jeff-queiroz`,
      image: `${institutional.site}/jeff-queiroz-perfil.webp`,
      worksFor: { '@id': organizationId },
      sameAs: [institutional.instagram, institutional.linkedin].filter(Boolean),
    },
    {
      '@type': isArticle ? 'NewsArticle' : routePath === '/autor/jeff-queiroz' ? 'ProfilePage' : 'WebPage',
      '@id': `${canonical}#${isArticle ? 'article' : 'webpage'}`,
      url: canonical,
      name: meta.title,
      headline: meta.title,
      description: meta.description,
      image,
      inLanguage: 'pt-BR',
      author: { '@id': authorId },
      creator: { '@id': authorId },
      publisher: { '@id': organizationId },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      ...(isArticle && isoDateFor(meta) ? { datePublished: isoDateFor(meta), dateModified: validIsoDate(meta.dateModified) || isoDateFor(meta) } : {}),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${institutional.site}/` },
        ...(routePath.startsWith('/noticias') ? [{ '@type': 'ListItem', position: 2, name: 'Notícias', item: `${institutional.site}/noticias` }] : []),
        ...(isArticle ? [{ '@type': 'ListItem', position: 3, name: meta.title, item: canonical }] : []),
      ],
    },
  ];
  return { '@context': 'https://schema.org', '@graph': graph };
}

function buildHead(routePath, meta, isArticle) {
  const canonical = absoluteUrl(routePath);
  const image = absoluteUrl(meta.image || '/logo-euvouserdoutor.webp');
  const lcpImage = routePath === '/' ? `${institutional.site}/jeff-queiroz-perfil.webp` : null;
  const type = isArticle ? 'article' : 'website';
  const published = isArticle ? isoDateFor(meta) : '';
  const jsonLd = buildJsonLd(routePath, meta, isArticle);
  return `
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(meta.description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="EuvouserDoutor" />
    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:image" content="${escapeHtml(image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
    <meta name="twitter:image" content="${escapeHtml(image)}" />
    ${lcpImage ? `<link rel="preload" as="image" href="${escapeHtml(lcpImage)}" fetchpriority="high" />` : ''}${published ? `<meta property="article:published_time" content="${published}" />` : ''}
    <title>${escapeHtml(meta.title)}</title>
    <script id="evd-jsonld" type="application/ld+json">${jsonForHtml(jsonLd)}</script>`;
}

const shell = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
const stylesheetLinks = [...shell.matchAll(/<link rel="stylesheet"[^>]*>/g)].map((match) => match[0]).join('');
const modulePreloadLinks = [...shell.matchAll(/<link rel="modulepreload"[^>]*>/g)].map((match) => match[0]).join('');
const scriptTags = [...shell.matchAll(/<script[^>]*src="[^"]+"[^>]*><\/script>/g)].map((match) => match[0]).join('');
const sitemap = await fs.readFile(path.join(distDir, 'sitemap.xml'), 'utf8');
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname || '/');

for (const routePath of [...new Set(paths)]) {
  const view = pathToView[routePath] || 'notfound';
  const meta = routeMeta[view] || routeMeta.notfound;
  const isArticle = view.startsWith('post_');
  const body = render(routePath);
  const head = buildHead(routePath, meta, isArticle);
  const html = shell
    .replace(/<head>[\s\S]*?<\/head>/, `<head>${head}${modulePreloadLinks}${stylesheetLinks}<link rel="icon" href="/favicon-optimized.png" sizes="32x32" /><link rel="icon" href="/favicon-optimized.png" sizes="16x16" /><link rel="apple-touch-icon" href="/favicon-optimized.png" sizes="16x16" />${scriptTags}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  const outputPath = routePath === '/' ? path.join(distDir, 'index.html') : path.join(distDir, routePath.replace(/^\//, ''), 'index.html');
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html);
}

console.log(`Pré-renderizadas ${new Set(paths).size} rotas públicas.`);
