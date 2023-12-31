import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/service/products.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm!: FormGroup;
  idParam!: string;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.idParam = this.route.snapshot.paramMap.get('id') as string;

    this.productForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      releaseDate: ['', [Validators.required]],
      reviewDate: [{ value: moment(new Date()).format('YYYY-MM-DD'), disabled: true }, []],
    });

    if (Boolean(this.idParam)) {
      this.setForm();
    }

  }

  add() {

    this.productService.deleteProduct(this.productForm.controls['id'].value);

    let reviewDate = this.productForm.controls['reviewDate'].value;

    let value = {
      id: this.productForm.controls['id'].value,
      name: this.productForm.controls['name'].value,
      description: this.productForm.controls['description'].value,
      logo: this.productForm.controls['logo'].value,
      releaseDate: moment(this.productForm.controls['releaseDate'].value).format('DD/MM/YYYY'),
      reviewDate: moment(reviewDate ? reviewDate : new Date()).format('DD/MM/YYYY'),
    }

    this.productService.addProduct(value);
  }

  setForm() {

    let elementFound = this.productService.getProducts().find(value => value.id === this.idParam)

    this.productForm.patchValue({
      id: elementFound?.id,
      name: elementFound?.name,
      description: elementFound?.description,
      logo: elementFound?.logo,
      releaseDate: moment(elementFound?.releaseDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      reviewDate: moment(elementFound?.reviewDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
    });

  }

  reset() {
    this.productForm.reset();
  }

}
