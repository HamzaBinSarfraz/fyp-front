import { Injectable } from '@angular/core';
import { Router , CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      console.log(this.auth.isAuthenticated());
      localStorage.clear();
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}