// Information architecture (handover section 2): one registry for every editorial page, its URL and its
// place in the menus. tools/seo-routes.mjs reads the same files to build routes.txt, the sitemap and redirects.
import { ContentPage, PageKind } from './content-model';
import { INDUSTRIES } from './industries';
import { SOLUTIONS } from './solutions';
import { CATEGORIES } from './categories';
import { ARTICLES } from './articles';
import { CASE_STUDIES } from './case-studies';
import { PRIORITY_SECTIONS } from './priority-keywords';

export { INDUSTRIES, SOLUTIONS, CATEGORIES, ARTICLES, CASE_STUDIES };

/** URL prefix of each page kind. Every public URL ends with a slash. */
export const SECTION_BASE: Record<Exclude<PageKind, 'landing'>, string> = {
  industry: '/industries/',
  solution: '/solutions/',
  category: '/products/',
  'case-study': '/case-studies/',
  article: '/resources/',
};

export function pagePath(page: { kind: PageKind; slug: string }): string {
  return page.kind === 'landing' ? `/${page.slug}/` : SECTION_BASE[page.kind] + page.slug + '/';
}

const BY_KIND: Record<Exclude<PageKind, 'landing'>, ContentPage[]> = {
  industry: INDUSTRIES,
  solution: SOLUTIONS,
  category: CATEGORIES,
  'case-study': CASE_STUDIES,
  article: ARTICLES,
};

// Keyword-brief sections (priority-keywords.ts) go after each page's own sections.
for (const [key, sections] of Object.entries(PRIORITY_SECTIONS)) {
  const [kind, slug] = key.split(':') as [Exclude<PageKind, 'landing'>, string];
  const page = BY_KIND[kind].find(p => p.slug === slug);
  if (!page) throw new Error(`priority-keywords: no page ${key}`);
  page.sections.push(...sections);
}

export function findPage(kind: PageKind, slug: string): ContentPage | undefined {
  return kind === 'landing' ? undefined : BY_KIND[kind].find(p => p.slug === slug);
}

/** The five original blog posts keep their own component; only their URL moved to /resources/<slug>/. */
export interface LegacyArticle {
  slug: string;
  /** Key used by BlogsComponent (the old /blogs/<type> URL). */
  type: string;
  title: string;
  description: string;
  summary: string;
  date: string;
  image: string;
}

export const LEGACY_ARTICLES: LegacyArticle[] = [
  {
    slug: 'liquid-detergent-manufacturers-india', type: 'liquidDetergent',
    title: 'Liquid Detergent Manufacturers in India: A Complete Guide for Businesses',
    description: 'How to choose a liquid detergent manufacturer in India: formulations, certifications, MOQs, packaging, private label and bulk supply, explained for businesses.',
    summary: 'What to check when choosing a liquid detergent manufacturer for bulk or private-label supply.',
    date: '2026-05-03', image: 'assets/image/CommercialLaundries.jpg',
  },
  {
    slug: 'healthcare-cleaning-protocols', type: 'healthCare',
    title: 'Excellence in Healthcare: The Indispensable Role of Cleaning Protocols',
    description: 'Why cleaning protocols matter in hospitals and clinics: disinfection, high-touch surfaces, staff training and the hospital housekeeping chemicals that support them.',
    summary: 'Why written cleaning protocols matter in hospitals and clinics, and what they should cover.',
    date: '2024-11-14', image: 'assets/image/health-care2.jpg',
  },
  {
    slug: 'deep-cleaning-reset-protocols', type: 'deepcleaning',
    title: 'Deep Cleaning Reset Protocols for Commercial Establishments',
    description: 'Deep cleaning reset protocols for commercial establishments: planning, high-touch areas, disinfection and the professional cleaning chemicals to use.',
    summary: 'How to plan a deep-cleaning reset for a commercial site, area by area.',
    date: '2024-10-22', image: 'assets/image/deep-cleaning.jpg',
  },
  {
    slug: 'cleanliness-brand-image-customer-trust', type: 'cleanBrand',
    title: 'How Cleanliness Influences Brand Image and Customer Trust',
    description: 'How cleanliness shapes brand image and customer trust in restaurants, hotels and retail, and how a consistent cleaning programme supports it.',
    summary: 'How visible cleanliness shapes what customers think of a restaurant, hotel or store.',
    date: '2024-09-18', image: 'assets/image/branding.jpg',
  },
  {
    slug: 'clean-kitchen-safe-kitchen-tips', type: 'cleanKitchen',
    title: 'Clean Kitchen, Safe Kitchen: Essential Tips for a Healthy Cooking Spaces',
    description: 'Essential tips for a clean, safe kitchen: cleaning routines, food-safe products, cross-contamination, ventilation, waste management and pest prevention.',
    summary: 'Daily, weekly and monthly routines for a clean and safe kitchen.',
    date: '2024-08-05', image: 'assets/image/clean-kitchen.jpg',
  },
];

export const legacyArticlePath = (a: LegacyArticle) => `/resources/${a.slug}/`;

