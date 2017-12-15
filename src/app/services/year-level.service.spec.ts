import { TestBed, inject } from '@angular/core/testing';

import { YearLevelService } from './year-level.service';

describe('YearLevelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YearLevelService]
    });
  });

  it('should be created', inject([YearLevelService], (service: YearLevelService) => {
    expect(service).toBeTruthy();
  }));
});
