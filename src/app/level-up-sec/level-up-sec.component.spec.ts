import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelUpSecComponent } from './level-up-sec.component';

describe('LevelUpSecComponent', () => {
  let component: LevelUpSecComponent;
  let fixture: ComponentFixture<LevelUpSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelUpSecComponent]
    });
    fixture = TestBed.createComponent(LevelUpSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
