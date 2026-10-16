// Generates, from the catalogue and content files:
//   routes.txt               pages to prerender
//   public/sitemap.xml       canonical URLs (all with a trailing slash)
//   public/redirects.json    old URL -> new URL, read by the Cloudflare worker (one-hop 301s)
//   docs/url-register.csv    the same redirect sheet for the client (handover section 2.3)
//   public/llms.txt          plain-text site map for AI assistants (llmstxt.org)
// Run before every build: `node tools/seo-routes.mjs` (npm run build does this automatically).
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://evochem.co.in';
const read = p => readFileSync(join(root, p), 'utf8');
const json = p => JSON.parse(read(p));
const slugsIn = file => [...read(file).matchAll(/^ {4}slug: '([^']+)'/gm)].map(m => m[1]);
// slug + name + description of each page in a content file (string values in '...' or "...")
const str = String.raw`('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")`;
const unq = v => v.slice(1, -1).replace(/\\(.)/g, '$1');
const entriesIn = file => [...read(file).matchAll(new RegExp(`^ {4}slug: '([^']+)',\n {4}name: ${str},[\\s\\S]*?^ {4}description:\\s+${str}`, 'gm'))]
  .map(m => ({ slug: m[1], name: unq(m[2]), description: unq(m[3]) }));
const formatCode = code => code.replace(/\s+/g, '-').toLowerCase();
const today = new Date().toISOString().slice(0, 10);

const groups = json('public/assets/data/evochem-data.json');
const products = [...new Map(groups.flatMap(g => g.products).map(p => [p.slug, p])).values()];

const categories = slugsIn('src/app/content/categories.ts');
const industries = slugsIn('src/app/content/industries.ts');
const solutions = slugsIn('src/app/content/solutions.ts');
const caseStudies = slugsIn('src/app/content/case-studies.ts');
const articles = slugsIn('src/app/content/articles.ts');
const legacyArticles = [...read('src/app/content/site-content.ts').matchAll(/slug: '([^']+)', type: '([^']+)'/g)]
  .map(m => ({ slug: m[1], type: m[2] }));

for (const g of groups) {
  if (!categories.includes(g.slug)) throw new Error(`No category page for product group ${g.slug}`);
}

// [path, priority, changefreq]
const pages = [
  ['/', '1.0', 'weekly'],
  ['/products/', '0.9', 'weekly'],
  ...categories.map(s => [`/products/${s}/`, '0.9', 'monthly']),
  ...products.map(p => [`/products/${p.slug}/`, '0.7', 'monthly']),
  // the same products inside each category they belong to (self-canonical, also indexed)
  ...groups.flatMap(g => g.products.map(p => [`/products/${g.slug}/${p.slug}/`, '0.6', 'monthly'])),
  ['/industries/', '0.8', 'monthly'],
  ...industries.map(s => [`/industries/${s}/`, '0.8', 'monthly']),
  ['/solutions/', '0.8', 'monthly'],
  ...solutions.map(s => [`/solutions/${s}/`, '0.8', 'monthly']),
  ['/case-studies/', '0.6', 'monthly'],
  ...caseStudies.map(s => [`/case-studies/${s}/`, '0.6', 'monthly']),
  ['/resources/', '0.6', 'weekly'],
  ...articles.map(s => [`/resources/${s}/`, '0.6', 'monthly']),
  ...legacyArticles.map(a => [`/resources/${a.slug}/`, '0.5', 'monthly']),
  ['/cleaning-chemicals-manufacturer-bangalore/', '0.8', 'monthly'],
  ['/contactus/', '0.6', 'monthly'],
];

const paths = pages.map(p => p[0]);
if (new Set(paths).size !== paths.length) throw new Error('Duplicate URL in the register');

// ---- Redirects: every replaced URL goes straight (one hop) to its closest new page. ----
const redirects = {
  '/home': '/',
  '/product': '/products/',
  '/categories': '/industries/',
  '/blogs': '/resources/',
  // old keyword landing pages
  '/food-processing-cleaning-chemicals': '/industries/food-processing/',
  '/commercial-kitchen-cleaning-chemicals': '/products/commercial-kitchen-cleaning-chemicals/',
  '/cip-cleaning-chemicals': '/solutions/cip-cleaning-chemicals/',
  // old cleaning-area pages
  '/solutions/BathroomCleaning': '/solutions/washroom-cleaning-chemicals/',
  '/solutions/KitchenCleaning': '/solutions/commercial-kitchen-hygiene/',
  '/solutions/LaundryCleaning': '/solutions/laundry-hygiene/',
  '/solutions/Surface&AirClean': '/products/institutional-housekeeping-chemicals/',
};

