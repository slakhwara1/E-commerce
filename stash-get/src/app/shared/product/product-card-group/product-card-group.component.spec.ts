import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardGroupComponent } from './product-card-group.component';

describe('ProductCardGroupComponent', () => {
  let component: ProductCardGroupComponent;
  let fixture: ComponentFixture<ProductCardGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
