import { Component } from '@angular/core';


@Component({
  selector: 'sn-header',
  template: `
    <nav class="navbar navbar-dark bg-primary justify-content-center">
      <a class="navbar-brand" href="#"
        ><i class="fas fa-users"></i>

        Guess the Prime</a
      >
    </nav>
  `,
  styles: [
    `
      nav a {
        font-size: 3.5rem;
        font-family: 'B612 Mono', strong;
      }
    `
  ]
})
export class HeaderComponent { }

