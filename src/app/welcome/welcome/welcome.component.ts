import { Component } from '@angular/core';

@Component({
  selector: 'sn-welcome',
  templateUrl: './welcome.component.html',
  styles: [
    `
      .container-fluid {
        display: block;
        height: 100%;
      }
    `
  ]
})
export class WelcomeComponent {
  heroItems: HeroItem[] = [
    {
      id: 1,
      icon: 'fa fa-search',
      message: 'Use the W, A, S, D keys to move'
    },
    {
      id: 3,
      icon: 'fa fa-comments',
      message: 'Get all the prime numbers to win!'
    }
  ];
}
