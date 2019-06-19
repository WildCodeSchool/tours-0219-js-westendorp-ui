import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class LoginModalComponent implements OnInit {
  public hidden = false;
  public show = true;
  error = '';

  constructor(config: NgbModalConfig,
              private modalService: NgbModal,
              private islogin: LoginService,
              private router: Router,
              private urlReset: LoginService,
              private toastr: ToastrService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  hiddenForm() {
    this.hidden = true;
    this.show = false;
  }

  hiddenBack() {
    this.hidden = false;
    this.show = true;
  }

  onSubmit(f: NgForm) {
    this.islogin.login(f.value.email, f.value.mdp)
      .subscribe(
        (data) => {
          this.router.navigateByUrl('admin');
          this.modalService.dismissAll();
        });
  }

  sendPass () {
    this.islogin.resetPass().subscribe((u) => {
      this.urlReset = u;
    });
  }
  showSuccess() {
    this.toastr.success('Email envoyé !', 'Message');
  }
  errorSuccess() {
    this.toastr.success('Mauvais email, veuillez entrer une adresse valide');
  }

  ngOnInit() {
  }

}
