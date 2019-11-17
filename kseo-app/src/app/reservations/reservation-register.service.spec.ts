/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReservationRegisterService } from './reservation-register.service';

describe('Service: ReservationRegister', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationRegisterService]
    });
  });

  it('should ...', inject([ReservationRegisterService], (service: ReservationRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
