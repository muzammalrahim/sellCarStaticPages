import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyOurCarSecComponent } from './why-our-car-sec.component';

describe('WhyOurCarSecComponent', () => {
  let component: WhyOurCarSecComponent;
  let fixture: ComponentFixture<WhyOurCarSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyOurCarSecComponent]
    });
    fixture = TestBed.createComponent(WhyOurCarSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
