import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CoreModule,
    FeaturesModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-top-center',
      preventDuplicates: false,
    }),
    JwtModule.forRoot({
      config: {
        whitelistedDomains: ['http://localhost:3000'],
        tokenGetter: () => {
          return sessionStorage.getItem('token');
        },
      },
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent],
})
export class AppModule { }
