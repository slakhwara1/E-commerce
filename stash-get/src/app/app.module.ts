import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsOverviewComponent } from './shared/product/products-overview/products-overview.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './shared/product/product.component';
import { ProductDescriptionComponent } from './shared/product/product-description/product-description.component';
import { ProductCardComponent } from './shared/product/product-card/product-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserOrdersComponent } from './user/user-orders/user-orders.component';
import { UserWishlistComponent } from './user/user-wishlist/user-wishlist.component';
import { ProductCategoryComponent } from './shared/product/product-category/product-category.component';
import { ProductCategoryGroupComponent } from './shared/product/product-category-group/product-category-group.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListGroupComponent } from './shared/list-group/list-group.component';
import { UserProfileDetailComponent } from './user-profile/user-profile-detail/user-profile-detail.component';
import { ProductOverlayComponent } from './shared/product/product-overlay/product-overlay.component';
import { ProductReviewsComponent } from './shared/product/product-reviews/product-reviews.component';
import { ProductFilterComponent } from './shared/product/product-filter/product-filter.component';
import { ProductSearchComponent } from './shared/product/product-search/product-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCommonModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { ProductRatingsComponent } from './shared/product/product-ratings/product-ratings.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { ProductCardGroupComponent } from './shared/product/product-card-group/product-card-group.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsOverviewComponent,
    HeaderComponent,
    ProductComponent,
    ProductDescriptionComponent,
    ProductCategoryComponent,
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
    UserProfileDetailComponent,
    ProductRatingsComponent,
    CheckoutPageComponent,
    PaymentInfoComponent,
    PaymentDetailComponent,
    ProductCardGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressBarModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
