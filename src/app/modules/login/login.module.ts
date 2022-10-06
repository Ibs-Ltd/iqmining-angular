import { ResetPasswordComponent } from './../../components/auth/reset-password/reset-password.component';
import { VerifyUserComponent } from './../../components/auth/verify-user/verify-user.component';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from './../shared/shared.module';
import { LoginComponent, RegisterComponent, ForgotPasswordComponent } from '../../components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent, VerifyUserComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    LoginRoutingModule
  ],
  exports: [RegisterComponent, LoginComponent, ForgotPasswordComponent, VerifyUserComponent, ResetPasswordComponent]
})
export class LoginModule { }
