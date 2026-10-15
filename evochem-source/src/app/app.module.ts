import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataService } from './services/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrComponentlessModule, ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogsComponent } from './components/blogs/blogs.component';
import { LandingComponent } from './components/landing/landing.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { UrlSerializer } from '@angular/router';
import { TrailingSlashUrlSerializer } from './trailing-slash';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    ContactusComponent,
    BlogsComponent,
    LandingComponent,
    ContentPageComponent,
    IndexPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    //provideClientHydration()
    DataService,
    { provide: UrlSerializer, useClass: TrailingSlashUrlSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
