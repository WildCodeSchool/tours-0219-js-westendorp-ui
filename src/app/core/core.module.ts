import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarAdminComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class CoreModule { }
