import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.less']
})
export class HeaderMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  items = [
    {
      itemName: 'news',
      icon: false,
    },
    {
      itemName: 'rewards',
      icon: false,
    },
    {
      itemName: 'profile',
      icon: true,
    }
  ]
}
