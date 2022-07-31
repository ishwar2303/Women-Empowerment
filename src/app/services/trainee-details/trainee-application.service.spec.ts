import { TestBed } from '@angular/core/testing';

import { TraineeApplicationService } from './trainee-application.service';

describe('TraineeApplicationService', () => {
  let service: TraineeApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraineeApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
