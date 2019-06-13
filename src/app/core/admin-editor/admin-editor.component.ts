import { Component, OnInit } from '@angular/core';
import { EditorService } from '../services/editor.service';
import { Article } from 'src/app/shared/models/article.model';
import { ArticlesService } from '../http/articles.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-admin-editor',
  templateUrl: './admin-editor.component.html',
  styleUrls: ['./admin-editor.component.scss'],
})
export class AdminEditorComponent implements OnInit {
  public Editor = ClassicEditor;
  article: Article;
  type: string;

  constructor(
    private editorService: EditorService,
    private articlesService: ArticlesService,
  ) { }

  ngOnInit() {
    this.article = this.editorService.article;
    this.type = this.editorService.typeOfContent;
  }

  updateArticle(id: string, content: Article) {
    this.articlesService.updateArticle(id, content).subscribe((newArticle: Article) => {
      this.article = newArticle;
      console.log(this.article);
    });
  }
  deleteArticle(id: string){
    this.articlesService.deleteArticle(id);
  }


}
