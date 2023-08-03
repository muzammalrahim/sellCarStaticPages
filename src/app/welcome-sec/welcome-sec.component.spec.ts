import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSecComponent } from './welcome-sec.component';

describe('WelcomeSecComponent', () => {
  let component: WelcomeSecComponent;
  let fixture: ComponentFixture<WelcomeSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeSecComponent]
    });
    fixture = TestBed.createComponent(WelcomeSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
