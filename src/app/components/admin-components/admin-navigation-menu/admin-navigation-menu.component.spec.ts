import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavigationMenuComponent } from './admin-navigation-menu.component';

describe('AdminNavigationMenuComponent', () => {
  let component: AdminNavigationMenuComponent;
  let fixture: ComponentFixture<AdminNavigationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNavigationMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
