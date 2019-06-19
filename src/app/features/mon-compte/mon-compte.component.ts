import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

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
    ) { }

  ngOnInit() {
  }

  newMdp(f) {
    console.log(f);
    this.service.login(f.value.email, f.value.mdp)
      .subscribe((data) => {
        if (data) {
          if (this.countMdp === 0) {
            this.hiddenFormMdp = true;
            this.nextFormMdp = false;
            this.countMdp += 1;
          } else if (this.countMdp === 1) {
            this.nextFormMdp = true;
            this.submitFormMdp = false;
          }
        }
      });
  }

  registerMdp() {

  }

  newId(g) {
    console.log(g);
    this.service.login(g.value.email, g.value.mdp)
      .subscribe((data) => {
        if (data) {
          this.hiddenFormId = true;
          this.showFormId = false;
        }
      });
  }

  registerID() {

  }
}
