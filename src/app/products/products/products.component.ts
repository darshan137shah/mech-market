import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  imgHide:boolean = false;

  constructor(private _productsService: ProductsService ) { }

  ngOnInit() {
    this._productsService.getData().subscribe((data) => {
      this.products = data;
    });
  }

  imgToggle() {
    this.imgHide = !this.imgHide;
  }
}
