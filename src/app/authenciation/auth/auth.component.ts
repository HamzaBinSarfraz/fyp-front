import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { users } from '../../services/users.service';
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
  roles: any = {};
  constructor(private loginservice: users, private route: Router, private jwt: JwtHelperService) { }

  ngOnInit() {
  }

  submitLogin() {

    console.log(this.loginObj);

    this.loginservice.post(environment.login, this.loginObj).subscribe(data => {
      this.usertoken = data.token;
      this.jwt.decodeToken();
      this.roles = data.data.role;
      localStorage.setItem('datarole', this.roles);
      localStorage.setItem('userid', data.data._id);
      localStorage.setItem('token', this.usertoken);
      if (data.status === true) {
        this.route.navigate(['dashboard/view']);
    }
    });
  }



}
