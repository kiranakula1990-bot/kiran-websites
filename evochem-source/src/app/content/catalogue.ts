// Product catalogue helpers. evochem-data.json is the URL register for products and product categories:
// every product and group carries a permanent `slug`. Product URLs are /products/<product-slug>/ and
// category URLs are /products/<category-slug>/.
import catalogueData from '../../../public/assets/data/evochem-data.json';

export interface Product {
  id: number;
  code: string;
  slug: string;
  picture: string;
  thumbnail: string;
  title: string;
  details: { description: string; dilution?: string; usage?: string };
}

export interface ProductGroup {
  id: number;
  slug: string;
  name: string;
  description: string;
  picture: string;
  products: Product[];
}

export const GROUPS = catalogueData as ProductGroup[];

/** Menu labels for the product categories (handover section 2.1). */
export const GROUP_LABEL: Record<number, string> = {
  1: 'Industrial Hygiene',
  2: 'Laundry Care',
  3: 'Food Processing Hygiene',
  4: 'Personal Care',
  5: 'Housekeeping',
  6: 'Commercial Kitchen',
};

/** Order of the categories in menus and on /products/. */
export const GROUP_ORDER = [3, 6, 5, 2, 4, 1];

export function orderedGroups(): ProductGroup[] {
  return GROUP_ORDER.map(id => GROUPS.find(g => g.id === id)!);
}

/** Lush Power is listed in two groups; its home category is the one listed last (Personal Care). */
const PRIMARY = new Map<string, { product: Product; group: ProductGroup }>();
for (const group of GROUPS) {
  for (const product of group.products) PRIMARY.set(product.slug, { product, group });
}

export function findProductBySlug(slug: string): { product: Product; group: ProductGroup } | undefined {
  return PRIMARY.get(slug);
}

export function findGroupBySlug(slug: string): ProductGroup | undefined {
  return GROUPS.find(g => g.slug === slug);
}

export const productPath = (slug: string) => `/products/${slug}/`;
export const groupPath = (group: ProductGroup) => `/products/${group.slug}/`;

/** All products once each, in catalogue order. */
export function allProducts(): Product[] {
  const seen = new Set<string>();
  return GROUPS.flatMap(g => g.products).filter(p => !seen.has(p.slug) && !!seen.add(p.slug));
}
