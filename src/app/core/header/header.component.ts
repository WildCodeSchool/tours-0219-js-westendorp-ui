import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeAnimation]
})
export class HeaderComponent implements OnInit {
  
  isShown = false;

  constructor() { }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngOnInit() {
  }

}
