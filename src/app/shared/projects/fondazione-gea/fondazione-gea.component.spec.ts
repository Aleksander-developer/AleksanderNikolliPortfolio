import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondazioneGeaComponent } from './fondazione-gea.component';

describe('FondazioneGeaComponent', () => {
  let component: FondazioneGeaComponent;
  let fixture: ComponentFixture<FondazioneGeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FondazioneGeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondazioneGeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
