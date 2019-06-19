import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualityComponent } from './actuality/actuality.component';
import { ProductsComponent } from './products/products.component';
import { ActivityComponent } from './activity/activity.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HomeComponent } from './home/home.component';
import { TechnicReglementationComponent } from './technic-reglementation/technic-reglementation.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MonCompteComponent } from './mon-compte/mon-compte.component';

@NgModule({
  declarations: [ActualityComponent,
    ProductsComponent,
    ActivityComponent,
    PresentationComponent,
    HomeComponent,
    TechnicReglementationComponent,
    MonCompteComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoreModule,
    RouterModule,
  ],
})
export class FeaturesModule { }
