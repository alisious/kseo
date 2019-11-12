import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReservationsSiteComponent} from './reservations-site/reservations-site.component';
import {ReservationDocsComponent} from './reservation-docs/reservation-docs.component';
import {ReservationListComponent} from './reservation-list/reservation-list.component';
import {ReservationDetailsComponent} from './reservation-details/reservation-details.component';
import {ReservationCreateComponent} from './reservation-create/reservation-create.component';
import {ReservationCaseComponent} from './reservation-case/reservation-case.component';
import {ReservationUpdateComponent} from './reservation-update/reservation-update.component';


const routes: Routes = [
  {path: '', redirectTo: 'reservations/docs', pathMatch: 'full'},
  {path: 'reservations',
  component: ReservationsSiteComponent,
  children:[
    {path: 'list', component: ReservationListComponent},
    {path: 'details', component: ReservationDetailsComponent},
    {path: 'docs', component: ReservationDocsComponent},
    {path: 'create', component: ReservationCreateComponent},
    {path: 'case', component: ReservationCaseComponent},
    {path: 'update', component: ReservationUpdateComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
