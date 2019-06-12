import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/core/http/articles.service';
import { Article } from 'src/app/shared/models/article.model';
import { LoginService } from 'src/app/core/services/login.service';
import { EditorService } from 'src/app/core/services/editor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {

  public log = !this.service.isLogin();

  articlesList: Article[] = [];

  constructor(
    private articlesService: ArticlesService,
    private service: LoginService,
    private editorService: EditorService,
  ) { }

  ngOnInit() {
    this.articlesService.getArticles().subscribe((articles) => {
      this.articlesList = articles;
    });
  }

  sendActivity(article: Article) {
    this.editorService.contentSubject.next(article);
    this.editorService.article = article;
    console.log(article);
  }

}
