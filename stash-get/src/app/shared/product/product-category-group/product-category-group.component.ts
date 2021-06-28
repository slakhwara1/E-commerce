import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category-group',
  templateUrl: './product-category-group.component.html',
  styleUrls: ['./product-category-group.component.scss']
})
export class ProductCategoryGroupComponent implements OnInit {

  productCategories = ['All','Computers','Electornics','Mobiles','Books'];

  constructor() { }

  ngOnInit(): void {
  }

}