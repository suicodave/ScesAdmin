import { TestBed, inject } from '@angular/core/testing';

import { SchoolYearService } from './school-year.service';

describe('SchoolYearService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolYearService]
    });
  });

  it('should be created', inject([SchoolYearService], (service: SchoolYearService) => {
    expect(service).toBeTruthy();
  }));
});
