import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { routing } from './app-routing.module';
// used to create fake backend
import { fakeBackendProvider, JwtInterceptor } from './_helpers/index';

import { AppComponent } from './app.component';
import { AlertComponent } from './_directives';
import { AlertService, UserService } from './_services';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './omsComponents/home';
import { LoginComponent } from './omsComponents/login/index';
import { RegisterComponent } from './omsComponents/register/index';
import { OMSAuthGuard } from './_guards/index';
import { AuthenticationService } from './_services/index';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AlertService,
    OMSAuthGuard,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
