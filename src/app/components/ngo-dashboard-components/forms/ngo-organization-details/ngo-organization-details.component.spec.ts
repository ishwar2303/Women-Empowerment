import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoOrganizationDetailsComponent } from './ngo-organization-details.component';

describe('NgoOrganizationDetailsComponent', () => {
  let component: NgoOrganizationDetailsComponent;
  let fixture: ComponentFixture<NgoOrganizationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoOrganizationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoOrganizationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
