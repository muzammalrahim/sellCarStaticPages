import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpSecComponent } from './help-sec.component';

describe('HelpSecComponent', () => {
  let component: HelpSecComponent;
  let fixture: ComponentFixture<HelpSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpSecComponent]
    });
    fixture = TestBed.createComponent(HelpSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
