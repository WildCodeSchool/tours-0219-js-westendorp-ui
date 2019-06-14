import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {

  htmlStr: string;
  public log = !this.service.isLogin();
  newArticle: Article;
  articlesList: Article[] = [];

  constructor(
    private articlesService: ArticlesService,
    private service: LoginService,
    private editorService: EditorService,
  ) { }

  ngOnInit() {
  }

  createActivity(){
    this.newArticle.title = 'nouveau titre';
    this.newArticle.content = 'nouvel article';
    this.editorService.article = this.newArticle;
    this.editorService.typeOfContent = 'title';
  }

}
