import { TestBed } from '@angular/core/testing';

import { ProfessorFirestoreService } from './professor-firestore.service';

describe('ProfessorFirestoreService', () => {
  let service: ProfessorFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessorFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
