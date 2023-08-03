import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsSecComponent } from './reviews-sec.component';

describe('ReviewsSecComponent', () => {
  let component: ReviewsSecComponent;
  let fixture: ComponentFixture<ReviewsSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsSecComponent]
    });
    fixture = TestBed.createComponent(ReviewsSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
