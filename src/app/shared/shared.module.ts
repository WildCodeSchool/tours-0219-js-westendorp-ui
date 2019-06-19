import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { RankingArrayComponent } from './components/ranking-array/ranking-array.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardsAccueilComponent } from './components/cards-accueil/cards-accueil.component';
@NgModule({
  declarations: [
    EscapeHtmlPipe,
    CarousselComponent,
    CardsComponent,
    RankingArrayComponent,
    CardsAccueilComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [
    EscapeHtmlPipe,
    CarousselComponent,
    CardsComponent,
    RankingArrayComponent,
    CardsAccueilComponent,
  ],
})
export class SharedModule { }
