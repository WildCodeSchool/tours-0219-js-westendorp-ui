import { Component, OnInit, Input, EventEmitter, ViewChild, TemplateRef, Output } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-delete-cards',
  templateUrl: './modal-delete-cards.component.html',
  styleUrls: ['./modal-delete-cards.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class ModalDeleteCardsComponent implements OnInit {
  @ViewChild('content')
  public content: TemplateRef<any>;

  @Input()
  public openModalDelete: EventEmitter<boolean>;
  @Input()
  public closeModalDelete: EventEmitter<boolean>;
  @Input()
  public idCard: string
  @Input()
  public indexCard: number;
  @Output()
  public deleteCard: EventEmitter<any> = new EventEmitter();

  constructor(config: NgbModalConfig, private modalService: NgbModal, private toastr: ToastrService,) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  close(content) {
    this.modalService.dismissAll(content);
    this.toastr.error('Article non supprimé');
  }

  deleteOneCard(id, index){
    this.deleteCard.emit([id, index]);
  }

  ngOnInit() {
    if (this.openModalDelete) {
      this.openModalDelete.subscribe(data => {
        this.modalService.open(this.content);
      });
    }
    if (this.closeModalDelete) {
      this.closeModalDelete.subscribe(data => {
        this.modalService.dismissAll(this.content);
      });
    }
  }

}
