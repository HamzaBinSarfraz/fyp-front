import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public loginAuth: JwtHelperService) { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
   // console.log('Token Expire:', this.loginAuth.isTokenExpired(token));
    return !this.loginAuth.isTokenExpired(token);
  }
}