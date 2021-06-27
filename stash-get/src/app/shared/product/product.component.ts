import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productUrl = 'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png';

  @ViewChild('quickView') quickViewButton: any;
  showButton = false;

  constructor() { }

  ngOnInit(): void {  
  }



}
