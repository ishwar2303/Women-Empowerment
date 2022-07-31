import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoNavigationMenuComponent } from './ngo-navigation-menu.component';

describe('NgoNavigationMenuComponent', () => {
  let component: NgoNavigationMenuComponent;
  let fixture: ComponentFixture<NgoNavigationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoNavigationMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
