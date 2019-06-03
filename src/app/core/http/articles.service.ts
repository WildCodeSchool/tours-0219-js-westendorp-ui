import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Articles } from 'src/app/shared/models/articles.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {

  constructor(public http: HttpClient) { }

  public api = `${environment.apiUrl}`;

  public getArticle(id) {
    const  obs: Observable<any> = this.http
    .get(`${this.api}/articles/${id}`);
    const  treatment  = (response: any) => {
      return  response as Articles[];
    };
    return  obs.pipe(map(treatment));
  }

  public getArticles(): Observable<Articles[]> {
    return this.http.get(`${this.api}/articles`).pipe(
      map((allArticles: any) => {
        return allArticles as Articles[];
      }),
    );
  }
}
