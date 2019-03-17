import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {users} from '../../services/users.service';
import { Router, RouterLink } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginObj: any = {};
  usertoken: any;
  constructor(private loginservice: users, private route: Router, private jwt: JwtHelperService) { }

  ngOnInit() {
  }

  submitLogin() {

    console.log(this.loginObj);

    this.loginservice.post(environment.login, this.loginObj).subscribe(data => {
      if (data.status === true) {
        this.usertoken = data.token;
        console.log('save Successfully');
        this.jwt.decodeToken();
        localStorage.setItem('token', this.usertoken);
        this.route.navigate(['studentinfoadmin']);
      }
    });
  }



}
