import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CardsComponent,
    CarousselComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
})
export class SharedModule { }
