import { Injectable } from '@angular/core';
import { HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private _authService : AuthService ) { }

  intercept(req, next) {
    var addHead = req.clone({
      headers: new HttpHeaders().set('token', this._authService.checkSession())
    });
    return next.handle(addHead);
  }
}
