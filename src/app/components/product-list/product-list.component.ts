import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  searchText: any;
  productList: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productList = this.productsService.getProducts();
  }

}
