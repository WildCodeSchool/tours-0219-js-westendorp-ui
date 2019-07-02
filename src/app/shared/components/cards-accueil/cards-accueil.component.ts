import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticlesService } from 'src/app/core/http/articles.service';
import { Article } from 'src/app/shared/models/article.model';
import { LoginService } from 'src/app/core/services/login.service';
import { EditorService } from 'src/app/core/services/editor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cards-accueil',
  templateUrl: './cards-accueil.component.html',
  styleUrls: ['./cards-accueil.component.scss'],
})
export class CardsAccueilComponent implements OnInit {

  htmlStr: string;
  public isLogin = !this.service.isLogin();

  @Input() public article: Article;
  @Input() public index;
  @Output()
  deleteCard: EventEmitter<any> = new EventEmitter();

  constructor(
    private articlesService: ArticlesService,
    private service: LoginService,
    private editorService: EditorService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {}

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
    const result = confirm('Voulez-vous vraiment supprimer cet article ?');
    if (result) {
      this.articlesService.deleteArticle(id).subscribe(
        (articles) => {
          this.toastr.success('Article supprimé');
          this.deleteCard.emit([id, index + 1]);
        },
      );
    } else {
      this.toastr.error('Article non supprimé');
    }
  }
}
