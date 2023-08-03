import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowSecComponent } from './book-now-sec.component';

describe('BookNowSecComponent', () => {
  let component: BookNowSecComponent;
  let fixture: ComponentFixture<BookNowSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookNowSecComponent]
    });
    fixture = TestBed.createComponent(BookNowSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
