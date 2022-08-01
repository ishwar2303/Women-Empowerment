import { TestBed } from '@angular/core/testing';

import { NgoApplicationService } from './ngo-application.service';

describe('NgoApplicationService', () => {
  let service: NgoApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
