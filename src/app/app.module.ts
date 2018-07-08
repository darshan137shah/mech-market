import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { AddProductsComponent } from './products/add-products/add-products.component';

 // Services
import { ProductsService } from './products/products.service';
import { ProductsPipe } from './products/products.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductsComponent,
    ProductsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
