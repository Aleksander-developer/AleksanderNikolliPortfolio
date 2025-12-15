import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgFacebookComponent } from './svg-facebook.component';

describe('SvgFacebookComponent', () => {
  let component: SvgFacebookComponent;
  let fixture: ComponentFixture<SvgFacebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgFacebookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
