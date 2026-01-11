import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SviluppoAppComponent } from './sviluppo-app.component';

describe('SviluppoAppComponent', () => {
  let component: SviluppoAppComponent;
  let fixture: ComponentFixture<SviluppoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SviluppoAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SviluppoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
