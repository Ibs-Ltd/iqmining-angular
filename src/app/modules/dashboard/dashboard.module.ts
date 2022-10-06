import { FormsModule } from '@angular/forms';
import { HighchartsChartComponent } from 'highcharts-angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent, IncomeChartComponent, ReferralComponent,
  WithdrawComponent, } from '../../components'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/interceptors/token.interceptor';
import { ClipboardModule } from 'ngx-clipboard';



@NgModule({
  declarations: [DashboardComponent, IncomeChartComponent, ReferralComponent,
    WithdrawComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ClipboardModule,
    DashboardRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  exports: [DashboardComponent, IncomeChartComponent, ReferralComponent,
    WithdrawComponent],
})
export class DashboardModule { }
