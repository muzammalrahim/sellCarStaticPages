import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyOnlineComponent } from './buy-online.component';

describe('BuyOnlineComponent', () => {
  let component: BuyOnlineComponent;
  let fixture: ComponentFixture<BuyOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyOnlineComponent]
    });
    fixture = TestBed.createComponent(BuyOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
