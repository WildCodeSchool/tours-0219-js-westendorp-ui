import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() { }

  onOpenNav() {
    this.openNav = !this.openNav;
    this.closeNav = !this.closeNav;
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/');
    this.showSuccessLogout();
  }

  showSuccessLogout() {
    this.toastr.success('Vous êtes déconnecté(e)');
  }

}
