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
              private toastr: ToastrService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  close(content) {
    this.modalService.dismissAll(content);
  }

  hiddenForm() {
    this.hidden = !this.hidden;
    this.show = !this.show;
  }

  onSubmit(f: NgForm) {
    this.islogin.login(f.value.email, f.value.mdp)
      .subscribe(
        (data) => {
          this.showSuccessLog();
          this.router.navigateByUrl('admin');
          this.modalService.dismissAll();
        }, (error: any) => { this.showError(); });
  }

  showSuccessLog() {
    this.toastr.success('Vous êtes connecté(e)');
  }

  showError() {
    this.toastr.error('identifiants incorrects');
  }

  ngOnInit() {
  }

}
