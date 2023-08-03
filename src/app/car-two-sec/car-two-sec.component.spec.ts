import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTwoSecComponent } from './car-two-sec.component';

describe('CarTwoSecComponent', () => {
  let component: CarTwoSecComponent;
  let fixture: ComponentFixture<CarTwoSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarTwoSecComponent]
    });
    fixture = TestBed.createComponent(CarTwoSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
