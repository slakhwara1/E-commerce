import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCheckout() {
    this.router.navigate(['checkout']);
  }

}