// old industry pages, by slug and by legacy numeric id
const industryMap = {
  'commercial-building': 'facility-management',
  'food-and-beverages-processing': 'food-processing',
  'manufacturing-and-warehousing': 'manufacturing-warehousing',
  'hospitality-and-food-service': 'hospitality',
  'health-care-facility': 'healthcare',
  'commercial-laundries': 'commercial-laundry',
};
for (const i of json('public/assets/data/industries.json')) {
  const target = `/industries/${industryMap[i.slug]}/`;
  redirects[`/categories/${i.slug}`] = target;
  redirects[`/categories/${i.id}`] = target;
}

// old product pages /product/<code>: first product with that code wins ("flox" was the pre-wash detergent)
for (const g of groups) {
  for (const p of g.products) {
    const old = `/product/${formatCode(p.code)}`;
    if (!redirects[old]) redirects[old] = `/products/${p.slug}/`;
  }
}

for (const a of legacyArticles) redirects[`/blogs/${a.type}`] = `/resources/${a.slug}/`;

for (const [from, to] of Object.entries(redirects)) {
  if (!paths.includes(to)) throw new Error(`Redirect ${from} -> ${to} points to a URL that is not in the register`);
  if (paths.includes(from + '/')) throw new Error(`Redirect source ${from} is itself a live page`);
}

// ---- Write outputs ----
// Prerendered without the trailing slash; the build writes <path>/index.html either way.
const routes = paths.map(p => (p === '/' ? p : p.slice(0, -1)));
writeFileSync(join(root, 'routes.txt'), routes.join('\n') + '\n');

const esc = s => s.replace(/&/g, '&amp;');
writeFileSync(join(root, 'public/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([p, pr, cf]) => `  <url>
    <loc>${esc(SITE + p)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${cf}</changefreq>
    <priority>${pr}</priority>
  </url>`).join('\n')}
</urlset>
`);

writeFileSync(join(root, 'public/redirects.json'), JSON.stringify(redirects, null, 1) + '\n');

mkdirSync(join(root, 'docs'), { recursive: true });
const csv = [['old_url', 'new_url', 'status'], ...Object.entries(redirects).map(([f, t]) => [SITE + f, SITE + t, '301']),
  ['', '', ''], ['new_url (sitemap)', '', ''], ...paths.map(p => [SITE + p, '', '200'])];
writeFileSync(join(root, 'docs/url-register.csv'), csv.map(r => r.map(c => /[",]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c).join(',')).join('\n') + '\n');

// ---- llms.txt ----
const block = (title, base, list) => [`## ${title}`, '', ...list.map(e => `- [${e.name}](${SITE}${base}${e.slug}/): ${e.description}`), ''];
const catPages = entriesIn('src/app/content/categories.ts');
const llms = [
  '# Evochem',
  '',
  '> Evochem (Ennwin Industries Pvt Ltd, Anekal, Bengaluru) manufactures industrial and hygiene cleaning chemicals in India: food processing hygiene, commercial kitchen, housekeeping, commercial laundry, hand hygiene and industrial degreasing chemicals, supplied in bulk across India.',
  '',
  `- [Home](${SITE}/)`, `- [Cleaning chemicals manufacturer in Bangalore](${SITE}/cleaning-chemicals-manufacturer-bangalore/)`, `- [Contact / get a quote](${SITE}/contactus/)`, `- [Sitemap](${SITE}/sitemap.xml)`,
  '',
  ...block('Product categories', '/products/', catPages),
  '## Products',
  '',
  'Each product has a short URL and a URL inside its category; both show the same product page.',
  '',
  ...groups.flatMap(g => [`### ${catPages.find(c => c.slug === g.slug)?.name || g.name}`, '',
    ...g.products.map(p => `- [${p.title} (${p.code})](${SITE}/products/${g.slug}/${p.slug}/): ${p.details.description.replace(/\s+/g, ' ').trim()} Short URL: ${SITE}/products/${p.slug}/`), '']),
  ...block('Industries', '/industries/', entriesIn('src/app/content/industries.ts')),
  ...block('Solutions', '/solutions/', entriesIn('src/app/content/solutions.ts')),
  ...block('Case studies (programme examples)', '/case-studies/', entriesIn('src/app/content/case-studies.ts')),
  ...block('Articles', '/resources/', [...entriesIn('src/app/content/articles.ts'),
    ...[...read('src/app/content/site-content.ts').matchAll(new RegExp(`slug: '([^']+)', type: '[^']+',\n {4}title: ${str},\n {4}description: ${str}`, 'g'))]
      .map(m => ({ slug: m[1], name: unq(m[2]), description: unq(m[3]) }))]),
];
writeFileSync(join(root, 'public/llms.txt'), llms.join('\n'));

console.log(`llms.txt: ${llms.filter(l => l.startsWith('- [')).length} links`);
console.log(`routes.txt: ${routes.length} routes, sitemap.xml: ${pages.length} URLs, redirects.json: ${Object.keys(redirects).length} redirects`);
