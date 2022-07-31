import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoDashboardMainComponent } from './ngo-dashboard-main.component';

describe('NgoDashboardMainComponent', () => {
  let component: NgoDashboardMainComponent;
  let fixture: ComponentFixture<NgoDashboardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoDashboardMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
