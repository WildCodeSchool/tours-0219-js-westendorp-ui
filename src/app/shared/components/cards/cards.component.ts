import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/core/http/articles.service';
import { Article } from 'src/app/shared/models/article.model';
import { LoginService } from 'src/app/core/services/login.service';
import { EditorService } from 'src/app/core/services/editor.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  htmlStr: string;
  public log = !this.service.isLogin();
  newArticle: Article= new Article('', 'nouveau titre', 'nouveau texte', undefined ,  '', '',  '')
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

  sendActivity(article: Article, type: string) {
    this.editorService.contentSubject.next(article);
    this.editorService.article = article;
    if (type === 'title') {
      this.editorService.typeOfContent = 'title';
    } else {
      this.editorService.typeOfContent = 'content';
    }
    this.editorService.typeEdition = false;
  }

  deleteActivity(id, index) {
    this.articlesService.deleteArticle(id).subscribe(
      (articles) => {
        this.articlesList.splice(index, 1);
      },
    );
  }

  createActivity() {
    this.editorService.article = this.newArticle;
    this.editorService.typeOfContent = 'title';
    this.editorService.typeEdition = true;
  }

}
