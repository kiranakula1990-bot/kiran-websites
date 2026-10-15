// Content model for the editorial pages: industries, solutions, product categories, case studies and articles.
// Pages are plain data so they can be prerendered to static HTML. Products are referenced by their permanent
// slug from public/assets/data/evochem-data.json (the URL register), never by code: two products share the code "Flox".
//
// Content rules (handover section 9): no certification claims (NSF, GreenPro, ISO scope), no customer names,
// no kill claims, prices or invented results. Product facts and dilutions come from evochem-data.json.

export type PageKind = 'industry' | 'solution' | 'category' | 'case-study' | 'article' | 'landing';

export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Ordered steps, rendered as a numbered list. */
  steps?: string[];
  /** Product slugs, rendered as linked product cards. */
  products?: string[];
}

export interface ContentFaq { q: string; a: string; }

export interface ContentLink {
  /** Final URL with trailing slash, e.g. "/solutions/cip-cleaning-chemicals/". */
  path: string;
  label: string;
  eyebrow: string;
}

export interface ContentPage {
  kind: PageKind;
  slug: string;
  /** Short name used in menus, cards and breadcrumbs. */
  name: string;
  /** <title>, ideally 50–60 characters, ending in "| Evochem". */
  title: string;
  /** Meta description, 140–158 characters. */
  description: string;
  h1: string;
  tagline: string;
  /** Hero image path under assets/, e.g. "assets/image/dairy.jpg". */
  banner: string;
  bannerAlt: string;
  primaryKeyword: string;
  /** One-line summary for listing cards. */
  summary: string;
  intro: string[];
  sections: ContentSection[];
  faqs: ContentFaq[];
  related: ContentLink[];
  /** Articles and case studies: ISO publication date. */
  date?: string;
  readTime?: number;
  /** Visible note shown above the content (e.g. that a case study is an illustrative programme). */
  note?: string;
}
