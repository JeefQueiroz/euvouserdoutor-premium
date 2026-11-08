import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const legacy = path.join(root, 'legacy');
const output = path.join(root, 'dist');
const skip = process.env.SKIP_LEGACY === 'true';
const manifest = skip ? { assets: [], commit: '' } : JSON.parse(fs.readFileSync(path.join(legacy, 'assets-manifest.json'), 'utf8'));

function execute(bin, args, cwd) {
  const result = spawnSync(bin, args, { cwd, stdio: 'inherit', env: process.env, timeout: 240000 });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error('Falha em ' + bin + ' ' + args.join(' ') + ' (' + result.status + ')');
}
function copyDirectory(src, dst) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const a = path.join(src, entry.name), b = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDirectory(a, b);
    else if (entry.isFile()) fs.copyFileSync(a, b);
  }
}
function restoreMedia() {
  for (const name of manifest.assets) {
    if (!fs.existsSync(path.join(legacy, name))) throw new Error('Mídia original ausente do snapshot: ' + name);
  }
  console.log('Mídias locais validadas: ' + manifest.assets.length);
}
if (skip) {
  console.log('Importação do legado ignorada apenas neste build de diagnóstico.');
} else {
  restoreMedia();
  const vite = path.join(root, 'node_modules', '.bin', process.platform === 'win32' ? 'vite.cmd' : 'vite');
  if (!fs.existsSync(vite)) throw new Error('Instale as dependências do projeto raiz.');
  execute(vite, ['build'], legacy);
  execute(vite, ['build', '--ssr', 'src/entry-server.jsx', '--outDir', 'dist-server'], legacy);
  execute(process.execPath, ['scripts/prerender.mjs'], legacy);
  copyDirectory(path.join(legacy, 'dist', 'assets'), path.join(output, 'assets'));
  for (const item of manifest.assets) {
    const relative = item.replace(/^public\//, '');
    const src = path.join(legacy, 'dist', relative);
    const dst = path.join(output, relative);
    if (fs.existsSync(src)) {
      fs.mkdirSync(path.dirname(dst), { recursive: true });
      fs.copyFileSync(src, dst);
    }
  }
  const xml = fs.readFileSync(path.join(legacy, 'dist', 'sitemap.xml'), 'utf8');
  const routes = [...new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1]).pathname))];
  const imported = [];
  const indexed = process.env.PUBLIC_INDEXING === 'true' && process.env.SITE_URL?.startsWith('https://');
  for (const route of routes) {
    if (route === '/' || route === '/admin') continue;
    const src = path.join(legacy, 'dist', route.slice(1), 'index.html');
    if (!fs.existsSync(src)) throw new Error('Rota original faltando: ' + route);
    if (fs.existsSync(path.join(output, route.slice(1) + '.html'))) continue;
    const dst = path.join(output, route.slice(1), 'index.html');
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    let html = fs.readFileSync(src, 'utf8');
    if (!indexed) html = html.replace(/<meta name="robots" content="[^"]*"\s*\/>/, '<meta name="robots" content="noindex,nofollow" />');
    fs.writeFileSync(dst, html);
    imported.push(route);
  }
  if (imported.length < 55 || !['/noticias', '/materiais', '/mentoria', '/flashcards'].every(x => imported.includes(x))) {
    throw new Error('Paridade de rotas insuficiente: ' + imported.length);
  }
  if (indexed) {
    const filename = path.join(output, 'sitemap.xml');
    const premium = fs.readFileSync(filename, 'utf8');
    const base = process.env.SITE_URL.replace(/\/$/, '');
    const entries = imported.filter(x => x.startsWith('/noticias')).map(x => '<url><loc>' + base + x + '</loc></url>').join('');
    fs.writeFileSync(filename, premium.replace('</urlset>', entries + '</urlset>'));
  }
  fs.writeFileSync(path.join(output, 'legacy-parity.json'), JSON.stringify({sourceCommit:manifest.commit,imported,images:manifest.assets.length}, null, 2));
  console.log('Rotas do portal original restauradas: ' + imported.length);
}
