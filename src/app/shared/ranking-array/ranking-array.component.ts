import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-ranking-array',
  templateUrl: './ranking-array.component.html',
  styleUrls: ['./ranking-array.component.scss'],
})
export class RankingArrayComponent implements OnInit {

  @Input() public articlesList: Article[];

  public log = !this.service.isLogin();

  constructor(
    private service: LoginService,
  ) { }

  ngOnInit() {
  }

  changeRank(){
    
  }
}
