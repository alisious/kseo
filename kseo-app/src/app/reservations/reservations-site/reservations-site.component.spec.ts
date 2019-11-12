import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsSiteComponent } from './reservations-site.component';

describe('ReservationsSiteComponent', () => {
  let component: ReservationsSiteComponent;
  let fixture: ComponentFixture<ReservationsSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationsSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
