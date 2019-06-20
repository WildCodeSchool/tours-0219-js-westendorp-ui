import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticlesService } from 'src/app/core/http/articles.service';

@Component({
  selector: 'app-ranking-button',
  templateUrl: './ranking-button.component.html',
  styleUrls: ['./ranking-button.component.scss'],
})
export class RankingButtonComponent implements OnInit {

  @Input() public articles: Article[];

  @Output() public updateRank:  EventEmitter<any> = new EventEmitter();

  constructor(public articlesService: ArticlesService) { }

  ngOnInit() {
  }

  changeRank(articles: Article[]) {
    this.updateRank.emit(articles);
  }

}
