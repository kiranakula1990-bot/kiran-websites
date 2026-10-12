// Generates routes.txt (pages to prerender) and public/sitemap.xml from the catalogue data.
// Run before every build: `node tools/seo-routes.mjs` (npm run build does this automatically).
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://evochem.co.in';
const json = p => JSON.parse(readFileSync(join(root, 'public/assets/data', p), 'utf8'));
const formatCode = code => code.replace(/\s+/g, '-').toLowerCase();
const today = new Date().toISOString().slice(0, 10);

const industries = json('industries.json');
const solutionTypes = json('solutionTypes.json');
const products = [...new Set(json('evochem-data.json').flatMap(g => g.products.map(p => formatCode(p.code))))];
const blogs = ['liquidDetergent', 'healthCare', 'deepcleaning', 'cleanBrand', 'cleanKitchen'];
const landing = [...readFileSync(join(root, 'src/app/seo/landing-pages.ts'), 'utf8').matchAll(/slug: '([^']+)'/g)].map(m => m[1]);

// [path, priority, changefreq]
const pages = [
  ['/', '1.0', 'weekly'],
  ...landing.map(s => [`/${s}`, '0.9', 'monthly']),
  ...industries.map(i => [`/categories/${i.slug}`, '0.8', 'monthly']),
  ...solutionTypes.map(t => [`/solutions/${t.code}`, '0.7', 'monthly']),
  ...products.map(p => [`/product/${p}`, '0.7', 'monthly']),
  ...blogs.map(b => [`/blogs/${b}`, '0.6', 'monthly']),
  ['/contactus', '0.6', 'monthly'],
];

// Also prerendered but not in the sitemap: bare /categories and /solutions, and the legacy numeric
// /categories/<id> URLs, so old links keep working. All of them canonicalise to the slug URL.
const routes = [...pages.map(p => p[0]), '/categories', '/solutions', ...industries.map(i => `/categories/${i.id}`)];
writeFileSync(join(root, 'routes.txt'), routes.join('\n') + '\n');

const esc = s => s.replace(/&/g, '&amp;');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([p, pr, cf]) => `  <url>
    <loc>${esc(SITE + p)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${cf}</changefreq>
    <priority>${pr}</priority>
  </url>`).join('\n')}
</urlset>
`;
writeFileSync(join(root, 'public/sitemap.xml'), sitemap);
console.log(`routes.txt: ${routes.length} routes, sitemap.xml: ${pages.length} URLs`);
