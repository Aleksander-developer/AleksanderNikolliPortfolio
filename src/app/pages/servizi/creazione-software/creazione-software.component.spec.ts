import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreazioneSoftwareComponent } from './creazione-software.component';

describe('CreazioneSoftwareComponent', () => {
  let component: CreazioneSoftwareComponent;
  let fixture: ComponentFixture<CreazioneSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreazioneSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreazioneSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
