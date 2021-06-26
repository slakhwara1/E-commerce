import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FeaturedProductsComponent } from './home-page/featured-products/featured-products.component';
import { RecentlyViewedComponent } from './home-page/recently-viewed/recently-viewed.component';
import { SuggestedProductsComponent } from './home-page/suggested-products/suggested-products.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './shared/product/product.component';
import { ProductDescriptionComponent } from './shared/product-description/product-description.component';
import { ProductReviewsComponent } from './shared/product-reviews/product-reviews.component';
import { ProductOverlayComponent } from './shared/product-overlay/product-overlay.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { ProductFilterComponent } from './shared/product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FeaturedProductsComponent,
    RecentlyViewedComponent,
    SuggestedProductsComponent,
    HeaderComponent,
    ProductComponent,
    ProductDescriptionComponent,
    ProductReviewsComponent,
    ProductOverlayComponent,
    ProductCardComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
