import { Component, OnInit } from '@angular/core';
import { MediasService } from 'src/app/core/http/medias.service';
import { Media } from '../../models/media.model';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss'],
})
export class CarousselComponent implements OnInit {
  images: Media[] = [];
  constructor(private mediasService: MediasService) { }

  ngOnInit() {
    this.mediasService.getMediaByType('image').subscribe((res: Media[]) => {
      this.images = res;
    });
  }

}
