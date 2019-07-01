import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardsAccueilComponent } from './components/cards-accueil/cards-accueil.component';
import { RouterModule } from '@angular/router';
import { RankingButtonComponent } from './components/ranking-button/ranking-button.component';
import { RankingValidatorDirective } from './directives/ranking-validator.directive';
@NgModule({
  declarations: [
    EscapeHtmlPipe,
    CarousselComponent,
    CardsComponent,
    CardsAccueilComponent,
    RankingButtonComponent,
    RankingValidatorDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
  ],
  exports: [
    EscapeHtmlPipe,
    CarousselComponent,
    CardsComponent,
    CardsAccueilComponent,
    RankingButtonComponent,
  ],
})
export class SharedModule { }
