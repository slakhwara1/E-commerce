import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './shared/product/product.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'orders',
    component: UserOrdersComponent
  },
  {
    path: 'product',
    children: [
      { path: '', component: HomePageComponent },
      { path: ':id', component: ProductComponent }
    ]
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
