import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ContentPage, PageKind } from '../../content/content-model';
import { findPage, INDEX_PAGES, pagePath } from '../../content/site-content';
import { findGroupBySlug, findProductBySlug, Product, productPath } from '../../content/catalogue';

/** Parent crumb for each page kind. */
const PARENT: Record<string, { name: string; path: string }> = {
  industry: { name: INDEX_PAGES.industries.name, path: INDEX_PAGES.industries.path },
  solution: { name: INDEX_PAGES.solutions.name, path: INDEX_PAGES.solutions.path },
  category: { name: INDEX_PAGES.products.name, path: INDEX_PAGES.products.path },
  'case-study': { name: INDEX_PAGES['case-studies'].name, path: INDEX_PAGES['case-studies'].path },
  article: { name: INDEX_PAGES.resources.name, path: INDEX_PAGES.resources.path },
};

/**
 * Industry, solution, product category, case study and article pages.
 * Everything is rendered from data (content/*.ts) so each page prerenders with its full text and links.
 */
@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['../blogs/blogs.component.scss', './content-page.component.scss']
})
export class ContentPageComponent implements OnInit {

  page!: ContentPage;
  path = '/';
  parent?: { name: string; path: string };
  /** Category pages: every product in the category. */
  categoryProducts: Product[] = [];

  phoneNumber = '917483837722';
  emailAddress = 'info@ennwin.in';

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const data = this.route.snapshot.data;
      const kind = data['kind'] as PageKind;
      const slug = data['slug'] || params.get('slug') || '';
      const page = findPage(kind, slug);
      if (!page) return;
      this.page = page;
      this.path = pagePath(page);
      this.parent = PARENT[kind];
      this.categoryProducts = kind === 'category' ? (findGroupBySlug(slug)?.products || []) : [];
      if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
    });
  }

  product(slug: string): Product | undefined {
    return findProductBySlug(slug)?.product;
  }

  productLink(slug: string): string {
    return productPath(slug);
  }

  get isArticle(): boolean {
    return this.page?.kind === 'article' || this.page?.kind === 'case-study';
  }

  get dateFormatted(): string {
    if (!this.page?.date) return '';
    const d = new Date(this.page.date + 'T00:00:00Z');
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
  }

  get whatsappURL(): string {
    const msg = `Hello Evochem, I am interested in ${this.page?.primaryKeyword}. Can you share details and pricing?`;
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(msg)}`;
  }

  get emailURL(): string {
    const subject = encodeURIComponent(`Enquiry: ${this.page?.h1}`);
    const body = encodeURIComponent(`Hello Evochem team,\n\nI'd like a recommendation and quote for ${this.page?.primaryKeyword}.\n\nThank you.`);
    return `mailto:${this.emailAddress}?subject=${subject}&body=${body}`;
  }

  get telURL(): string {
    return `tel:+${this.phoneNumber}`;
  }
}
