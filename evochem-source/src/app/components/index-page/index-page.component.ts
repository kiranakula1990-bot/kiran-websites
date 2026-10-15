import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  articleCards, CASE_STUDIES, INDEX_PAGES, IndexKind, IndexPage, INDUSTRIES, pagePath, SOLUTIONS,
} from '../../content/site-content';
import { GROUP_LABEL, groupPath, orderedGroups, ProductGroup, productPath } from '../../content/catalogue';

interface Card { path: string; title: string; text: string; image: string; eyebrow?: string; }

/** Listing pages: /products/, /industries/, /solutions/, /case-studies/ and /resources/ (articles). */
@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['../blogs/blogs.component.scss', '../content-page/content-page.component.scss']
})
export class IndexPageComponent implements OnInit {

  index!: IndexPage;
  cards: Card[] = [];
  groups: ProductGroup[] = [];

  readonly groupLabel = GROUP_LABEL;
  readonly groupPath = groupPath;
  readonly productPath = productPath;

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const kind = data['index'] as IndexKind;
      this.index = INDEX_PAGES[kind];
      this.groups = kind === 'products' ? orderedGroups() : [];
      this.cards = this.cardsFor(kind);
      if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
    });
  }

  private cardsFor(kind: IndexKind): Card[] {
    switch (kind) {
      case 'industries':
        return INDUSTRIES.map(p => ({ path: pagePath(p), title: p.name, text: p.summary, image: p.banner }));
      case 'solutions':
        return SOLUTIONS.map(p => ({ path: pagePath(p), title: p.name, text: p.summary, image: p.banner }));
      case 'case-studies':
        return CASE_STUDIES.map(p => ({ path: pagePath(p), title: p.name, text: p.summary, image: p.banner, eyebrow: 'Case study' }));
      case 'resources':
        return articleCards().map(a => ({ path: a.path, title: a.title, text: a.summary, image: a.image, eyebrow: 'Article' }));
      default:
        return [];
    }
  }
}
