import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormComponent } from './product-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsService } from 'src/app/service/products.service';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  let productService: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFormComponent],
      imports: [ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductFormComponent);
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

  describe('GIVEN add', () => {
    it('WHEN is call THEN product service is call', () => {
      spyOn(productService, 'addProduct')
      spyOn(productService, 'deleteProduct')

      component.add();

      expect(productService.addProduct).toHaveBeenCalled();
      expect(productService.deleteProduct).toHaveBeenCalled();
    });
  })

  describe('GIVEN setForm', () => {
    it('WHEN is call THEN product is set', () => {
      component.idParam = '2';
      let products = [
        {
          id: "1",
          logo: "PR",
          name: "prueba 1",
          description: "descripcion 1",
          releaseDate: "02/01/2023",
          reviewDate: "30/12/2023"
        },
        {
          id: "2",
          logo: "NO",
          name: "nombre 2",
          description: "descr",
          releaseDate: "03/10/2023",
          reviewDate: "29/12/2023"
        },
        {
          id: "3",
          logo: "producto 3",
          name: "producto 3",
          description: "descr",
          releaseDate: "15/11/2015",
          reviewDate: "30/12/2023"
        }
      ]
      spyOn(productService, 'getProducts').and.returnValue(products);

      component.setForm();

      expect(productService.getProducts).toHaveBeenCalled();
      expect(component.productForm.controls['name'].value).toEqual(products[1].name);
      expect(component.productForm.controls['description'].value).toEqual(products[1].description);
      expect(component.productForm.controls['logo'].value).toEqual(products[1].logo);
    });
  })

  describe('GIVEN reset', () => {
    it('WHEN is call', () => {
      component.idParam = '2';
      spyOn(component.productForm, 'reset');

      component.reset();

      expect(component.productForm.reset).toHaveBeenCalled();

    });
  })


});
