import { Component, Input, OnInit } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  @Input() categoryName = '';

  constructor() { }

  ngOnInit(): void {
  }

  openCategoryMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }

}
