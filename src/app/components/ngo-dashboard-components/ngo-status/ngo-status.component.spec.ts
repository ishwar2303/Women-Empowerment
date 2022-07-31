import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoStatusComponent } from './ngo-status.component';

describe('NgoStatusComponent', () => {
  let component: NgoStatusComponent;
  let fixture: ComponentFixture<NgoStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
