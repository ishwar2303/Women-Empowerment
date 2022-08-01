import { TestBed } from '@angular/core/testing';

import { AdminNgosService } from './admin-ngos.service';

describe('AdminNgosService', () => {
  let service: AdminNgosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminNgosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
