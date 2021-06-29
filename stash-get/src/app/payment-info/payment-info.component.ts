import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDetailComponent } from '../payment-detail/payment-detail.component';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPaymentDialog() {
    this.dialog.open(PaymentDetailComponent, {
      minWidth: 800,
      minHeight: 500,
    });
  }

}
