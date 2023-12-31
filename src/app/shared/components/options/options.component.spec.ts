import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsComponent } from './options.component';
import { ProductsService } from 'src/app/service/products.service';

describe('OptionsComponent', () => {
  let component: OptionsComponent;
  let fixture: ComponentFixture<OptionsComponent>;
  let productService: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    productService = TestBed.inject(ProductsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('GIVEN delete', () => {
    it('WHEN is call THEN product service is call', () => {
      spyOn(productService, 'deleteProduct')

      component.delete();

      expect(productService.deleteProduct).toHaveBeenCalled();
    });
  })
});
