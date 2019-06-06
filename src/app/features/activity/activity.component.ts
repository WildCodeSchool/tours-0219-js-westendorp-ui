import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/core/http/articles.service';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {

  articlesList: Article[] = [];

  constructor(
    private articlesService: ArticlesService,
  ) { }

  ngOnInit() {
    this.articlesService.getArticles().subscribe((articles) => {
      this.articlesList = articles;
    });
  }

}
