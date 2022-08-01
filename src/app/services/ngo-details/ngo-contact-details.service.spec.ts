import { TestBed } from '@angular/core/testing';

import { NgoContactDetailsService } from './ngo-contact-details.service';

describe('NgoContactDetailsService', () => {
  let service: NgoContactDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoContactDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
