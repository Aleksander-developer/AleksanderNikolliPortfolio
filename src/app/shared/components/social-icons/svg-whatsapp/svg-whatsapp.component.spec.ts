import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgWhatsappComponent } from './svg-whatsapp.component';

describe('SvgWhatsappComponent', () => {
  let component: SvgWhatsappComponent;
  let fixture: ComponentFixture<SvgWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgWhatsappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
