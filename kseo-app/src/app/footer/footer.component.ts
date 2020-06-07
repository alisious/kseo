import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="bg-dark text-white mt-4 fixed-bottom">
    <div class="container-fluid py-3">
        <div class="row">
            <div class="col-md-3">
                <h5>Footer</h5></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
        </div>
        <div class="row">
            <div class="col-md-6">I stay at the bottom of the viewport! <span class="small"><br>Unless the page content pushes me further.</span></div>
            <div class="col-md-3"></div>
            <div class="col-md-3 text-right small align-self-end">©2017 Brand, Inc.</div>
        </div>
    </div>
</footer>
  
`,
  styles: []
})
export class FooterComponent implements OnInit {
   
  today = new Date();

  constructor() { }

  ngOnInit() {
  }

}