import { TestBed } from '@angular/core/testing';

import { NgoOrganizationDetailsService } from './ngo-organization-details.service';

describe('NgoOrganizationDetailsService', () => {
  let service: NgoOrganizationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoOrganizationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
