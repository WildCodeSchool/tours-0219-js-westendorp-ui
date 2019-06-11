import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss'],
})
export class NavbarAdminComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {

  } openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '30px';
    document.getElementById('main').style.marginLeft = '30px';
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/');
  }

}
