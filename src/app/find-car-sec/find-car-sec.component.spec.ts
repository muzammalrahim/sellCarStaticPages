import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCarSecComponent } from './find-car-sec.component';

describe('FindCarSecComponent', () => {
  let component: FindCarSecComponent;
  let fixture: ComponentFixture<FindCarSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindCarSecComponent]
    });
    fixture = TestBed.createComponent(FindCarSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
