import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { AddProductsComponent } from './products/add-products/add-products.component';
import { HomeComponent } from './auth/home/home.component';

 // Services
import { ProductsService } from './products/products.service';
import { ProductsPipe } from './products/products.pipe';
import { LoginComponent } from './auth/login/login.component';
import { NavComponent } from './auth/nav/nav.component';
import { CookieService } from "ngx-cookie-service";
import { AuthGuard } from "./auth/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductsComponent,
    ProductsPipe,
    HomeComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
      ])
  ],
  providers: [ProductsService, CookieService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
