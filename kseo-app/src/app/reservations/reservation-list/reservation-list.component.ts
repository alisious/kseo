import { Component, OnInit } from '@angular/core';
import {ReservationCase} from '../reservation-case';

@Component({
  selector: 'app-reservation-list',
  template: `
    
  <div class="mt-4 row">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 pd-2" *ngFor="let reservationCase of  reservationList">
    <app-reservation-case [reservationCase]="reservationCase"></app-reservation-case>
   </div>
 </div>
  `,
  styles: []
})
export class ReservationListComponent implements OnInit {

  reservationList: ReservationCase[] = [
    {id: 1,
      regNo: 'ZAB-1-2019',
      purpose: 'ZAB',
      orgUnit: 'OŻW Elbląg',
      pesel: '73020916558',
      familyName: 'KORPUSIK',
      firstName: 'JACEK'},
      {id: 2,
        regNo: 'ZAB-2-2019',
        purpose: 'ZAB',
        orgUnit: 'OŻW Kraków',
        pesel: '22222222222',
        familyName: 'KOWALSKI',
        firstName: 'JAN'},
        {id: 3,
          regNo: 'ZAB-3-2019',
          purpose: 'ZAB',
          orgUnit: 'OŻW Elbląg',
          pesel: '33333333333',
          familyName: 'NOWAK',
          firstName: 'OLAF'},
          {id: 4,
            regNo: 'ZAB-1-2019',
            purpose: 'ZAB',
            orgUnit: 'OŻW Elbląg',
            pesel: '73020916558',
            familyName: 'KORPUSIK',
            firstName: 'JACEK'},
            {id: 5,
              regNo: 'ZAB-2-2019',
              purpose: 'ZAB',
              orgUnit: 'OŻW Kraków',
              pesel: '22222222222',
              familyName: 'KOWALSKI',
              firstName: 'JAN'},
              {id: 6,
                regNo: 'ZAB-3-2019',
                purpose: 'ZAB',
                orgUnit: 'OŻW Elbląg',
                pesel: '33333333333',
                familyName: 'NOWAK',
                firstName: 'OLAF'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
