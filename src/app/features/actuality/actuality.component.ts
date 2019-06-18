import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { EditorService } from 'src/app/core/services/editor.service';
import { Article } from 'src/app/shared/models/article.model';
import { ArticlesService } from 'src/app/core/http/articles.service';

@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.component.html',
  styleUrls: ['./actuality.component.scss'],
})
export class ActualityComponent implements OnInit {

  isLogin = !this.service.isLogin();
  newArticle: Article = new Article('', 'nouveau titre', 'nouveau texte', undefined ,  '', '',  '');
  articlesList: Article[] = [];

  constructor(
    private service: LoginService,
    private editorService: EditorService,
    private articlesService: ArticlesService,
  ) { }

  ngOnInit() {
    this.articlesService.getArticles().subscribe((articles) => {
      for (let i = 0; i < articles.length; i += 1) {
        if (articles[i].section === 'actuality') {
          this.articlesList.push(articles[i]);
        }
      }
    });
  }

  createActivity() {
    this.editorService.article = this.newArticle;
    this.editorService.typeOfContent = 'title';
    this.editorService.typeEdition = true;
  }

  deleteCard(index) {
    this.articlesList.splice(index, 1);
  }

}
