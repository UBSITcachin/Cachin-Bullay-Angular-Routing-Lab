import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // This is just a mock implementation. Replace with your actual logic.
  isAdmin(): boolean {
    // Logic to determine if the user is an admin
    // For example, check a user role stored in local storage or a service
    return false; // Change this to true for testing admin access
  }
}