import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  productUrl = 'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png';

  @ViewChild('quickView') quickViewButton: any;
  showButton = false;

  constructor() { }

  ngOnInit(): void {
  }

}
