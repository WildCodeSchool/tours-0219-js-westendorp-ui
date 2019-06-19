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

  updatePassWord(id: string, loginForm: Login): Observable<Login> {
    console.log(id, loginForm);
    return this.http.put<Login>(`${this.api}/auth/${id}`, loginForm);
  }
}
