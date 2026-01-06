import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzzurraMakeupComponent } from './azzurra-makeup.component';

describe('AzzurraMakeupComponent', () => {
  let component: AzzurraMakeupComponent;
  let fixture: ComponentFixture<AzzurraMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AzzurraMakeupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzzurraMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
