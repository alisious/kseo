import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="jumbotron">
    <h1>KSEO 2.0</h1>
    <h3>{{title}}</h3>
    </header>

  `,
  styles: [
    `
          header {
          background: url("./assets/14test-banner.jpg");
      }
      h1,h3 {
          color: white;
      }
    `
  ]
})
export class HeaderComponent implements OnInit {

  title = 'Komputerowy System Ewidencji Operacyjnej';
  
  constructor() { }

  ngOnInit() {
  }

}
