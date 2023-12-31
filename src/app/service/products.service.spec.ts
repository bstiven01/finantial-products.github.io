import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { Product } from '../models/product.model';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('GIVEN addProduct', () => {
    it('WHEN is call THEN product is add to array', () => {
      let product: Product = {
        id: '5',
        name: 'name 5',
        logo: 'logo 5',
        description: 'description 5',
        releaseDate: '02/01/2023',
        reviewDate: '30/12/2023'
      }

      service.addProduct(product);

      let elementFound  = ((service as any).products as []).find(element => (element as any).id === product.id);

      expect((elementFound as any).id).toEqual(product.id);
      expect((elementFound as any).name).toEqual(product.name);
      expect((elementFound as any).description).toEqual(product.description);
    });
  })

  describe('GIVEN deleteProduct', () => {
    it('WHEN is call THEN product is removed to array', () => {


      service.deleteProduct("2");

      let elementFound  = ((service as any).products as []).find(element => (element as any).id === "2");

      expect(((service as any).products as []).length).toEqual(2 as any);
    });
  })
});
