import { Component, OnInit } from '@angular/core';
import { EditorService } from '../../core/services/editor.service';
import { Article } from 'src/app/shared/models/article.model';
import { ArticlesService } from '../http/articles.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-admin-editor',
  templateUrl: './admin-editor.component.html',
  styleUrls: ['./admin-editor.component.scss'],
})

export class AdminEditorComponent implements OnInit {
  public editorValue: string = '';
  article: Article;
  type: string;
  hideModif: boolean;
  hideCreate: boolean;
  hideSubmit: boolean;
  hiddenBtn = true;

  constructor(
    private editorService: EditorService,
    private articlesService: ArticlesService,
    private _location: Location,
  ) { }

  ngOnInit() {
    this.article = this.editorService.article;
    this.type = this.editorService.typeOfContent;
    if (this.editorService.typeEdition) {
      this.hideModif = true;
      this.hideCreate = false;
      this.hideSubmit = true;
    } else {
      this.hideCreate = true;
      this.hideModif = false;
      this.hideSubmit = true;
    }
  }

  enableNextStep() {
    if (this.article.section !== '') {
      this.hiddenBtn = false;
    } else if (this.article.section === '') {
      this.hiddenBtn = true;
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
    this.hideSubmit = false;
    this.hideCreate = true;
  }

  createArticle(article) {
    this.articlesService.createArticle(article).subscribe(() => { });
    this.backClick();
  }

  onFilesAdded(files: File[]) {
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent) => {
        const content = (e.target as FileReader).result;
      };
    });
  }

  onFilesRejected(files: File[]) {
  }

}
