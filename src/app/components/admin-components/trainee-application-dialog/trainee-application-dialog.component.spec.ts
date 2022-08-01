import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeApplicationDialogComponent } from './trainee-application-dialog.component';

describe('TraineeApplicationDialogComponent', () => {
  let component: TraineeApplicationDialogComponent;
  let fixture: ComponentFixture<TraineeApplicationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeApplicationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineeApplicationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
