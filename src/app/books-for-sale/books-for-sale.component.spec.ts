import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksForSaleComponent } from './books-for-sale.component';

describe('BooksForSaleComponent', () => {
  let component: BooksForSaleComponent;
  let fixture: ComponentFixture<BooksForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksForSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
