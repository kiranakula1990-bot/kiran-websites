import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

export const SITE_URL = 'https://evochem.co.in';
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/assets/image/og-evochem.jpg`,
  width: '1200',
  height: '630',
  alt: 'Evochem industrial cleaning chemical manufacturer, Bengaluru, India',
};

export interface PageSeo {
  title: string;
  description: string;
  /** Path of the canonical URL, e.g. "/contactus". */
  path: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
  imageAlt?: string;
  /** Page-level schema.org nodes, combined into one @graph. */
  jsonLd?: object[];
}

/**
 * Writes the per-page head tags (title, description, canonical, Open Graph, Twitter, JSON-LD).
 * Works in the browser and during prerendering, so every static HTML file ships with its own tags.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {

  constructor(private titleService: Title, private meta: Meta, @Inject(DOCUMENT) private document: Document) {}

  apply(page: PageSeo): void {
    const url = SITE_URL + page.path;
    const custom = !!page.image;
    const image = page.image || DEFAULT_OG_IMAGE.url;
    const imageAlt = page.imageAlt || DEFAULT_OG_IMAGE.alt;

    this.titleService.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });

    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: page.type === 'article' ? 'article' : 'website' });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:image:alt', content: imageAlt });
    if (custom) {
      this.meta.removeTag("property='og:image:width'");
      this.meta.removeTag("property='og:image:height'");
    } else {
      this.meta.updateTag({ property: 'og:image:width', content: DEFAULT_OG_IMAGE.width });
      this.meta.updateTag({ property: 'og:image:height', content: DEFAULT_OG_IMAGE.height });
    }

    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.meta.updateTag({ name: 'twitter:image:alt', content: imageAlt });

    let link = this.document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);

    this.setJsonLd(page.jsonLd || []);
  }

  private setJsonLd(nodes: object[]): void {
    const existing = this.document.getElementById('page-jsonld');
    if (existing) existing.remove();
    if (!nodes.length) return;
    const script = this.document.createElement('script');
    script.id = 'page-jsonld';
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
    this.document.head.appendChild(script);
  }
}
