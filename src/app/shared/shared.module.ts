import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { FeaturesModule } from '../features/features.module';
import { CardsAccueilComponent } from '../shared/components/cards-accueil/cards-accueil.component';
@NgModule({
  declarations: [
    CardsComponent,
    CardsAccueilComponent,
  ],
  imports: [
    FeaturesModule,
    CommonModule,
  ],
  exports: [
    CardsComponent,
    CardsAccueilComponent,
  ],
})
export class SharedModule { }
