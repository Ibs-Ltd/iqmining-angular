import { HttpClientModule } from '@angular/common/http';
import {  } from './../../components/terms/terms.component';
import {  } from './../../components/privacy/privacy.component';
import { NgbActiveModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent, ContactComponent, AboutComponent, MiningContractTableComponent, MainComponent, TermsComponent, PrivacyComponent } from '../../components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [HomeComponent, AboutComponent, MiningContractTableComponent, MainComponent, PrivacyComponent,
    TermsComponent, ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    QRCodeModule,
    ClipboardModule,
    HomeRoutingModule,
  ],
  exports: [HomeComponent, AboutComponent, MiningContractTableComponent, PrivacyComponent,
    TermsComponent, ContactComponent]
})
export class HomeModule { }
