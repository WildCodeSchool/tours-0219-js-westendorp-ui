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
  public api = `${environment.apiUrl}`;
  public user: boolean;

  login(email: string, password: string) {
    return this.http.post<any>(this.urlApi, { email, password })
      .pipe(tap((user) => {
        if (user) {
          this.user = true; localStorage.setItem('token', user.token);
        }
      }));
  }

  isLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
  }

  logout() {
    localStorage.clear();
    this.user = false;
  }
  resetPass() {
    return this.http.post<any>(this.urlReset, {});
  }
  updatePassWord(id: string, loginForm: Login): Observable<Login> {
    console.log(id, loginForm);
    return this.http.put<Login>(`${this.api}/auth/${id}`, loginForm);
  }
}