/** Cards for the articles listing: new articles first (newest first), then the original posts. */
export function articleCards(): { path: string; title: string; summary: string; image: string; date: string }[] {
  const fresh = ARTICLES.map(a => ({ path: pagePath(a), title: a.h1, summary: a.summary, image: a.banner, date: a.date || '' }));
  const old = LEGACY_ARTICLES.map(a => ({ path: legacyArticlePath(a), title: a.title, summary: a.summary, image: a.image, date: a.date }));
  return [...fresh, ...old].sort((x, y) => y.date.localeCompare(x.date));
}

/** Pages (other than its own category) that recommend a product: shown as "Where it is used" on product pages. */
export function pagesUsingProduct(productSlug: string): ContentPage[] {
  return [...INDUSTRIES, ...SOLUTIONS].filter(p => p.sections.some(s => s.products?.includes(productSlug)));
}

/** Listing pages: /products/, /industries/, /solutions/, /case-studies/, /resources/. */
export type IndexKind = 'products' | 'industries' | 'solutions' | 'case-studies' | 'resources';

export interface IndexPage {
  kind: IndexKind;
  path: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  tagline: string;
  banner: string;
  intro: string[];
}

export const INDEX_PAGES: Record<IndexKind, IndexPage> = {
  products: {
    kind: 'products', path: '/products/', name: 'Products',
    title: 'Professional Cleaning & Hygiene Products | Evochem',
    description: 'Browse Evochem cleaning and hygiene chemicals by category: food processing, commercial kitchen, housekeeping, laundry, hand hygiene and industrial degreasing.',
    h1: 'Professional cleaning and hygiene products',
    tagline: 'Six product ranges, manufactured in Bengaluru and supplied in bulk across India',
    banner: 'assets/image/big-banner.jpg',
    intro: [
      'Evochem manufactures cleaning and hygiene chemicals for food plants, commercial kitchens, hotels, hospitals, laundries, factories and facility managers. Every product below has its own page with its description, dilution guidance and enquiry options.',
      'Not sure which product fits your site? Start from your industry or cleaning task, or ask our technical team for a recommendation.',
    ],
  },
  industries: {
    kind: 'industries', path: '/industries/', name: 'Industries',
    title: 'Cleaning Chemicals by Industry | Evochem',
    description: 'Hygiene programmes and cleaning chemicals for food processing, dairy, poultry, hospitality, healthcare, commercial laundry, manufacturing and facility management.',
    h1: 'Cleaning and hygiene chemicals by industry',
    tagline: 'The soils, surfaces and routines of your sector, and the products that suit them',
    banner: 'assets/image/FoodProcessing.jpg',
    intro: [
      'Each industry cleans different soils on different surfaces, under different rules. These pages explain the typical hygiene challenges of each sector, the cleaning sequence we recommend and the Evochem products that fit.',
    ],
  },
  solutions: {
    kind: 'solutions', path: '/solutions/', name: 'Solutions',
    title: 'Cleaning Solutions by Task: CIP, OPC, Kitchen & More | Evochem',
    description: 'Cleaning solutions by task: CIP, open plant cleaning, commercial kitchen hygiene, washrooms, floor care, laundry, hand hygiene and sanitisation chemicals.',
    h1: 'Cleaning solutions by task',
    tagline: 'How each cleaning process works, and which products to use at each step',
    banner: 'assets/image/close-up-floor-wiper-mop-cleaning-industrial-plant-scaled.webp',
    intro: [
      'A solution page explains one cleaning process from start to finish: what it is for, how it differs from similar processes, the steps involved and the products to use at each step.',
    ],
  },
  'case-studies': {
    kind: 'case-studies', path: '/case-studies/', name: 'Case studies',
    title: 'Hygiene Programme Case Studies | Evochem',
    description: 'How Evochem sets up hygiene programmes for poultry plants, dairies, hotels and facility managers: assessment, products, cleaning sequence, training and monitoring.',
    h1: 'Hygiene programme case studies',
    tagline: 'How we set up cleaning programmes for different types of sites',
    banner: 'assets/image/Hospitality&FoodService.png',
    intro: [
      'These case studies describe how Evochem typically sets up a hygiene programme for a type of site: the assessment, the products and cleaning sequence, the training and documentation, and what the site monitors afterwards.',
    ],
  },
  resources: {
    kind: 'resources', path: '/resources/', name: 'Articles',
    title: 'Cleaning & Hygiene Articles and Guides | Evochem',
    description: 'Practical guides on CIP and OPC cleaning, choosing alkaline or acidic cleaners, dishwashing, floor care, laundry, sanitisers and reducing chemical consumption.',
    h1: 'Articles and guides',
    tagline: 'Practical cleaning and hygiene guidance from the Evochem technical team',
    banner: 'assets/image/deep-cleaning.jpg',
    intro: [
      'Guides for plant managers, chefs, housekeeping heads and procurement teams: how cleaning processes work, how to choose the right chemistry and how to use it well.',
    ],
  },
};
