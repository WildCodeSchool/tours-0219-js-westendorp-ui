import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AdminEditorComponent } from '../features/admin-editor/admin-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    NavbarAdminComponent,
    FooterComponent,
    HeaderComponent,
    LoginModalComponent,
    AdminEditorComponent,

  ],
  imports: [
    NgbModule,
    RouterModule,
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
    CKEditorModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AdminEditorComponent,
  ],
})
export class CoreModule { }
