import { ContentPage } from '../content/content-model';
import { findGroupBySlug, findProductBySlug, GROUP_LABEL, groupPath, productPath } from '../content/catalogue';
import { findPage, INDEX_PAGES, IndexKind, LEGACY_ARTICLES, pagePath } from '../content/site-content';
import { LANDING_PAGES } from './landing-pages';
import { PageSeo, SITE_URL } from './seo.service';

const ORG_ID = `${SITE_URL}/#organization`;

const HOME: PageSeo = {
  title: 'Industrial Cleaning Chemical Manufacturer India | Evochem',
  description: 'Evochem — trusted manufacturer of industrial & hygiene cleaning chemicals in India. ISO-compliant, bulk supply, pan-India delivery. Get a free quote today.',
  path: '/',
};

/** Keyword-led title prefixes for priority products (October 2026 keyword list), keyed by product code as "blaze-auto". */
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

function formatCode(code: string): string {
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

function faqPage(faqs: { q: string; a: string }[]): object[] {
  return faqs.length ? [{
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }] : [];
}

/** Strips query, fragment and Angular matrix params (";solution=2"), decodes the path and drops trailing slashes. */
export function normalizePath(url: string): string {
  let path = url.split('?')[0].split('#')[0];
  path = path.split('/').map(seg => seg.split(';')[0]).join('/');
  try { path = decodeURIComponent(path); } catch { /* keep raw */ }
  if (path.length > 1) path = path.replace(/\/+$/, '');
  return path || '/';
}

/** First URL segment → listing page, and → kind of the pages below it. */
const INDEX_BY_BASE: Record<string, IndexKind> = {
  products: 'products', industries: 'industries', solutions: 'solutions', 'case-studies': 'case-studies', resources: 'resources',
};
const INDEX_BY_KIND: Record<string, IndexKind> = {
  industry: 'industries', solution: 'solutions', category: 'products', 'case-study': 'case-studies', article: 'resources',
};
const KIND_BY_BASE: Record<string, ContentPage['kind']> = {
  industries: 'industry', solutions: 'solution', 'case-studies': 'case-study', resources: 'article',
};

function contentSeo(page: ContentPage): PageSeo {
  const p = pagePath(page);
  const index = INDEX_PAGES[INDEX_BY_KIND[page.kind]];
  const image = `${SITE_URL}/${encodeURI(page.banner)}`;
  const article = page.kind === 'article' || page.kind === 'case-study';
  const main: object = article ? {
    '@type': 'Article',
    '@id': `${SITE_URL}${p}#article`,
    headline: page.h1,
    description: page.description,
    image,
    datePublished: page.date,
    author: { '@type': 'Organization', name: 'Evochem', url: SITE_URL },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: SITE_URL + p,
  } : {
    '@type': page.kind === 'category' ? 'CollectionPage' : 'WebPage',
    '@id': `${SITE_URL}${p}#webpage`,
    name: page.title,
    description: page.description,
    url: SITE_URL + p,
    about: page.primaryKeyword,
    publisher: { '@id': ORG_ID },
  };
  return {
    title: page.title, description: page.description, path: p,
    type: article ? 'article' : 'website', image, imageAlt: page.bannerAlt,
    jsonLd: [breadcrumb([{ name: index.name, path: index.path }, { name: page.name, path: p }]), main, ...faqPage(page.faqs)],
  };
}

export function resolveSeo(url: string): PageSeo {
  const path = normalizePath(url);
  const [, first = '', second = ''] = path.split('/');

  if (path === '/') return HOME;

  if (first === 'contactus' && !second) {
    return {
      title: 'Contact Evochem | Cleaning Chemical Manufacturer India',
      description: 'Contact Evochem for bulk industrial and hygiene cleaning chemical supply across India. Get a free quote — fast response from our team.',
      path: '/contactus/',
      jsonLd: [breadcrumb([{ name: 'Contact us', path: '/contactus/' }])],
    };
  }

  // Listing pages: /products/, /industries/, /solutions/, /case-studies/, /resources/
  if (INDEX_BY_BASE[first] && !second) {
    const index = INDEX_PAGES[INDEX_BY_BASE[first]];
    return {
      title: index.title, description: index.description, path: index.path,
      jsonLd: [breadcrumb([{ name: index.name, path: index.path }]), {
        '@type': 'CollectionPage', '@id': `${SITE_URL}${index.path}#webpage`, name: index.title,
        description: index.description, url: SITE_URL + index.path, publisher: { '@id': ORG_ID },
      }],
    };
  }

  if (first === 'products' && second) {
    const group = findGroupBySlug(second);
    const category = group && findPage('category', group.slug);
    if (category) return contentSeo(category);

    const found = findProductBySlug(second);
    if (found) {
      const { product, group: g } = found;
      const p = productPath(product.slug);
      const name = `${product.title} – ${product.code}`;
      const prefix = PRODUCT_TITLE[formatCode(product.code)];
      const title = prefix ? `${prefix} – ${product.code} | Evochem` : `${name} | Evochem`;
      const image = `${SITE_URL}/${product.picture}`;
      return {
        title,
        description: clip(`${product.code} ${product.title.toLowerCase()} by Evochem: ${product.details.description}`),
        path: p, type: 'product', image, imageAlt: `${product.title} (${product.code})`,
        jsonLd: [
          breadcrumb([
            { name: 'Products', path: '/products/' },
            { name: GROUP_LABEL[g.id], path: groupPath(g) },
            { name: product.title, path: p },
          ]),
          {
            '@type': 'Product',
            '@id': `${SITE_URL}${p}#product`,
            name,
            sku: product.code,
            description: product.details.description,
            image,
            category: GROUP_LABEL[g.id],
            brand: { '@type': 'Brand', name: 'Evochem' },
            manufacturer: { '@id': ORG_ID },
            url: SITE_URL + p,
          },
        ],
      };
    }
  }

  if (first === 'resources' && second) {
    const blog = LEGACY_ARTICLES.find(a => a.slug === second);
    if (blog) {
      const p = `/resources/${blog.slug}/`;
      const image = `${SITE_URL}/${blog.image}`;
      return {
        title: `${blog.title} | Evochem`,
        description: blog.description,
        path: p, type: 'article', image, imageAlt: blog.title,
        jsonLd: [
          breadcrumb([{ name: INDEX_PAGES.resources.name, path: INDEX_PAGES.resources.path }, { name: blog.title, path: p }]),
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
  }

  if (KIND_BY_BASE[first] && second) {
    const page = findPage(KIND_BY_BASE[first], second);
    if (page) return contentSeo(page);
  }

  const landing = LANDING_PAGES.find(l => l.slug === first && !second);
  if (landing) {
    const p = `/${landing.slug}/`;
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
        ...faqPage(landing.faqs),
      ],
    };
  }

  return HOME;
}
