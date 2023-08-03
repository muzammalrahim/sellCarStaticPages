import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSecComponent } from './nav-bar-sec.component';

describe('NavBarSecComponent', () => {
  let component: NavBarSecComponent;
  let fixture: ComponentFixture<NavBarSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarSecComponent]
    });
    fixture = TestBed.createComponent(NavBarSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
