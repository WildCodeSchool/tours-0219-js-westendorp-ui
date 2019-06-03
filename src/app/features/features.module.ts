import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ActualityComponent } from './actuality/actuality.component';
import { ProductsComponent } from './products/products.component';
import { ActivityComponent } from './activity/activity.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HomeComponent } from './home/home.component';
import { TechnicReglementationComponent } from './technic-reglementation/technic-reglementation.component';
import { CarousselComponent } from '../shared/components/caroussel/caroussel.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { NavbarAdminComponent } from '../core/navbar-admin/navbar-admin.component';
import { CardsComponent } from '../shared/components/cards/cards.component';
import { FooterComponent } from '../core/footer/footer.component';

@NgModule({
  declarations: [ActualityComponent,
    ProductsComponent,
    ActivityComponent,
    PresentationComponent,
    HomeComponent,
    TechnicReglementationComponent,
    CarousselComponent,
    LoginModalComponent,
    NavbarAdminComponent,
    CardsComponent,
    FooterComponent],

  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class FeaturesModule { }
