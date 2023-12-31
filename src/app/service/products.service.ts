import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
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

  constructor(private router: Router) { }

  public getProducts() {
    return this.products;
  }

  public addProduct(product: Product) {
    this.products.push(product);
    this.router.navigate(['/'])
  }

  public deleteProduct(id: string) {
    let elementFound = this.products.findIndex(value => value.id === id);
    if (elementFound != -1) {
      this.products.splice(elementFound, 1)
    }

  }
}
