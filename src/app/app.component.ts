import { Component } from '@angular/core';
export interface Card {
  title: string
  description: string
  countNegative: string
  count: string
  success: boolean

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  cards: Card[] = [
    {
      title: 'Quarq ShockWiz: An Automated Suspension Tuning Device',
      description: 'Introduction and overview of the Quarq ShockWiz',
      countNegative: '20',
      count: '1',
      success: true
    },
    {
      title: 'Quarq ShockWiz: An Automated Suspen',
      description: 'Introduction and overview of the Quarq ShockWiz',
      countNegative: '52',
      count: '1',
      success: false
    },
    {
      title: 'Quarq ShockWiz: An Automated Suspen',
      description: 'Introduction and overview of the Quarq ShockWiz',
      countNegative: '20',
      count: '1',
      success: false
    },
    {
      title: 'Quarq ShockWiz: An Automated Suspen',
      description: 'Introduction and overview of the Quarq ShockWiz',
      countNegative: '20',
      count: '2',
      success: false
    },
  ]
}
