import { Component, OnInit } from '@angular/core';
import { EditorService } from '../../core/services/editor.service';
import { Article } from '../../shared/models/article.model';
import { ArticlesService } from '../http/articles.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-editor',
  templateUrl: './admin-editor.component.html',
  styleUrls: ['./admin-editor.component.scss'],
})

export class AdminEditorComponent implements OnInit {
  public editorValue = '';
  article: Article;
  type: string;
  hideModif: boolean;
  hideCreate: boolean;
  hideSubmit: boolean;
  hiddenBtn = true;
  config: any;

  constructor(
    private editorService: EditorService,
    private articlesService: ArticlesService,
    private _location: Location,
    private toastr: ToastrService,
  ) {
    this.config = {
      height: 300,
      skin: 'kama',
      extraPlugins: 'image2,autogrow,magicline,horizontalrule,scayt,uploadimage,uploadwidget,uploadfile',
      removePlugins: 'image',
    };
    this.config.uploadUrl = 'https://ibb.co/7KzKmgG';
  }

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
      this.toastr.success('Article mis à jour');
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
    this.articlesService.createArticle(article).subscribe((newArticle: Article) => {
      if (newArticle) {
        this.toastr.success('Article créé');
        this.backClick();
      }
    });
  }

  onFilesAdded(files: File[]) {
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent) => {
        const content = (e.target as FileReader).result;
      };
    });
  }

}
