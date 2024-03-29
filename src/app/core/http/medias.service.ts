import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Media } from '../../shared/models/media.model';

@Injectable({
  providedIn: 'root',
})
export class MediasService {

  api = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {
  }

  public getMedia(): Observable<Media[]> {
    return this.http.get<Media[]>(`${this.api}/medias`);
  }

  public deleteMedia(id: string): Observable<Media> {
    const suppr: Observable<any> = this.http.delete(`${this.api}/medias/${id}`);
    const treatment = (param: any) => {
      return param as Media;
    };
    return suppr.pipe(map(treatment));
  }

  public getMediaByType(type: string): Observable<Media[]> {
    return this.http.get<Media[]>(`${this.api}/medias/search?type=${type}`);
  }

  public getById(id: string): Observable<Media> {
    const  recup: Observable<any> = this.http.get(`${this.api}/medias/${id}`);
    const  treatment  = (response: any) => {
      return  response as Media;
    };
    return  recup.pipe(map(treatment));

  }
  public create (mediaForm: Media) {
    const  create: Observable<any> = this.http
    .post(`${this.api}/medias`, mediaForm);
    const  treatment  = (response: any) => {
      return  response as Media;
    };
    return  create.pipe(map(treatment));
  }
}
