import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTwoPageComponent } from './home-two-page.component';

describe('HomeTwoPageComponent', () => {
  let component: HomeTwoPageComponent;
  let fixture: ComponentFixture<HomeTwoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTwoPageComponent]
    });
    fixture = TestBed.createComponent(HomeTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
