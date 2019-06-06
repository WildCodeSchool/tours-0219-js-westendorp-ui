import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModalComponent } from './features/login-modal/login-modal.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
   { path: 'login', component: LoginModalComponent },
   { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
