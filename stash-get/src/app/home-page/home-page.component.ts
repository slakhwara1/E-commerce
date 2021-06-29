import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  featuredProdUrl_1 = 'https://i.pinimg.com/originals/c2/69/fe/c269fe456686bb9f0395c97ba2b2968c.jpg';
  featuredProdUrl_2 = 'https://i.pinimg.com/originals/59/bd/e9/59bde957a1f936ecdd99a0da6d5d3c1c.jpg';
  featuredProdUrl_3 = 'https://believers4ever.com/wp-content/uploads/2019/04/Do-not-worry-Facebook-timeline-cover.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
