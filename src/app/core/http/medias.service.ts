import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Media } from 'src/app/shared/models/media.model';

@Injectable({
  providedIn: 'root',
})
export class MediasService {

  api = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {
  }

  public getMedia(): Observable<Media> {
    const recup: Observable<any> = this.http.get(`${this.api}`);
    const treatment = (parameters:any) => {
      return parameters as Media;
    };
    return recup.pipe(map(treatment));
  }

  public deleteMedia(id: string): Observable<Media> {
    const suppr: Observable<any> = this.http.delete(`${this.api}/${id}`);
    const treatment = (param: any) => {
      return param as Media;
    };
    return suppr.pipe(map(treatment));
  }

}
