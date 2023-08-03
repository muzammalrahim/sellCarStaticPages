import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsSecComponent } from './why-us-sec.component';

describe('WhyUsSecComponent', () => {
  let component: WhyUsSecComponent;
  let fixture: ComponentFixture<WhyUsSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyUsSecComponent]
    });
    fixture = TestBed.createComponent(WhyUsSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
