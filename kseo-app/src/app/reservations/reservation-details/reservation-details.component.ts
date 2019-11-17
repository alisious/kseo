import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CaseFileService } from '../case-file.service';
import { CaseFile } from '../case-file';


@Component({
  selector: 'app-reservation-details',
  template: `
  <h1>Teczka zabezpieczenia osoby: {{id}}</h1>  
  <p>
      reservation-details works!
      
      {{caseFile.familyName}}
      {{caseFile.registrationCards}}|json
    </p>
    <button class="btn btn-primary" 
      data-toggle="tooltip" 
      data-placement="left" 
      title="Dodaj EO/A" 
      routerLink="/reservations/update/{{id}}">Aktualizuj
    </button>

    <div class="mt-4 row">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 pd-2" *ngFor="let registrationCard of  caseFile.registrationCards">
    <a routerLink="/reservations/update-detail/{{id}}">{{registrationCard.type}}</a>
   </div>
 </div>
  `,
  styles: []
})

export class ReservationDetailsComponent implements OnInit {

  id: number;
  caseFile: CaseFile;
  constructor(private route: ActivatedRoute,private caseFileService: CaseFileService) { 
    this.id = +this.route.snapshot.paramMap.get('id');
    this.caseFile = this.caseFileService.getCaseFile(this.id);
  }

  ngOnInit() {
  }

}
