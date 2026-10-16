import { Component, AfterViewInit, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';

import { findProductBySlug, findProductInGroup, GROUP_LABEL, groupPath, Product, ProductGroup, productPath } from '../../content/catalogue';
import { productHeading } from '../../content/product-keywords';
import { pagePath, pagesUsingProduct } from '../../content/site-content';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss', '../content-page/content-page.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit {

  selectedProduct: Product | undefined;
  group: ProductGroup | undefined;
  groupLabel = '';
  groupLink = '/products/';
  relatedproducts: Product[] = [];
  /** Industry and solution pages that recommend this product. */
  usedIn: { path: string; name: string; kind: string }[] = [];

  readonly productPath = productPath;

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const category = params.get('categorySlug');
      const productSlug = params.get('productSlug') || '';
      const found = category ? findProductInGroup(category, productSlug) : findProductBySlug(productSlug);
      if (!found) return;
      this.selectedProduct = found.product;
      this.group = found.group;
      this.groupLabel = GROUP_LABEL[found.group.id];
      this.groupLink = groupPath(found.group);
      this.relatedproducts = found.group.products.filter(p => p.slug !== found.product.slug);
      this.usedIn = pagesUsingProduct(found.product.slug).map(p => ({ path: pagePath(p), name: p.name, kind: p.kind }));
      this.buildWhatsAppLink();
      if (isPlatformBrowser(this.platformId)) window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeSwiper();
    }, 100);
  }

  get heading(): string { return this.selectedProduct ? productHeading(this.selectedProduct) : ''; }
  get industries() { return this.usedIn.filter(u => u.kind === 'industry'); }
  get solutions() { return this.usedIn.filter(u => u.kind === 'solution'); }

  initializeSwiper() {
    if (isPlatformBrowser(this.platformId)) {

      register();

      new Swiper(".relatedswiper", {
        autoplay: {
            delay: 1500,
            pauseOnMouseEnter: true,
        },
        grabCursor: true,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            300: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            993: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
            2000: { slidesPerView: 4 },
        },
      });
    }
  }

  phoneNumber: string = '917483837722';
  emailAddress: string = 'info@ennwin.in';
  whatsappURL: string = '';
  emailURL: string = '';
  telURL: string = '';

  buildWhatsAppLink(): void {
    const baseMessage = `Hello Evochem, I'm interested in ${this.selectedProduct?.code} (${this.selectedProduct?.title}). Can you provide more details?`;
    const encodedMessage = encodeURIComponent(baseMessage);
    this.whatsappURL = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;

    const subject = encodeURIComponent(`Enquiry: ${this.selectedProduct?.code} - ${this.selectedProduct?.title}`);
    const body = encodeURIComponent(
      `Hello Evochem team,\n\nI'd like more information about ${this.selectedProduct?.code} (${this.selectedProduct?.title}).\n\nDetails I'd like to know:\n- Pricing and MOQ\n- Available packaging sizes\n- Lead time for delivery\n- MSDS / SDS document\n\nThank you.`
    );
    this.emailURL = `mailto:${this.emailAddress}?subject=${subject}&body=${body}`;
    this.telURL = `tel:+${this.phoneNumber}`;
  }

  /** MSDS / SDS download URL — placeholder route, swap to real PDF when available */
  get msdsURL(): string {
    return this.emailURL; // Until real MSDS PDFs are hosted, route the request through email.
  }

}
