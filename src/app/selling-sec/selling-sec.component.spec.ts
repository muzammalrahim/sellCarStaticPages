import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingSecComponent } from './selling-sec.component';

describe('SellingSecComponent', () => {
  let component: SellingSecComponent;
  let fixture: ComponentFixture<SellingSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellingSecComponent]
    });
    fixture = TestBed.createComponent(SellingSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
