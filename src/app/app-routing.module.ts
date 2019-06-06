import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModalComponent } from './features/login-modal/login-modal.component';
import { HomeComponent } from './features/home/home.component';
import { PresentationComponent } from './features/presentation/presentation.component';
import { TechnicReglementationComponent } from './features/technic-reglementation/technic-reglementation.component';
import { ProductsComponent } from './features/products/products.component';
import { ActualityComponent } from './features/actuality/actuality.component';
import { ActivityComponent } from './features/activity/activity.component';

const routes: Routes = [
  { path: 'login', component: LoginModalComponent },
  { path: '', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'techniques', component: TechnicReglementationComponent },
  { path: 'produits', component: ProductsComponent },
  { path: 'actualites', component: ActualityComponent },
  { path: 'activites', component: ActivityComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
