import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { EditorService } from 'src/app/core/services/editor.service';
import { Article } from 'src/app/shared/models/article.model';
import { ArticlesService } from 'src/app/core/http/articles.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-technic-reglementation',
  templateUrl: './technic-reglementation.component.html',
  styleUrls: ['./technic-reglementation.component.scss'],
})
export class TechnicReglementationComponent implements OnInit {

  public isLogin = !this.service.isLogin();
  newArticle: Article = new Article('', 'Titre de l\'article', 'Contenu de l\'article', undefined, '', '', '', null);
  articlesList: Article[] = [];
  public isSameRank = false;
  topArticleIndex: number;

  constructor(
    private service: LoginService,
    private editorService: EditorService,
    private articlesService: ArticlesService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this.articlesService.getArticlesBySections('technic-reglementation').subscribe((articles: Article[]) => {
      this.articlesList = articles;
      this.topArticleIndex = this.articlesList.findIndex(a => a.rank === 1);
      if (this.topArticleIndex < 0 && this.articlesList.length > 0) {
        this.topArticleIndex = 0;
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
