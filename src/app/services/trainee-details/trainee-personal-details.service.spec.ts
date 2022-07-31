import { TestBed } from '@angular/core/testing';

import { TraineePersonalDetailsService } from './trainee-personal-details.service';

describe('TraineePersonalDetailsService', () => {
  let service: TraineePersonalDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraineePersonalDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
