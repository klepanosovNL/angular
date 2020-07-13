import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {
  urlImg = '../../assets/img/slider.jpg'
  alt = 'some description'
  constructor() { }

  ngOnInit(): void {
  }
}
