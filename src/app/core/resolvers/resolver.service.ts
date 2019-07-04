import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models/article.model';
import { ArticlesService } from '../http/articles.service';

@Injectable({
  providedIn: 'root',
})
export class ResolverService implements Resolve<any> {
  constructor(private articleService: ArticlesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article[]> {
    const query = route.data.query;
    return this.articleService.getArticlesBySections(query);
  }

}
