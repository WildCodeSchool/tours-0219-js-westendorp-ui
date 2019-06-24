import { Component, OnInit,  HostListener, ElementRef } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { EditorService } from 'src/app/core/services/editor.service';
import { Article } from 'src/app/shared/models/article.model';
import { ArticlesService } from 'src/app/core/http/articles.service';
import { ToastrService } from 'ngx-toastr';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1500ms ease-in'))
    ])
  ]
})

export class HomeComponent implements OnInit {

  state = 'hide';
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
    public el: ElementRef,
  ) { }

  ngOnInit() {
    this.articlesService.getArticlesBySections('home').subscribe((articles: Article[]) => {
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

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition) {
      this.state = 'show';
    } else {
    }

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
