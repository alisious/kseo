/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CaseFileService } from './case-file.service';

describe('Service: Case', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaseFileService]
    });
  });

  it('should ...', inject([CaseFileService], (service: CaseFileService) => {
    expect(service).toBeTruthy();
  }));
});
