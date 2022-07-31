import { TestBed } from '@angular/core/testing';

import { TraineeFamilyDetailsService } from './trainee-family-details.service';

describe('TraineeFamilyDetailsService', () => {
  let service: TraineeFamilyDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraineeFamilyDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
