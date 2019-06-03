import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Articles } from "src/app/shared/models/articles.model";

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  public api = `${environment.apiUrl}`;

  public getArticles(): Observable<Articles[]> {
    return this.http.get(`${this.api}/articles`).pipe(
      map((allArticles: any) => {
        return allArticles as Articles[];
      })
    );
  }
}
