import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticlesService } from '../../../core/http/articles.service';
import { Article } from '../../../shared/models/article.model';
import { LoginService } from '../../../core/services/login.service';
import { EditorService } from '../../../core/services/editor.service';
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

  openModalDelete: EventEmitter<boolean> = new EventEmitter();
  closeModalDelete: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private articlesService: ArticlesService,
    private service: LoginService,
    private editorService: EditorService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {}

  openDeleteModal(){
    this.openModalDelete.emit(true);
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

  deleteActivity(arg) {
      this.articlesService.deleteArticle(arg[0]).subscribe(
        () => {
          this.toastr.success('Article supprimé');
          this.deleteCard.emit(arg[1]);
          this.closeModalDelete.emit(true);
        },
      );
    }
}
