import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {

  featuredProducts = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit(): void {
  }

}
