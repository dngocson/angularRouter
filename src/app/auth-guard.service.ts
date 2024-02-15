// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   CanActivateChild,
//   Router,
//   RouterStateSnapshot,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth-service';

// @Injectable()
// export class AuthGuard implements CanActivate, CanActivateChild {
//   constructor(private authService: AuthService, private router: Router) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     return this.authService
//       .isAuthenticated()
//       .then((authentication: boolean) => {
//         if (authentication) {
//           return true;
//         } else {
//           this.router.navigate(['/']);
//           return false;
//         }
//       });
//   }
//   canActivateChild(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     return this.canActivate(route, state);
//   }
// }

import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const canActivate = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated().then((authentication: boolean) => {
    if (authentication) {
      return true;
    } else {
      router.navigate(['/']);
      return false;
    }
  });
};

export const canActivateChild = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  return canActivate(route, state);
};
