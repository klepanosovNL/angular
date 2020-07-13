import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  count = ['All', 'New', 'Tier 1', 'Tier 2', 'Tier 3']

  constructor() {
  }

  ngOnInit(): void {
  }
}
