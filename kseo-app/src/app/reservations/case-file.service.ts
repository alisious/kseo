import { Injectable } from '@angular/core';
import { CaseFile } from './case-file';

@Injectable({
  providedIn: 'root'
})
export class CaseFileService {

caseList: CaseFile[] = [
  {id: 1,
    regNo: 'ZAB-1-2019',
    purpose: 'ZAB',
    orgUnit: 'OŻW Elbląg',
    pesel: '73020916558',
    familyName: 'KORPUSIK',
    firstName: 'JACEK',
    registrationCards: []
    },
    {id: 2,
      regNo: 'ZAB-2-2019',
      purpose: 'ZAB',
      orgUnit: 'OŻW Kraków',
      pesel: '22222222222',
      familyName: 'KOWALSKI',
      firstName: 'JAN',
      registrationCards: [{ id: 1,
        type: 'EO-1',
        regNo: '12/2019',
        regDate: '2019-01-01',
        author: 'Jacek Korpusik'
      },
      { id: 2,
        type: 'EO/A',
        regNo: '14/2019',
        regDate: '2019-01-30',
        author: 'Jan Nowak'
      },
      { id: 3,
        type: 'EO/A',
        regNo: '25/2019',
        regDate: '2019-03-01',
        author: 'Jacek Korpusik'
      }]
    },
      {id: 3,
        regNo: 'ZAB-3-2019',
        purpose: 'ZAB',
        orgUnit: 'OŻW Elbląg',
        pesel: '33333333333',
        familyName: 'NOWAK',
        firstName: 'OLAF',
        registrationCards: [{ id: 5,
          type: 'EO-1',
          regNo: '12/2019',
          regDate: '2019-01-01',
          author: 'Jacek Korpusik'
        },
        { id: 6,
          type: 'EO/A',
          regNo: '14/2019',
          regDate: '2019-01-30',
          author: 'Jan Nowak'
        }]},
        {id: 4,
          regNo: 'ZAB-1-2019',
          purpose: 'ZAB',
          orgUnit: 'OŻW Elbląg',
          pesel: '73020916558',
          familyName: 'KORPUSIK',
          firstName: 'JACEK',
          registrationCards: [{ id: 7,
            type: 'EO-1',
            regNo: '12/2019',
            regDate: '2019-01-01',
            author: 'Jacek Korpusik'
          }]},
          {id: 5,
            regNo: 'ZAB-2-2019',
            purpose: 'ZAB',
            orgUnit: 'OŻW Kraków',
            pesel: '22222222222',
            familyName: 'KOWALSKI',
            firstName: 'JAN',
            registrationCards: [{ id: 8,
              type: 'EO-1',
              regNo: '12/2019',
              regDate: '2019-01-01',
              author: 'Jacek Korpusik'
            }]},
            {id: 6,
              regNo: 'ZAB-3-2019',
              purpose: 'ZAB',
              orgUnit: 'OŻW Elbląg',
              pesel: '33333333333',
              familyName: 'NOWAK',
              firstName: 'OLAF',
              registrationCards: [{ id: 9,
                type: 'EO-1',
                regNo: '12/2019',
                regDate: '2019-01-01',
                author: 'Jacek Korpusik'
              }]}
];

constructor() { }

public getCaseFile(id: number): CaseFile {
return this.caseList[id];
}



}
