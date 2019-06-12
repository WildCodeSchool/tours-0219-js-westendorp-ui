import { Component, OnInit } from '@angular/core';
import { EditorService } from '../services/editor.service';
import { Article } from 'src/app/shared/models/article.model';
import { ArticlesService } from '../http/articles.service';

@Component({
  selector: 'app-admin-editor',
  templateUrl: './admin-editor.component.html',
  styleUrls: ['./admin-editor.component.scss'],
})
export class AdminEditorComponent implements OnInit {

  article: Article;

  constructor(
    private editorService: EditorService,
    private articlesService: ArticlesService,
  ) { }

  ngOnInit() {
    this.article = this.editorService.article;
  }

  updateArticle(id: string, content: Article) {
    this.articlesService.updateArticle(id, content).subscribe((newArticle: Article) => {
      this.article = newArticle;
    });
  }

}
