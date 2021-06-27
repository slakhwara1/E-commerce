import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryGroupComponent } from './product-category-group.component';

describe('ProductCategoryGroupComponent', () => {
  let component: ProductCategoryGroupComponent;
  let fixture: ComponentFixture<ProductCategoryGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
