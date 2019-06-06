import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ActualityComponent } from './actuality/actuality.component';
import { ProductsComponent } from './products/products.component';
import { ActivityComponent } from './activity/activity.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HomeComponent } from './home/home.component';
import { TechnicReglementationComponent } from './technic-reglementation/technic-reglementation.component';
import { LoginModalComponent } from './login-modal/login-modal.component';

@NgModule({
  declarations: [ActualityComponent,
    ProductsComponent,
    ActivityComponent,
    PresentationComponent,
    HomeComponent,
    TechnicReglementationComponent,
    LoginModalComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class FeaturesModule { }
