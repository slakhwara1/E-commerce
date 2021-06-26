import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

  featuredProducts = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit(): void {
  }

}
