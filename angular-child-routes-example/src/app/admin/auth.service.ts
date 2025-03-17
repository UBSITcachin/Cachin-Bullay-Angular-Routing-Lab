import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    isAdmin(): boolean {
        console.log('AuthService.isAdmin() called -always returning false for demo')
        return false;
    }
}