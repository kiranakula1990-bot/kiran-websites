import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LANDING_PAGES, LandingPage } from '../../seo/landing-pages';
import { findProduct, formatCode } from '../../seo/seo-resolver';

/**
 * Keyword landing pages (food processing, commercial kitchen, CIP, Bengaluru).
 * Reuses the existing blog article layout and styles so the pages match the current site design.
 */
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['../blogs/blogs.component.scss']
})
export class LandingComponent implements OnInit {

  page!: LandingPage;

  phoneNumber = '917483837722';
  emailAddress = 'info@ennwin.in';

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.page = LANDING_PAGES.find(p => p.slug === data['landing']) || LANDING_PAGES[0];
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }
    });
  }

  product(code: string): any {
    return findProduct(formatCode(code))?.product;
  }

  productLink(code: string): string[] {
    return ['/product', formatCode(code)];
  }

  get whatsappURL(): string {
    const msg = `Hello, I'm interested in Evochem ${this.page?.primaryKeyword}. Can you share details and pricing?`;
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(msg)}`;
  }

  get emailURL(): string {
    const subject = encodeURIComponent(`Enquiry: ${this.page?.h1}`);
    const body = encodeURIComponent(`Hello Evochem team,\n\nI'd like a quote for ${this.page?.primaryKeyword}.\n\nThank you.`);
    return `mailto:${this.emailAddress}?subject=${subject}&body=${body}`;
  }

  get telURL(): string {
    return `tel:+${this.phoneNumber}`;
  }
}
