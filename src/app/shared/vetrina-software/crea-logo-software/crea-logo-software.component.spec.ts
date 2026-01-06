import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaLogoSoftwareComponent } from './crea-logo-software.component';

describe('CreaLogoSoftwareComponent', () => {
  let component: CreaLogoSoftwareComponent;
  let fixture: ComponentFixture<CreaLogoSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreaLogoSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaLogoSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
