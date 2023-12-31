import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {

  @Input()
  id!: string;

  constructor(private productService: ProductsService) { }


  delete() {
    this.productService.deleteProduct(this.id);
  }

}
