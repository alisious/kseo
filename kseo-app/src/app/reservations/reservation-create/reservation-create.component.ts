import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-reservation-create',
  template: `
    <h1>Nowa karta EO-1</h1>
    <p>reservation-create works!</p>
    <div class="col col-md-3">
    <a class="nav-link btn btn-success" [routerLink]="['/reservations/list']">Zatwierdź i przejdź do kartoteki<span class="sr-only">(current)</span></a>
    </div>
    <div class="col col-md-3">
    <a class="nav-link btn btn-success" [routerLink]="['/reservations/create']">Zatwierdź i dodaj kolejne<span class="sr-only">(current)</span></a>
    </div>
    <button class="btn btn-danger" 
      data-toggle="tooltip" 
      data-placement="left" 
      title="Anuluj" 
      (click)="goBack()">Anuluj
    </button>
  `,
  styles: []
})
export class ReservationCreateComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
