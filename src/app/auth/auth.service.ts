import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $loginFlag: Subject<boolean> = new Subject();

  constructor( private _router: Router, private _http: HttpClient, private _cookieService : CookieService ) { }

  login(user) {
    return this._http.post('http://localhost:3001/login', user).subscribe((resp: any) => {
      console.log(resp);
      if(resp.isLoggedIn) {
        this._router.navigate(['/products']);
        this._cookieService.set('token', resp.token);
      } else {
        this.$loginFlag.next(resp.isLoggedIn);
      }
    });
  }

  checkSession() {
    return this._cookieService.get('token');
  }

  logout() {
    this.$loginFlag.next(false);
    this._cookieService.delete('token');
    this._router.navigate(['/login']);
  }
}
