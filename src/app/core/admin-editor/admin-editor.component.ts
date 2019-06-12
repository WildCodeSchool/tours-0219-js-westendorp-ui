import { Component, OnInit } from '@angular/core';
import { EditorService } from '../services/editor.service';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-admin-editor',
  templateUrl: './admin-editor.component.html',
  styleUrls: ['./admin-editor.component.scss'],
})
export class AdminEditorComponent implements OnInit {

  article: Article;

  constructor(
    private editorService: EditorService,
  ) { }

  ngOnInit() {
    // this.editorService.contentSubject.subscribe((article: Article) => {
    //   this.article = article;
    //   console.log(article);
    // },
    // );
    this.article = this.editorService.article;
  }

}
