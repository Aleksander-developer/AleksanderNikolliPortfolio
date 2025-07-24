import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleVerifiedBadgeComponent } from './google-verified-badge.component';

describe('GoogleVerifiedBadgeComponent', () => {
  let component: GoogleVerifiedBadgeComponent;
  let fixture: ComponentFixture<GoogleVerifiedBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleVerifiedBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleVerifiedBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
