import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingTvEuropaComponent } from './sharing-tv-europa.component';

describe('SharingTvEuropaComponent', () => {
  let component: SharingTvEuropaComponent;
  let fixture: ComponentFixture<SharingTvEuropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharingTvEuropaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharingTvEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
