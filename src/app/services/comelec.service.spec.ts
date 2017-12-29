import { TestBed, inject } from '@angular/core/testing';

import { ComelecService } from './comelec.service';

describe('ComelecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComelecService]
    });
  });

  it('should be created', inject([ComelecService], (service: ComelecService) => {
    expect(service).toBeTruthy();
  }));
});
