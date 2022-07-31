import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNgosComponent } from './admin-ngos.component';

describe('AdminNgosComponent', () => {
  let component: AdminNgosComponent;
  let fixture: ComponentFixture<AdminNgosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNgosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
