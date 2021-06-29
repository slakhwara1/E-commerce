import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-overlay',
  templateUrl: './product-overlay.component.html',
  styleUrls: ['./product-overlay.component.scss']
})
export class ProductOverlayComponent implements OnInit {

  @Input() prodImgUrl = 'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png';

  constructor() { }

  ngOnInit(): void {
  }

}
