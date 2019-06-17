import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { FeaturesModule } from '../features/features.module';

@NgModule({
  declarations: [
    CardsComponent,
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
