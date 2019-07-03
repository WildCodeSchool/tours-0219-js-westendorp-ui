import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticlesService } from '../../../core/http/articles.service';
import { Article } from '../../../shared/models/article.model';
import { LoginService } from '../../../core/services/login.service';
import { EditorService } from '../../../core/services/editor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  public htmlStr: string;
  public isLogin = !this.service.isLogin();

  @Input() public article: Article;
  @Input() public index: number;

  @Output()
  deleteCard: EventEmitter<any> = new EventEmitter();

  constructor(
    private articlesService: ArticlesService,
    private service: LoginService,
    private editorService: EditorService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
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
    const result = confirm('Voulez-vous vraiment supprimer cet article ?');
    if (result) {
      this.articlesService.deleteArticle(id).subscribe(
        (articles) => {
          this.toastr.success('Article supprimé');
          this.deleteCard.emit(index + 1);
        },
      );
    } else {
      this.toastr.error('Article non supprimé');
    }
  }
}
