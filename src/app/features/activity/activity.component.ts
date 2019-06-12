import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/core/http/articles.service';
import { Article } from 'src/app/shared/models/article.model';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {

  public body: string;
  public log = !this.service.isLogin();

  articlesList: Article[] = [];

  constructor(
    private articlesService: ArticlesService,
    private service: LoginService,
  ) { }

  ngOnInit() {
    this.articlesService.getArticles().subscribe((articles) => {
      this.articlesList = articles;
    });
  }

  startEdit(article) {
    this.body = article;
    this.service.body = this.body;
    console.log(this.body);
  }

}
