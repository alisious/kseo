import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-reservation-update',
  template: `
  <h1>Nowa kartka EO/A w teczce zabezpieczenia id = {{id}} </h1>  
  <p>
      reservation-update works!
    </p>

    <button class="btn btn-primary" 
      data-toggle="tooltip" 
      data-placement="left" 
      title="Zatwierdź" 
      routerLink="/reservations/update/{{id}}">Zatwierdź
    </button>
    <button class="btn btn-danger" 
      data-toggle="tooltip" 
      data-placement="left" 
      title="Anuluj" 
      (click)="goBack()">Anuluj
    </button>
  `,
  styles: []
})

export class ReservationUpdateComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute,
              private location: Location) { 
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
