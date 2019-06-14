import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss'],
})
export class NavbarAdminComponent implements OnInit {

  openNav = false;
  closeNav = true;
  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() { }

  onOpenNav() {
    this.openNav = true;
    this.closeNav = false;
  }

  onCloseNav() {
    this.openNav = false;
    this.closeNav = true;
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/');
  }

}
