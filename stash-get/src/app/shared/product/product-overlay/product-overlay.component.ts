import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-overlay',
  templateUrl: './product-overlay.component.html',
  styleUrls: ['./product-overlay.component.scss']
})
export class ProductOverlayComponent implements OnInit {

  @Input() prodImgUrl = 'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png';

  constructor(
    private router: Router,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {

  }

  goToProductDetails() {
    this.dialog.closeAll();

    setTimeout(() => {
      this.router.navigate(['product' , 9])
    },1000);
  }

}
