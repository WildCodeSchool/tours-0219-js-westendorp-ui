import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModalComponent } from './core/login-modal/login-modal.component';
import { HomeComponent } from './features/home/home.component';
import { PresentationComponent } from './features/presentation/presentation.component';
import { TechnicReglementationComponent } from './features/technic-reglementation/technic-reglementation.component';
import { ProductsComponent } from './features/products/products.component';
import { ActualityComponent } from './features/actuality/actuality.component';
import { ActivityComponent } from './features/activity/activity.component';
import { NavbarAdminComponent } from './core/navbar-admin/navbar-admin.component';
import { HeaderComponent } from './core/header/header.component';

const routes: Routes = [

  {
    path: 'admin', component: NavbarAdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'presentation', component: PresentationComponent },
      { path: 'techniques', component: TechnicReglementationComponent },
      { path: 'produits', component: ProductsComponent },
      { path: 'actualites', component: ActualityComponent },
      { path: 'activites', component: ActivityComponent },
    ],

  },
  {
    path: '', component: HeaderComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'presentation', component: PresentationComponent },
      { path: 'techniques', component: TechnicReglementationComponent },
      { path: 'produits', component: ProductsComponent },
      { path: 'actualites', component: ActualityComponent },
      { path: 'activites', component: ActivityComponent },
      { path: 'login', component: LoginModalComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
