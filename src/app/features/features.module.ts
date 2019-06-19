import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualityComponent } from './actuality/actuality.component';
import { ProductsComponent } from './products/products.component';
import { ActivityComponent } from './activity/activity.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HomeComponent } from './home/home.component';
import { TechnicReglementationComponent } from './technic-reglementation/technic-reglementation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarousselComponent } from '../shared/components/caroussel/caroussel.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { EscapeHtmlPipe } from '../shared/pipes/keep-html.pipe';
import { CardsComponent } from '../shared/components/cards/cards.component';
import { CardsAccueilComponent } from '../shared/components/cards-accueil/cards-accueil.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
@NgModule({
  declarations: [ActualityComponent,
    ProductsComponent,
    ActivityComponent,
    PresentationComponent,
    HomeComponent,
    TechnicReglementationComponent,
    CarousselComponent,
    CardsComponent,
    CardsAccueilComponent,
    EscapeHtmlPipe,
    MonCompteComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    CoreModule,
    RouterModule,
  ],
})
export class FeaturesModule { }
