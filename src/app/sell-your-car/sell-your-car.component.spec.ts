import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellYourCarComponent } from './sell-your-car.component';

describe('SellYourCarComponent', () => {
  let component: SellYourCarComponent;
  let fixture: ComponentFixture<SellYourCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellYourCarComponent]
    });
    fixture = TestBed.createComponent(SellYourCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
