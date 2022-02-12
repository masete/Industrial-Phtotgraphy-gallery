import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgottenPasswordComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
