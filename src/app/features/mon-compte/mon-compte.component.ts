import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { Login } from 'src/app/shared/models/login.model';
import { count } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
          console.log(f, f.value, f.value.mdp);
          if (this.countMdp === 0) {
            this.hiddenFormMdp = true;
            this.nextFormMdp = false;
            this.countMdp += 1;
          } else if (this.countMdp === 1) {
            this.nextFormMdp = true;
            this.submitFormMdp = false;
            this.hiddId = true;
            this.countMdp += 1;
          }
        }
      },         (error: any) => { this.showError(); });
  }

  updatePassWord(id: string, content: Login) {
    console.log(id, content);
    this.service.updatePassWord(id, content).subscribe((newPass: Login) => {
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
    console.log(g);
    this.service.login(g.value.email, g.value.password)
      .subscribe((data) => {
        if (data) {
          this.hiddenFormId = true;
          this.showFormId = false;
          this.hiddMdp = true;
        }
      },         (error: any) => { this.showError(); });
  }

  updateId(id: string, content: Login) {
    console.log(id, content);
    this.service.updatePassWord(id, content).subscribe((newPass: Login) => {
      this.showSuccessId();
      this.router.navigateByUrl('admin');
    });
  }
}
