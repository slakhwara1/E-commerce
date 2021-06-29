import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductOverlayComponent } from '../product-overlay/product-overlay.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  productUrl = 'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png';
  productId = 3;

  showButton = false;

  @HostListener('mouseenter') mouseOver(evDate: Event) {
    this.showButton = true;
  }

  @HostListener('mouseleave') mouseLeave(evDate: Event) {
    this.showButton = false;
  }

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProductOverlayComponent, {
      minWidth: 800,
      minHeight: 500,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog was closed ${result}`);
    });

  }

}
