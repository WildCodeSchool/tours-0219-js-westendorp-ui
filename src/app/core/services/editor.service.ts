import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditorService {

  constructor() { }

  public contentSubject: Subject<Object> = new Subject();

}
