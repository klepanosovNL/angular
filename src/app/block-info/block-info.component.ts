import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component'

@Component({
  selector: 'app-block-info',
  templateUrl: './block-info.component.html',
  styleUrls: ['./block-info.component.less']
})
export class BlockInfoComponent implements OnInit {
  @Input() card: Card
  title = ''
  description = ''
  countNegative = ''
  count = ''
  success = false

  constructor() {
  }

  ngOnInit(): void {
  }
}
