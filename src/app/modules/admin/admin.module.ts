import { AdminContactComponent } from './../../components/admin-contact/admin-contact.component';
import { AdminUsersComponent, AdminPurchaseComponent, AdminWithdrawComponent } from './../../components';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/interceptors/token.interceptor';



@NgModule({
  declarations: [AdminPurchaseComponent, AdminUsersComponent, AdminWithdrawComponent, AdminContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
})
export class AdminModule { }
