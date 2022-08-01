import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoApplicationDialogComponent } from './ngo-application-dialog.component';

describe('NgoApplicationDialogComponent', () => {
  let component: NgoApplicationDialogComponent;
  let fixture: ComponentFixture<NgoApplicationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoApplicationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoApplicationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
