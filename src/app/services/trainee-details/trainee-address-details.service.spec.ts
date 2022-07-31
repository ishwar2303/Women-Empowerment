import { TestBed } from '@angular/core/testing';

import { TraineeAddressDetailsService } from './trainee-address-details.service';

describe('TraineeAddressDetailsService', () => {
  let service: TraineeAddressDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraineeAddressDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
