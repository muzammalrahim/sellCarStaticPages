import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSecComponent } from './slider-sec.component';

describe('SliderSecComponent', () => {
  let component: SliderSecComponent;
  let fixture: ComponentFixture<SliderSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderSecComponent]
    });
    fixture = TestBed.createComponent(SliderSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
