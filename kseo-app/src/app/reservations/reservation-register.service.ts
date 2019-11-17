import { Injectable } from '@angular/core';
import { ReservationCase } from './reservation-case';

@Injectable({
  providedIn: 'root'
})
export class ReservationRegisterService {

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

public getReservationList(): ReservationCase[] {
return this.reservationList;
}

}
