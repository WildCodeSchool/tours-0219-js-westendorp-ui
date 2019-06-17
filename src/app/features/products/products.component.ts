import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { EditorService } from 'src/app/core/services/editor.service';
import { Article } from 'src/app/shared/models/article.model';
import { ArticlesService } from 'src/app/core/http/articles.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  public log = !this.service.isLogin();
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
        if (articles[i].section === 'products') {
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

  deleteCard(id) {
    this.articlesList.splice(this.articlesList.findIndex(a => a.id === id), 1);
  }

}
