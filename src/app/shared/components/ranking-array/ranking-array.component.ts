import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article.model';
import { LoginService } from 'src/app/core/services/login.service';
import { ArticlesService } from 'src/app/core/http/articles.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ranking-array',
  templateUrl: './ranking-array.component.html',
  styleUrls: ['./ranking-array.component.scss'],
})
export class RankingArrayComponent implements OnInit {

  @Input() public articles: Article[];

  public log = !this.serviceLogin.isLogin();
  public rank = Number;

  constructor(
    private serviceLogin: LoginService,
    private serviceArticles: ArticlesService,
  ) { }

  ngOnInit() {
  }

  changeRank(articles) {
    this.serviceArticles.updateArticlesRanking(articles).subscribe((newArticle: Article[]) => {
      this.articles = newArticle;
      console.log(this.articles);
    });
  }
}
