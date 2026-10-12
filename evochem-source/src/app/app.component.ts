import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SeoService } from './seo/seo.service';
import { resolveSeo } from './seo/seo-resolver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'evochem';

  constructor(
    private router: Router,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    // Per-page title, description, canonical, Open Graph and JSON-LD.
    // Runs in the browser and during prerendering, so each static page carries its own tags.
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.seo.apply(resolveSeo(e.urlAfterRedirects)));
  }
}
