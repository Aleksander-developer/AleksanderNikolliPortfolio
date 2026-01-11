import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulenzaDigitaleComponent } from './consulenza-digitale.component';

describe('ConsulenzaDigitaleComponent', () => {
  let component: ConsulenzaDigitaleComponent;
  let fixture: ComponentFixture<ConsulenzaDigitaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsulenzaDigitaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulenzaDigitaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
