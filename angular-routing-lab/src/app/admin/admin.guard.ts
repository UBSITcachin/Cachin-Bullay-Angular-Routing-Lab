import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {} // Add Router for redirecting if needed

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Replace this with actual authentication check
    const isAuthenticated = true; // Change this to actual logic

    if (!isAuthenticated) {
      this.router.navigate(['/home']); // Redirect if not authorized
      return false;
    }

    return true;
  }
}
