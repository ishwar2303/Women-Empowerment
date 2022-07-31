import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoContactDetailsComponent } from './ngo-contact-details.component';

describe('NgoContactDetailsComponent', () => {
  let component: NgoContactDetailsComponent;
  let fixture: ComponentFixture<NgoContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoContactDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
