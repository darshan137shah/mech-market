import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private _fb: FormBuilder) { }

  addProduct: FormGroup;

  ngOnInit() {
    this.addProduct = this._fb.group({
      productId: ['', Validators.required],
      productName: ['', [Validators.required, Validators.minLength(5)]],
      productCode: ['', Validators.required],
      releaseDate: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  addProductService() {
    console.log(this.addProduct.value); // To save the values from the form
  }

}
