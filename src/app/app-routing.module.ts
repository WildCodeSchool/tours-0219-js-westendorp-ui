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
import { AuthGuard } from './core/guards/auth.guard';
import { AdminEditorComponent } from './core/admin-editor/admin-editor.component';
import { MonCompteComponent } from './features/mon-compte/mon-compte.component';
import { ResolverService } from './core/resolvers/resolver.service';

const routes: Routes = [

  {
    path: 'admin', canActivate: [AuthGuard], component: NavbarAdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
      {
        path: 'home', component: HomeComponent, canActivate: [AuthGuard],
        data: { query: 'home' },
        resolve: { articles: ResolverService },
      },
      {
        path: 'presentation', component: PresentationComponent, canActivate: [AuthGuard],
        data: { query: 'presentation' },
        resolve: { articles: ResolverService },
      },
      {
        path: 'techniques', component: TechnicReglementationComponent, canActivate: [AuthGuard],
        data: { query: 'technic-reglementation' },
        resolve: { articles: ResolverService },
      },
      {
        path: 'produits', component: ProductsComponent, canActivate: [AuthGuard],
        data: { query: 'products' },
        resolve: { articles: ResolverService },
      },
      {
        path: 'actualites', component: ActualityComponent, canActivate: [AuthGuard],
        data: { query: 'actuality' },
        resolve: { articles: ResolverService },
      },
      {
        path: 'activites', component: ActivityComponent, canActivate: [AuthGuard],
        data: { query: 'activity' },
        resolve: { articles: ResolverService },
      },
      { path: 'editor', component: AdminEditorComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: MonCompteComponent, canActivate: [AuthGuard] },
    ],

  },
  {
    path: '', component: HeaderComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home', component: HomeComponent,
        data: { query: 'home' },
        resolve: { articles: ResolverService },
      },
      {
        path: 'presentation', component: PresentationComponent,
        data: { query: 'presentation' },
        resolve: { articles: ResolverService },
      },
      {
        path: 'techniques', component: TechnicReglementationComponent,
        data: { query: 'technic-reglementation' },
        resolve: { articles: ResolverService },
      },
      {
        path: 'produits', component: ProductsComponent,
        data: { query: 'products' },
        resolve: { articles: ResolverService },
      },
      {
        path: 'actualites', component: ActualityComponent,
        data: { query: 'actuality' },
        resolve: { articles: ResolverService },
      },
      {
        path: 'activites', component: ActivityComponent,
        data: { query: 'activity' },
        resolve: { articles: ResolverService },
      },
      { path: 'login', component: LoginModalComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
