import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { FeaturesModule } from '../features/features.module';
import { RankingArrayComponent } from './ranking-array/ranking-array.component';

@NgModule({
  declarations: [
    CardsComponent,
    RankingArrayComponent,
  ],
  imports: [
    FeaturesModule,
    CommonModule,
  ],
  exports: [
    CardsComponent,
  ],
})
export class SharedModule { }
