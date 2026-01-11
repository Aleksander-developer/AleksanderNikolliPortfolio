import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoContenutiComponent } from './seo-contenuti.component';

describe('SeoContenutiComponent', () => {
  let component: SeoContenutiComponent;
  let fixture: ComponentFixture<SeoContenutiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeoContenutiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoContenutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
