import { Component, OnInit, ɵConsole } from '@angular/core';
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
              private toastr: ToastrService,
              private checkemail: LoginService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  close(content){
    this.modalService.dismissAll(content);
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
          this.showSuccessLog();
          this.router.navigateByUrl('admin');
          this.modalService.dismissAll();
        },
        (error: any) => { this.showError(); });
  }

  showSuccessLog() {
    this.toastr.success('Vous êtes connecté(e)');
  }

  showError() {
    this.toastr.error('identifiants incorrects');
  }

  checkMail(g) {
    this.islogin.checkemail(g.value.email)
    .subscribe(
      (data: string) => {
        if (data) {
          this.checkemail.checkemail(data);
          this.sendPass(g);
          this.showSuccess();
        }
      },
      (error: any) => {
        this.errorSuccess();
      },
    );

  }

  sendPass(g) {
    this.islogin.resetPass(g.value.email).subscribe((u) => {
      this.urlReset = u;
    });
  }
  showSuccess() {
    this.toastr.success('Email envoyé !', 'Message');
  }

  errorSuccess() {
    this.toastr.warning('Mauvais email, veuillez entrer une adresse valide');
  }

  ngOnInit() {
  }

}
