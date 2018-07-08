import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any = {};
  noLoginFlag: boolean = true;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  signIn() {
    this._authService.login(this.user);
    this._authService.$loginFlag.subscribe((data: boolean) => {
      this.noLoginFlag = data;
    })
  }
}
