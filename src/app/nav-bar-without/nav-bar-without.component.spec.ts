import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarWithoutComponent } from './nav-bar-without.component';

describe('NavBarWithoutComponent', () => {
  let component: NavBarWithoutComponent;
  let fixture: ComponentFixture<NavBarWithoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarWithoutComponent]
    });
    fixture = TestBed.createComponent(NavBarWithoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
