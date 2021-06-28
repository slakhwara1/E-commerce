import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  productUrl = 'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png';

  showButton = false;

  @HostListener('mouseenter') mouseOver(evDate: Event) {
    this.showButton = true;
  }

  @HostListener('mouseleave') mouseLeave(evDate: Event) {
    this.showButton = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

  showQuickButton() {
    console.log('Something open')
    this.showButton = true;
  }

  hideQuickButton() {
    console.log('Something closed')
    this.showButton = false;
  }

}
