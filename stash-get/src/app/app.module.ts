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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserWishlistComponent } from './user-wishlist/user-wishlist.component';
import { ProductCategoryComponent } from './shared/product-category/product-category.component';
import { ProductCategoryGroupComponent } from './shared/product-category-group/product-category-group.component';
import { ProductSearchComponent } from './shared/product-search/product-search.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListGroupComponent } from './shared/list-group/list-group.component';
import { UserProfileDetailComponent } from './user-profile/user-profile-detail/user-profile-detail.component';

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
    ProductFilterComponent,
    UserProfileComponent,
    UserOrdersComponent,
    UserWishlistComponent,
    ProductCategoryComponent,
    ProductCategoryGroupComponent,
    ProductSearchComponent,
    ListGroupComponent,
    UserProfileDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
