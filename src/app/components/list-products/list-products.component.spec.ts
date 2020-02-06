import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProducts } from './list-products.component';

describe('HeroComponent', () => {
  let component: ListProducts;
  let fixture: ComponentFixture<ListProducts>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProducts ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
