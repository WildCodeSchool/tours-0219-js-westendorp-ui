import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/shared/models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  public api = `${environment.apiUrl}`;

  public getArticle(id: string): Observable<Article> {
    return this.http.get(`${this.api}/articles/${id}`).pipe(
      map((article: any) => {
        return  article as Article;
      }),
    );
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get(`${this.api}/articles`).pipe(
      map((allArticles: any) => {
        return allArticles as Article[];
      }),
    );
  }

  public deleteArticle(id: string): Observable<Article> {
    return this.http.delete(`${this.api}/articles/${id}`).pipe(
      map((article: any) => {
        return  article as Article;
      }),
    );
  }

  public createArticle(articleForm: Article): Observable<Article> {
    return this.http.post<Article>(`${this.api}/articles`, articleForm);
  }

  public updateArticle(articleForm: Article, id: string): Observable<Article> {
    return this.http.put<Article>(`${this.api}/articles/${id}`, articleForm);
  }

  public getArticlesBySections(section: string): Observable<Article[]> {
    return this.http.get(`${this.api}/articles/search=${section}`).pipe(
      map((articlesBysections: any) => {
        return articlesBysections as Article[];
      }),
    );
  }

}
