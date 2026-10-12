import solutionsData from '../../../public/assets/data/evochem-data.json';
import industriesData from '../../../public/assets/data/industries.json';
import solutionTypesData from '../../../public/assets/data/solutionTypes.json';
import { LANDING_PAGES } from './landing-pages';
import { PageSeo, SITE_URL } from './seo.service';

const ORG_ID = `${SITE_URL}/#organization`;

const HOME: PageSeo = {
  title: 'Industrial Cleaning Chemical Manufacturer India | Evochem',
  description: 'Evochem — trusted manufacturer of industrial & hygiene cleaning chemicals in India. ISO-compliant, bulk supply, pan-India delivery. Get a free quote today.',
  path: '/',
};

/** Unique title + description per industry page (keyed by industries.json id). */
const INDUSTRY_SEO: Record<string, { title: string; description: string }> = {
  '1': {
    title: 'Housekeeping Chemicals for Offices & Commercial Buildings | Evochem',
    description: 'Commercial cleaning chemicals for offices, schools and places of worship: floor, bathroom, glass and surface cleaners plus handwash. Bulk supply from Bengaluru.',
  },
  '2': {
    title: 'Food & Beverage Plant Cleaning Products | Evochem',
    description: 'Foam cleaners, CIP detergents and food-industry sanitisers for dairy, meat, seafood, beverage, brewery and distillery plants. Manufactured in Bengaluru.',
  },
  '3': {
    title: 'Factory & Warehouse Cleaning Chemicals | Evochem',
    description: 'Housekeeping chemicals, floor cleaners and hand hygiene products for factories, warehouses and cold storage. Bulk supply across India from Bengaluru.',
  },
  '4': {
    title: 'Hotel & Hospitality Cleaning Chemicals Supplier | Evochem',
    description: 'Hotel housekeeping chemicals, kitchen care, laundry and hand hygiene for hotels, lodges, QSRs and cloud kitchens. Bulk supply from Evochem, Bengaluru.',
  },
  '5': {
    title: 'Hospital Housekeeping & Healthcare Cleaning Chemicals | Evochem',
    description: 'Healthcare cleaning chemicals for hospitals and clinics: floor and surface cleaners, sanitisers, kitchen and laundry care, and hand hygiene. Bulk supply.',
  },
  '6': {
    title: 'Commercial Laundry Chemicals for Hotels & Institutions | Evochem',
    description: 'Pre-wash and main-wash detergents, chlorine destainer, sour and fabric softener for commercial, hotel and institutional laundries. Bulk supply in India.',
  },
};

/** Unique title + description per cleaning-area page (keyed by solutionTypes.json code). */
const SOLUTION_SEO: Record<string, { title: string; description: string }> = {
  'BathroomCleaning': {
    title: 'Commercial Bathroom & Restroom Cleaning Chemicals | Evochem',
    description: 'Restroom cleaning guide for 8 key areas, with the right Evochem product for each: bathroom cleaner, toilet bowl cleaner, glass cleaner, floor cleaner and handwash.',
  },
  'KitchenCleaning': {
    title: 'Commercial Kitchen Cleaning Guide: 10 Key Areas | Evochem',
    description: 'How to clean the 10 key areas of a commercial kitchen, from dishwashing and degreasing to drains and floors, with the Evochem product for each task.',
  },
  'LaundryCleaning': {
    title: 'Commercial Laundry Guide: Soft, Strong, Bright Linen | Evochem',
    description: 'Four steps to soft, strong and bright linen in commercial laundries, with the Evochem Flox detergent, destainer, sour and softener for each step.',
  },
  'Surface&AirClean': {
    title: 'Surface & Air Cleaning Products for Facilities | Evochem',
    description: 'Tips for clean surfaces and fresh air in commercial facilities, with the right Evochem cleaner, polish and air freshener for each surface.',
  },
};

