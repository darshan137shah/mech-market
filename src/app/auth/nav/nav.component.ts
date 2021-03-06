import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  activeUser : boolean = false;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService.$loginFlag.subscribe((data) => {
      this.activeUser = data;
    });
  }

  logout() {
    this._authService.logout();
  }

}
