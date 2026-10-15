import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { GROUP_LABEL, groupPath, orderedGroups } from '../../content/catalogue';
import { INDUSTRIES, pagePath, SOLUTIONS } from '../../content/site-content';

interface MenuLink { label: string; path: string; }
interface Menu { key: string; label: string; path: string; allLabel: string; links: MenuLink[]; }

/**
 * Main navigation (handover section 2.1): Products, Industries, Solutions, Case studies, Articles, About, Contact.
 * Every menu link is a real <a href> that is present in the prerendered HTML, so search engines can follow it;
 * the dropdowns only show and hide them.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  menus: Menu[] = [
    {
      key: 'products', label: 'Products', path: '/products/', allLabel: 'All products',
      links: orderedGroups().map(g => ({ label: GROUP_LABEL[g.id], path: groupPath(g) })),
    },
    {
      key: 'industries', label: 'Industries', path: '/industries/', allLabel: 'All industries',
      links: INDUSTRIES.map(p => ({ label: p.name, path: pagePath(p) })),
    },
    {
      key: 'solutions', label: 'Solutions', path: '/solutions/', allLabel: 'All solutions',
      links: SOLUTIONS.map(p => ({ label: p.name, path: pagePath(p) })),
    },
  ];

  /** Key of the dropdown opened by click or keyboard (hover opens them with CSS). */
  openMenu: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.openMenu = null;
        // Scroll to the fragment (/#aboutus) after navigation.
        const fragment = this.route.snapshot.fragment;
        if (fragment && typeof document !== 'undefined') {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              this.renderer.setProperty(window, 'scrollTop', element.offsetTop);
            }
          }, 100);
        }
      });
  }

  toggle(key: string): void {
    this.openMenu = this.openMenu === key ? null : key;
  }

  close(): void {
    this.openMenu = null;
  }
}
