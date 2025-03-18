// src/app/admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAdmin = this.authService.isAdmin();
    console.log('AdminGuard: isAdmin =', isAdmin); // Debugging log

    if (isAdmin) {
      return true; // Allow access if the user is an admin
    } else {
      this.router.navigate(['/']); // Redirect to home if not an admin
      return false; // Block access
    }
  }
}