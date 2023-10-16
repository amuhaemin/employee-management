import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  isAuthenticated: boolean = false;

  canActivate(): boolean {
    if (localStorage.getItem('currentUser') === null) {
      this.isAuthenticated = false;
      this.router.navigate(['/login']);
    } else {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }
}
