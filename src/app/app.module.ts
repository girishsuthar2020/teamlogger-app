import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CommonComponent } from './common/common.component';
import { CommonModule } from './common/common.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ResetPasswordComponent,
    HomepageComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
