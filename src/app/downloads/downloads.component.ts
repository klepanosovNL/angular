import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.less']
})
export class DownloadsComponent implements OnInit {
  downloads = ['Introduction/Overview(EN-06.1)', 'PowerMeters (EN-06.2)']

  constructor() { }

  ngOnInit(): void {
  }

}
