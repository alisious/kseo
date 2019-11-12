import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsSiteComponent } from './reservations-site/reservations-site.component';
import { ReservationDocsComponent } from './reservation-docs/reservation-docs.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationCreateComponent } from './reservation-create/reservation-create.component';
import { ReservationCaseComponent } from './reservation-case/reservation-case.component';
import { ReservationUpdateComponent } from './reservation-update/reservation-update.component';

@NgModule({
  declarations: [
    ReservationsSiteComponent,
    ReservationDocsComponent,
    ReservationListComponent,
    ReservationDetailsComponent,
    ReservationCreateComponent,
    ReservationCaseComponent,
    ReservationUpdateComponent],
  imports: [
    CommonModule,
    ReservationsRoutingModule


  ]
})
export class ReservationsModule { }
