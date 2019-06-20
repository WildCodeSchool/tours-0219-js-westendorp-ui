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
            this.countMdp += 1;
          }
        }
      });
  }

  updatePassWord(id: string, content: Login) {
    console.log(id, content);
    this.service.updatePassWord(id, content).subscribe((newPass) => {
      this.showSuccess();
      this.router.navigateByUrl('admin');
    });
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  newId(g) {
    console.log(g);
    this.service.login(g.value.email, g.value.password)
      .subscribe((data) => {
        if (data) {
          this.hiddenFormId = true;
          this.showFormId = false;
        }
      });
  }

  updateId(id: string, content: Login) {
    console.log(id, content);
    this.service.updatePassWord(id, content).subscribe((newPass: Login) => {
    });
  }
}
