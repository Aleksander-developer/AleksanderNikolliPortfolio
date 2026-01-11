import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutenzioneSoftwareComponent } from './manutenzione-software.component';

describe('ManutenzioneSoftwareComponent', () => {
  let component: ManutenzioneSoftwareComponent;
  let fixture: ComponentFixture<ManutenzioneSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManutenzioneSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManutenzioneSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
