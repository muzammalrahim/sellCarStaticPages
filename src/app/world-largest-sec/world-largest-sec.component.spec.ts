import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldLargestSecComponent } from './world-largest-sec.component';

describe('WorldLargestSecComponent', () => {
  let component: WorldLargestSecComponent;
  let fixture: ComponentFixture<WorldLargestSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldLargestSecComponent]
    });
    fixture = TestBed.createComponent(WorldLargestSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
