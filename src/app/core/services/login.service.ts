import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Login } from 'src/app/shared/models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) { }
  urlApi = `${environment.apiUrl}/auth/signin`;
  urlReset = `${environment.apiUrl}/auth/forget`;
  urlMail = `${environment.apiUrl}/auth/validemail`;
  public api = `${environment.apiUrl}`;
  public user: boolean;

  login(email: string, password: string) {
    return this.http.post<any>(this.urlApi, { email, password })
      .pipe(tap((user) => {
        if (user) {
          this.user = true; sessionStorage.setItem('token', user.token);
        }
      }));
  }

  isLogin() {
    if (sessionStorage.getItem('token')) {
      return true;
    }
  }

  logout() {
    sessionStorage.clear();
    this.user = false;
  }
  resetPass(email: string) {
    return this.http.post<any>(this.urlReset, { email });
  }

  checkemail(email: string) {
    return this.http.post<any>(this.urlMail, { email });
  }

  updatePassWord(email: string, loginForm: Login): Observable<Login> {
    return this.http.put<Login>(`${this.api}/auth/${email}`, loginForm);
  }
}
