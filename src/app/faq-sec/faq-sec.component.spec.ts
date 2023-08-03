import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSecComponent } from './faq-sec.component';

describe('FaqSecComponent', () => {
  let component: FaqSecComponent;
  let fixture: ComponentFixture<FaqSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqSecComponent]
    });
    fixture = TestBed.createComponent(FaqSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
