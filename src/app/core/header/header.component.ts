import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './animation';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeAnimation],
})
export class HeaderComponent implements OnInit {
  show = true;
  
  
  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      console.log(event);
        
      if (event instanceof NavigationStart) {
        this.show = false;
        
      }

      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.show = true;
        },300);
        
      }

      if (event instanceof NavigationError) {
        // this.show = true;
        // Present error to user
        console.log(event.error);
      }
    });
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngOnInit() {}
}
