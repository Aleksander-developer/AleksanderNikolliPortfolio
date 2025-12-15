import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgInstagramComponent } from './svg-instagram.component';

describe('SvgInstagramComponent', () => {
  let component: SvgInstagramComponent;
  let fixture: ComponentFixture<SvgInstagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgInstagramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
