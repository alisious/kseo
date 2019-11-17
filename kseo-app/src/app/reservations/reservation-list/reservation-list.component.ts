import { Component, OnInit } from '@angular/core';
import {ReservationCase} from '../reservation-case';
import {ReservationRegisterService } from '../reservation-register.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styles: []
})
export class ReservationListComponent implements OnInit {

  reservationList: ReservationCase[];
  constructor(private reservationRegisterService: ReservationRegisterService) {
    this.getResevationCaseList();
  }

  ngOnInit() {
    this.getResevationCaseList();
  }

  getResevationCaseList(): void {
    this.reservationList = this.reservationRegisterService.getReservationList();
  }


}
