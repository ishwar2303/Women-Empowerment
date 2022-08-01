import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCourseConfirmationDialogComponent } from './delete-course-confirmation-dialog.component';

describe('DeleteCourseConfirmationDialogComponent', () => {
  let component: DeleteCourseConfirmationDialogComponent;
  let fixture: ComponentFixture<DeleteCourseConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCourseConfirmationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCourseConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
