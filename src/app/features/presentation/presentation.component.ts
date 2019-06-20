import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { EditorService } from 'src/app/core/services/editor.service';
import { Article } from 'src/app/shared/models/article.model';
import { ArticlesService } from 'src/app/core/http/articles.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {

  public isLogin = !this.service.isLogin();
  newArticle: Article = new Article('', 'Titre de l\'article', 'Contenu de l\'article', undefined ,  '', '',  '', null);
  articlesList: Article[] = [];
  public isSameRank = false;

  constructor(
    private service: LoginService,
    private editorService: EditorService,
    private articlesService: ArticlesService,
  ) { }

  ngOnInit() {
    this.articlesService.getArticlesBySections('presentation').subscribe((articles: Article[]) => {
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

  onUpdateRank($event) {
    this.isSameRank = false;
    for (let i = 0; i < $event.length; i = i + 1) {
      for (let j = i + 1; j < $event.length; j = j + 1) {
        if ($event[i].rank === $event[j].rank) {
          return this.isSameRank = true;
        }
        this.articlesService.updateArticlesRanking($event).subscribe((newArticle: Article[]) => {
          this.articlesList = newArticle;
        });
      }
    }
  }

}
