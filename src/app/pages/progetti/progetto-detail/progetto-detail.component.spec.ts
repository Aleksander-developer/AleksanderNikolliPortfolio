import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgettoDetailComponent } from './progetto-detail.component';

describe('ProgettoDetailComponent', () => {
  let component: ProgettoDetailComponent;
  let fixture: ComponentFixture<ProgettoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgettoDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgettoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
