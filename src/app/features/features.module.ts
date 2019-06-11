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

@NgModule({
  declarations: [ActualityComponent,
    ProductsComponent,
    ActivityComponent,
    PresentationComponent,
    HomeComponent,
    TechnicReglementationComponent,
    CarousselComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
  ],
})
export class FeaturesModule { }
