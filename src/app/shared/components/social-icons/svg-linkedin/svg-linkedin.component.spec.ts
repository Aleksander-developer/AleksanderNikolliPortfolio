import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLinkedinComponent } from './svg-linkedin.component';

describe('SvgLinkedinComponent', () => {
  let component: SvgLinkedinComponent;
  let fixture: ComponentFixture<SvgLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgLinkedinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
