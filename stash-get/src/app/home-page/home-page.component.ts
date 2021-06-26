import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  featuredProdUrl = 'https://i.pinimg.com/originals/c2/69/fe/c269fe456686bb9f0395c97ba2b2968c.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
