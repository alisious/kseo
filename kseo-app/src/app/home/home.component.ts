import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-header></app-header>
  <div class="card-deck container-fluid flex-grow-1">
  <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
     <div class="card-body">
      <h5 class="card-title">Zabezpieczenia</h5>
      <p class="card-text">Kartoteka zabezbieczeń.</p>
       <a class="btn btn-info" href="reservations">Kartoteka</a>
       <a class="btn btn-success" href="reservations/create">Nowe</a>
    </div>
    
  </div>
  <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-body">
      <h5 class="card-title">Współpracownicy</h5>
      <p class="card-text">Kartoteka współpracowników i figurantów.</p>
      <a href="#" class="stretched-link"></a>
    </div>
  
  </div>
  <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Procedury</h5>
      <p class="card-text">Kartoteka procedur operacyjnych i sygnałów.</p>
      <a href="#" class="stretched-link"></a>
    </div>
   
  </div>
  <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Obiekty</h5>
      <p class="card-text">Kartoteka obiektów.</p>
      <a href="#" class="stretched-link"></a>
    </div>
   
  </div>
</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
