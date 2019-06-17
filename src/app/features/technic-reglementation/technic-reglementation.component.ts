import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { EditorService } from 'src/app/core/services/editor.service';
import { Article } from 'src/app/shared/models/article.model';
import { ArticlesService } from 'src/app/core/http/articles.service';

@Component({
  selector: 'app-technic-reglementation',
  templateUrl: './technic-reglementation.component.html',
  styleUrls: ['./technic-reglementation.component.scss'],
})
export class TechnicReglementationComponent implements OnInit {

  public log = !this.service.isLogin();
  newArticle: Article = new Article('', 'nouveau titre', 'nouveau texte', undefined ,  '', '',  '');
  articlesList: Article[] = [];

  constructor(
    private service: LoginService,
    private editorService: EditorService,
    private articlesService: ArticlesService,
  ) { }

  ngOnInit() {
    this.articlesService.getArticlesBySections('technic-reglementation').subscribe((articles: Article[]) => {
      this.articlesList = articles;
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
