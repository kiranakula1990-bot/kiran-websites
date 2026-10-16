import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { LandingComponent } from './components/landing/landing.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { GROUPS } from './content/catalogue';
import { LEGACY_ARTICLES } from './content/site-content';

// URL structure (handover section 2.2). Every public URL ends with a slash (see trailing-slash.ts).
// Old URLs (/product/..., /categories/..., /solutions/BathroomCleaning, /blogs/..., the old landing pages)
// are 301-redirected to these by the Cloudflare worker using public/redirects.json.
// Head tags for every route come from seo/seo-resolver.ts.
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: 'products', component: IndexPageComponent, data: { index: 'products' } },
  // Category slugs are listed before the product route because both live under /products/.
  ...GROUPS.map(g => ({ path: `products/${g.slug}`, component: ContentPageComponent, data: { kind: 'category', slug: g.slug } })),
  { path: 'products/:categorySlug/:productSlug', component: ProductComponent },
  { path: 'products/:productSlug', component: ProductComponent },

  { path: 'industries', component: IndexPageComponent, data: { index: 'industries' } },
  { path: 'industries/:slug', component: ContentPageComponent, data: { kind: 'industry' } },

  { path: 'solutions', component: IndexPageComponent, data: { index: 'solutions' } },
  { path: 'solutions/:slug', component: ContentPageComponent, data: { kind: 'solution' } },

  { path: 'case-studies', component: IndexPageComponent, data: { index: 'case-studies' } },
  { path: 'case-studies/:slug', component: ContentPageComponent, data: { kind: 'case-study' } },

  { path: 'resources', component: IndexPageComponent, data: { index: 'resources' } },
  ...LEGACY_ARTICLES.map(a => ({ path: `resources/${a.slug}`, component: BlogsComponent, data: { blog: a.type } })),
  { path: 'resources/:slug', component: ContentPageComponent, data: { kind: 'article' } },

  { path: 'contactus', component: ContactusComponent },
  { path: 'cleaning-chemicals-manufacturer-bangalore', component: LandingComponent, data: { landing: 'cleaning-chemicals-manufacturer-bangalore' } },
  { path: '**', redirectTo: '' } // unknown URLs are answered with 404 by the worker
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
