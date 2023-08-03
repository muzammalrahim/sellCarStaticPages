import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOnePageComponent } from './home-one-page.component';

describe('HomeOnePageComponent', () => {
  let component: HomeOnePageComponent;
  let fixture: ComponentFixture<HomeOnePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeOnePageComponent]
    });
    fixture = TestBed.createComponent(HomeOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
