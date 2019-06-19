import { Component, OnInit } from '@angular/core';


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

  constructor() { }

  ngOnInit() {
  }

  nextMdp() {
    this.hiddenFormMdp = true;
    this.nextFormMdp = false;
  }

  validMdp() {
    this.nextFormMdp = true;
    this.submitFormMdp = false;
  }

  registerMdp() {

  }

  nextId() {
    this.hiddenFormId = true;
    this.showFormId = false;
  }

  registerID() {

  }
}
