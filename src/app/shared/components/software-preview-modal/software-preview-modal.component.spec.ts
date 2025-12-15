import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwarePreviewModalComponent } from './software-preview-modal.component';

describe('SoftwarePreviewModalComponent', () => {
  let component: SoftwarePreviewModalComponent;
  let fixture: ComponentFixture<SoftwarePreviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwarePreviewModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwarePreviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
