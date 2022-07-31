import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgosFaqComponent } from './ngos-faq.component';

describe('NgosFaqComponent', () => {
  let component: NgosFaqComponent;
  let fixture: ComponentFixture<NgosFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgosFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgosFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
