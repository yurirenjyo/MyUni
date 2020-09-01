import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSuppliesComponent } from './book-supplies.component';

describe('BookSuppliesComponent', () => {
  let component: BookSuppliesComponent;
  let fixture: ComponentFixture<BookSuppliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSuppliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
