import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { CarousselComponent } from './components/caroussel/caroussel.component';

@NgModule({
  declarations: [
    CardsComponent,
    CarousselComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class SharedModule { }
