import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitaCreaComponent } from './universita-crea.component';

describe('UniversitaCreaComponent', () => {
  let component: UniversitaCreaComponent;
  let fixture: ComponentFixture<UniversitaCreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversitaCreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitaCreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
