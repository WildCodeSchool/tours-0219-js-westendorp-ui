import { Component, OnInit } from '@angular/core';
import { EditorService } from '../services/editor.service';
import { Article } from 'src/app/shared/models/article.model';
import { ArticlesService } from '../http/articles.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Location } from '@angular/common';
@Component({
  selector: 'app-admin-editor',
  templateUrl: './admin-editor.component.html',
  styleUrls: ['./admin-editor.component.scss'],
})
export class AdminEditorComponent implements OnInit {
  public Editor = ClassicEditor;
  article: Article;
  type: string;
  hideModif: boolean;
  hideCreate: boolean;
  hideSubmit: boolean;

  constructor(
    private editorService: EditorService,
    private articlesService: ArticlesService,
    private _location: Location,
  ) { }

  ngOnInit() {
    this.article = this.editorService.article;
    this.type = this.editorService.typeOfContent;
    if(this.editorService.typeEdition){
      this.hideModif = true;
      this.hideCreate = false;
      this.hideSubmit = true;
    } else {
      this.hideCreate = true;
      this.hideModif = false;
      this.hideSubmit = true;
    }
  }

  updateArticle(id: string, content: Article) {
    this.articlesService.updateArticle(id, content).subscribe((newArticle: Article) => {
      this.article = newArticle;
      this.backClick();
    });
  }
  deleteArticle(id: string) {
    this.articlesService.deleteArticle(id);
  }

  backClick() {
    this._location.back();
  }

  goToContent() {
    this.type = 'content';
    console.log(this.article);
    this.hideSubmit = false;
    this.hideCreate = true;
  }

  createArticle(article) {
    this.articlesService.createArticle(article).subscribe((article) => {});
    console.log(this.article);
    this.backClick();
  }

}
