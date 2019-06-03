import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {

  public service: HttpClient;

  constructor(public http: HttpClient) { }

  public getArticle(id) {
    const  obs: Observable<any> = this.http
    .get(`${environment.apiUrl}/articles/${id}`);
    const  treatment  = (response:any) => {
      return  response as Booking[];
    };
    return  obs.pipe(map(treatment));
  }
}