/** Descriptions for the blog articles (titles come from BlogsComponent.blogMeta). */
const BLOG_SEO: Record<string, { title: string; description: string; date: string; image: string }> = {
  liquidDetergent: {
    title: 'Liquid Detergent Manufacturers in India: A Complete Guide for Businesses',
    description: 'How to choose a liquid detergent manufacturer in India: formulations, certifications, MOQs, packaging, private label and bulk supply, explained for businesses.',
    date: '2026-05-03', image: 'assets/image/CommercialLaundries.jpg',
  },
  healthCare: {
    title: 'Excellence in Healthcare: The Indispensable Role of Cleaning Protocols',
    description: 'Why cleaning protocols matter in hospitals and clinics: disinfection, high-touch surfaces, staff training and the hospital housekeeping chemicals that support them.',
    date: '2024-11-14', image: 'assets/image/health-care2.jpg',
  },
  deepcleaning: {
    title: 'Deep Cleaning Reset Protocols for Commercial Establishments',
    description: 'Deep cleaning reset protocols for commercial establishments: planning, high-touch areas, disinfection and the professional cleaning chemicals to use.',
    date: '2024-10-22', image: 'assets/image/deep-cleaning.jpg',
  },
  cleanBrand: {
    title: 'How Cleanliness Influences Brand Image and Customer Trust',
    description: 'How cleanliness shapes brand image and customer trust in restaurants, hotels and retail, and how a consistent cleaning programme supports it.',
    date: '2024-09-18', image: 'assets/image/branding.jpg',
  },
  cleanKitchen: {
    title: 'Clean Kitchen, Safe Kitchen: Essential Tips for a Healthy Cooking Spaces',
    description: 'Essential tips for a clean, safe kitchen: cleaning routines, food-safe products, cross-contamination, ventilation, waste management and pest prevention.',
    date: '2024-08-05', image: 'assets/image/clean-kitchen.jpg',
  },
};

/** Keyword-led title prefixes for priority products (from the October 2026 keyword list). */
const PRODUCT_TITLE: Record<string, string> = {
  'blaze-auto': 'Commercial Dishwasher Detergent',
  'blaze-rinse': 'Commercial Rinse Aid for Dishwashers',
  'blaze-dish': 'Commercial Dishwashing Liquid',
  'blaze-kitchen-care': 'Concentrated Kitchen Degreaser',
  'blaze-grill': 'Oven & Grill Cleaner (Carbon Remover)',
  'blaze-drain': 'Non-Acidic Liquid Drain Cleaner',
  'novel-hd': 'Heavy-Duty Industrial Floor Cleaner',
  'novel-ogr': 'Oil & Grease Remover Floor Cleaner',
  'evo-7': 'Neutral Floor Cleaner Concentrate',
  'evo-6': 'Toilet Bowl Cleaner for Commercial Use',
  'evo-1': 'Commercial Bathroom Cleaner',
  'evo-3': 'Commercial Glass Cleaner Concentrate',
  'evo-sp': 'Stainless Steel Polish',
  'evo-101': 'Carpet Shampoo Chemical',
  'evo-103': 'Carpet Pre-Spotter',
  'evo-9': 'Heavy-Duty Descaler',
  'clastox-50': 'Alkaline CIP Detergent',
  'clastox-plus': 'Low-Foam Heavy-Duty Alkaline Detergent',
  'sanix-peraxy': 'Peracetic Acid Sanitiser for Food Industry',
  'sanix-quat': 'Quat Sanitiser for Food Industry',
  'lush-care-plus': 'Antibacterial Handwash',
  'flox-star': 'Commercial Laundry Main Wash Detergent',
  'flox-sour': 'Laundry Sour Neutraliser',
  'flox-soft-care': 'Fabric Softener for Commercial Laundry',
};

export function formatCode(code: string): string {
  return code.replace(/\s+/g, '-').toLowerCase();
}

function clip(text: string, max = 158): string {
  const t = (text || '').replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,.;:]$/, '') + '…';
}

function breadcrumb(items: { name: string; path: string }[]): object {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem', position: i + 1, name: it.name, item: SITE_URL + it.path,
    })),
  };
}

export function findProduct(slug: string): { product: any; group: any } | undefined {
  for (const group of solutionsData as any[]) {
    const product = group.products.find((p: any) => formatCode(p.code) === slug);
    if (product) return { product, group };
  }
  return undefined;
}

/** Strips query, fragment and Angular matrix params (";solution=2") and decodes the path. */
export function normalizePath(url: string): string {
  let path = url.split('?')[0].split('#')[0];
  path = path.split('/').map(seg => seg.split(';')[0]).join('/');
  try { path = decodeURIComponent(path); } catch { /* keep raw */ }
  if (path.length > 1) path = path.replace(/\/+$/, '');
  return path || '/';
}

