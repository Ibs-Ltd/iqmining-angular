import { TranslateModule } from '@ngx-translate/core';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent, LoaderComponent } from 'src/app/components';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    HighchartsChartModule,
    NgxPaginationModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: [
    //modules
    TranslateModule,
    RouterModule,
    HighchartsChartModule,
    NgxPaginationModule,

    //components
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
