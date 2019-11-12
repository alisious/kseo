import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCaseComponent } from './reservation-case.component';

describe('ReservationCaseComponent', () => {
  let component: ReservationCaseComponent;
  let fixture: ComponentFixture<ReservationCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
