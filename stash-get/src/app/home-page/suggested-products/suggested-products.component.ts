import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggested-products',
  templateUrl: './suggested-products.component.html',
  styleUrls: ['./suggested-products.component.scss']
})
export class SuggestedProductsComponent implements OnInit {

  featuredProducts = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit(): void {
  }

}
