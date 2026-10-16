import { ContentPage } from '../content/content-model';
import { categoryProductPath, findGroupBySlug, findProductBySlug, findProductInGroup, GROUP_LABEL, groupPath, productPath } from '../content/catalogue';
import { findPage, INDEX_PAGES, IndexKind, LEGACY_ARTICLES, pagePath } from '../content/site-content';
import { productHeading } from '../content/product-keywords';
import { LANDING_PAGES } from './landing-pages';
import { PageSeo, SITE_URL } from './seo.service';

const ORG_ID = `${SITE_URL}/#organization`;

const HOME: PageSeo = {
  title: 'Industrial Cleaning Chemicals Manufacturer in India | Evochem',
  description: 'Industrial cleaning chemicals manufacturer in India and hygiene chemical manufacturer in Bengaluru: Evochem supplies food plants, kitchens and hotels in bulk.',
  path: '/',
};

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
  const [, first = '', second = '', third = ''] = path.split('/');

  if (path === '/') return HOME;

  if (first === 'contactus' && !second) {
    return {
      title: 'Contact Evochem | Bulk Cleaning Chemicals Supplier India',
      description: 'Contact Evochem, a bulk cleaning chemicals supplier in India, for industrial and hygiene chemical quotes, samples and technical support.',
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
    const group = !third && findGroupBySlug(second);
    const category = group && findPage('category', group.slug);
    if (category) return contentSeo(category);

    // /products/<product>/ or /products/<category>/<product>/ (self-canonical, so both URLs can be indexed)
    const found = third ? findProductInGroup(second, third) : findProductBySlug(second);
    if (found) {
      const { product, group: g } = found;
      const p = third ? categoryProductPath(g, product.slug) : productPath(product.slug);
      const name = `${product.title} – ${product.code}`;
      const heading = productHeading(product);
      const full = `${heading} – ${product.code} | Evochem`;
      const title = full.length <= 62 ? full : `${heading} | Evochem`;
      const image = `${SITE_URL}/${product.picture}`;
      return {
        title,
        description: clip(`${product.code} ${heading} from Evochem, manufacturer in Bengaluru: ${product.details.description}`),
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
