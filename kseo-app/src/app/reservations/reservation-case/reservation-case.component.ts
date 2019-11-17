import { Component, Input } from '@angular/core';
import { ReservationCase } from '../reservation-case';

@Component({
  selector: 'app-reservation-case',
  template: `
  <div class="card" >
  <div class="card-header" ><i class="fa fa-file"></i> <h3>{{reservationCase?.regNo}}</h3>  </div>
  <div class="card-body">
    <p class="card-text">{{reservationCase?.orgUnit}}</p>
    <div class="d-flex justify-content-between">
      <strong>PESEL: {{reservationCase?.pesel}}</strong>
    </div>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary" 
      data-toggle="tooltip" 
      data-placement="left" 
      title="Dodaj EO/A" 
      routerLink="/reservations/update/{{reservationCase.id}}">Aktualizuj
    </button>
    
    <button class="btn btn-info" 
      data-toggle="tooltip" 
      data-placement="right" 
      title="Otwórz teczkę" 
      routerLink="/reservations/details/{{reservationCase.id}}">Otwórz
    </button>
  </div>
</div>
  `,
  styles: []
})
export class ReservationCaseComponent {

@Input() reservationCase: ReservationCase;
 

  

}
