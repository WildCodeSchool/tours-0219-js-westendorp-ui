import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return tokenNotExpired(null, token);
  }

}