export function resolveSeo(url: string): PageSeo {
  const path = normalizePath(url);
  const [, first = '', second = ''] = path.split('/');

  if (path === '/') return HOME;

  if (first === 'contactus') {
    return {
      title: 'Contact Evochem | Cleaning Chemical Manufacturer India',
      description: 'Contact Evochem for bulk industrial and hygiene cleaning chemical supply across India. Get a free quote — fast response from our team.',
      path: '/contactus',
      jsonLd: [breadcrumb([{ name: 'Contact us', path: '/contactus' }])],
    };
  }

  if (first === 'categories') {
    const industries = industriesData as any[];
    // Slug URLs are canonical; legacy numeric ids (/categories/2) canonicalise to the slug.
    const industry = industries.find(i => i.slug === second || String(i.id) === second) || industries[0];
    const seo = INDUSTRY_SEO[String(industry.id)];
    const p = `/categories/${industry.slug}`;
    return {
      title: seo.title, description: seo.description, path: p,
      image: `${SITE_URL}/${industry.image}`, imageAlt: industry.title,
      jsonLd: [breadcrumb([{ name: industry.title, path: p }])],
    };
  }

  if (first === 'solutions') {
    const types = solutionTypesData as any[];
    const type = types.find(t => t.code === second) || types[0];
    const seo = SOLUTION_SEO[type.code];
    const p = `/solutions/${type.code}`;
    return {
      title: seo.title, description: seo.description, path: p,
      jsonLd: [breadcrumb([{ name: type.solutionType, path: p }])],
    };
  }

  if (first === 'product' && second) {
    const found = findProduct(second);
    if (found) {
      const { product, group } = found;
      const slug = formatCode(product.code);
      const p = `/product/${slug}`;
      const name = `${product.title} – ${product.code}`;
      const prefix = PRODUCT_TITLE[slug];
      const title = prefix ? `${prefix} – ${product.code} | Evochem` : `${name} | Evochem`;
      const image = `${SITE_URL}/${product.picture}`;
      return {
        title,
        description: clip(`${product.code} ${product.title.toLowerCase()} by Evochem: ${product.details.description}`),
        path: p, type: 'product', image, imageAlt: `${product.title} (${product.code})`,
        jsonLd: [
          breadcrumb([{ name: product.title, path: p }]),
          {
            '@type': 'Product',
            '@id': `${SITE_URL}${p}#product`,
            name,
            sku: product.code,
            description: product.details.description,
            image,
            category: group.name,
            brand: { '@type': 'Brand', name: 'Evochem' },
            manufacturer: { '@id': ORG_ID },
            url: SITE_URL + p,
          },
        ],
      };
    }
  }

  if (first === 'blogs' && second && BLOG_SEO[second]) {
    const blog = BLOG_SEO[second];
    const p = `/blogs/${second}`;
    const image = `${SITE_URL}/${blog.image}`;
    return {
      title: `${blog.title} | Evochem`,
      description: blog.description,
      path: p, type: 'article', image, imageAlt: blog.title,
      jsonLd: [
        breadcrumb([{ name: blog.title, path: p }]),
        {
          '@type': 'BlogPosting',
          headline: blog.title,
          description: blog.description,
          image,
          datePublished: blog.date,
          author: { '@type': 'Organization', name: 'Evochem editorial', url: SITE_URL },
          publisher: { '@id': ORG_ID },
          mainEntityOfPage: SITE_URL + p,
        },
      ],
    };
  }

  const landing = LANDING_PAGES.find(l => l.slug === first && !second);
  if (landing) {
    const p = `/${landing.slug}`;
    return {
      title: landing.title, description: landing.description, path: p,
      image: `${SITE_URL}/${encodeURI(landing.banner)}`, imageAlt: landing.bannerAlt,
      jsonLd: [
        breadcrumb([{ name: landing.h1, path: p }]),
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}${p}#webpage`,
          name: landing.title,
          description: landing.description,
          url: SITE_URL + p,
          about: landing.primaryKeyword,
          publisher: { '@id': ORG_ID },
        },
        {
          '@type': 'FAQPage',
          mainEntity: landing.faqs.map(f => ({
            '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ],
    };
  }

  return HOME;
}
