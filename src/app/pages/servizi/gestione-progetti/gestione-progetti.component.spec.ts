import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneProgettiComponent } from './gestione-progetti.component';

describe('GestioneProgettiComponent', () => {
  let component: GestioneProgettiComponent;
  let fixture: ComponentFixture<GestioneProgettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestioneProgettiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneProgettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
