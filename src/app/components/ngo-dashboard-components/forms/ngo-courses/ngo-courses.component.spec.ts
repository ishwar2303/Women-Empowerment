import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoCoursesComponent } from './ngo-courses.component';

describe('NgoCoursesComponent', () => {
  let component: NgoCoursesComponent;
  let fixture: ComponentFixture<NgoCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
