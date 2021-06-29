import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card-group',
  templateUrl: './product-card-group.component.html',
  styleUrls: ['./product-card-group.component.scss']
})
export class ProductCardGroupComponent implements OnInit {

  @Input() productsList = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit(): void {
  }

}
