import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }
  public getToken(): string {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem('token');
    }
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return tokenNotExpired(null, token);
  }

}
