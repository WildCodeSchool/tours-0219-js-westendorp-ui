import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/core/http/articles.service';
import { Article } from 'src/app/shared/models/article.model';
import { LoginService } from 'src/app/core/services/login.service';
import { EditorService } from 'src/app/core/services/editor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {

  isLogin = !this.service.isLogin();
  newArticle: Article = new Article(undefined, 'Titre de l\'article', 'Contenu de l\'article', undefined, '', '', '', null);
  articlesList: Article[] = [];
  topArticleIndex: number;
  public isSameRank = false;

  constructor(
    private service: LoginService,
    private editorService: EditorService,
    private articlesService: ArticlesService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this.articlesService.getArticlesBySections('timeline').subscribe((articles: Article[]) => {
      this.articlesList = articles;
    });
  }

  createActivity() {
    this.editorService.article = this.newArticle;
    this.editorService.typeOfContent = 'title';
    this.editorService.typeEdition = true;
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
