import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDocsComponent } from './reservation-docs.component';

describe('ReservationDocsComponent', () => {
  let component: ReservationDocsComponent;
  let fixture: ComponentFixture<ReservationDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
