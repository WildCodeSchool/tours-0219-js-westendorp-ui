import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/login.service';
import { EditorService } from '../../core/services/editor.service';
import { Article } from '../../shared/models/article.model';
import { ArticlesService } from '../../core/http/articles.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {

  public lastRank: number;
  public isLogin = !this.service.isLogin();
  public newArticle: Article;
  public articlesList: Article[] = [];
  public isSameRank = false;

  constructor(
    private service: LoginService,
    private editorService: EditorService,
    private articlesService: ArticlesService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this.articlesService.getArticlesBySections('activity').subscribe((articles: Article[]) => {
      this.articlesList = articles;
      this.lastRank = articles[articles.length - 1].rank + 1;
      this.newArticle = new Article(
        undefined, 'Titre de l\'article', 'Contenu de l\'article', undefined, '', 'activity', '', this.lastRank);
    });
  }

  createActivity() {
    this.editorService.article = this.newArticle;
    this.editorService.typeOfContent = 'title';
    this.editorService.typeEdition = true;
    console.log(this.lastRank);
  }

  deleteCard(id) {
    this.articlesList.splice(id, 1);
  }

  onUpdateRank($event) {
    for (let i = 0; i < $event.length; i = i + 1) {
      for (let j = i + 1; j < $event.length; j = j + 1) {
        if ($event[i].rank === $event[j].rank) {
          this.toastrService.warning(
            `Plusieurs articles ne peuvent pas partager le même ordre d'apparition`, 'Erreur',
            {
              positionClass: 'toast-top-center',
              timeOut: 3000,
            });
          return this.isSameRank = true;
        }
        this.isSameRank = false;
      }
    }
    if (!this.isSameRank) {
      this.articlesService.updateArticlesRanking($event).subscribe((newArticle: Article[]) => {
        this.articlesList = newArticle;
        this.isSameRank = false;
      });
    }
  }

}
