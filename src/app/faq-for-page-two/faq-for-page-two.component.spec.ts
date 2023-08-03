import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqForPageTwoComponent } from './faq-for-page-two.component';

describe('FaqForPageTwoComponent', () => {
  let component: FaqForPageTwoComponent;
  let fixture: ComponentFixture<FaqForPageTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqForPageTwoComponent]
    });
    fixture = TestBed.createComponent(FaqForPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
