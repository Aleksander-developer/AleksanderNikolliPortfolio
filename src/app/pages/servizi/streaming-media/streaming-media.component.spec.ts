import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingMediaComponent } from './streaming-media.component';

describe('StreamingMediaComponent', () => {
  let component: StreamingMediaComponent;
  let fixture: ComponentFixture<StreamingMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StreamingMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamingMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
