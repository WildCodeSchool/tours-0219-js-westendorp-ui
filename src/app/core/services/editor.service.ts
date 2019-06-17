import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Article } from 'src/app/shared/models/article.model';

@Injectable({
  providedIn: 'root',
})
export class EditorService {

  public article: Article;
  typeOfContent: string;
  typeEdition: boolean;

  constructor() { }

  public contentSubject: Subject<Object> = new Subject();

}
