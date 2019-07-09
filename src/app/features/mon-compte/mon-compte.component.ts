import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/login.service';
import { Login } from '../../shared/models/login.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss'],
})
export class MonCompteComponent implements OnInit {
  hiddenFormMdp = false;
  nextFormMdp = true;
  submitFormMdp = true;
  hiddId = false;
  hiddMdp = false;
  hiddenFormId = false;
  showFormId = true;

  id: string;
  mdp: string;
  countMdp = 0;

  constructor(
    public service: LoginService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  newMdp(f) {
    this.service.login(f.value.email, f.value.password)
      .subscribe((data) => {
        if (data) {
          this.hiddenFormMdp = true;
          this.submitFormMdp = false;
          this.hiddId = true;
        }
      },
        (error: any) => this.showError());
  }

  updatePassWord(email: string, newPassword: string) {
    const content: Login = {
      email: email,
      password: newPassword,
    }
    this.service.updatePassWord(email, content).subscribe((newPass: Login) => {
      this.showSuccessMdp();
      this.router.navigateByUrl('admin');
    });
  }

  showSuccessMdp() {
    this.toastr.success('Votre mot de passe a été modifié');
  }

  showError() {
    this.toastr.error('Vos identifiants ne correspondent pas');
  }

  showSuccessId() {
    this.toastr.success('Votre identifiant a été modifié');
  }

  newId(g) {
    this.service.login(g.value.email, g.value.password)
      .subscribe((data) => {
        if (data) {
          this.hiddenFormId = true;
          this.showFormId = false;
          this.hiddMdp = true;
        }
      }, (error: any) => { this.showError(); });
  }

  updateId(id: string, content: Login) {
    this.service.updatePassWord(id, content).subscribe((newPass: Login) => {
      this.showSuccessId();
      this.router.navigateByUrl('admin');
    });
  }
  validatePassword(): ValidatorFn {
    return (control: AbstractControl) => {
      let isValid = false;
      if (control && control instanceof FormGroup) {
        let group = control as FormGroup;
        if (group.controls['passwordA'] && group.controls['passwordB']) {
          isValid = group.controls['passwordA'].value == group.controls['passwordB'].value;
        }
      }
      if (isValid) {
        return null;
      } else {
        return { 'passwordCheck': 'failed' }
      }
    }
  }

}
