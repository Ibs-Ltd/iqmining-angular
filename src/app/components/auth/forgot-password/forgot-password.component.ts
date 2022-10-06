import { Router } from '@angular/router';
import { environment } from './../../../../environments/environment.prod';
import { RestfulService, ToasterService } from './../../../services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email;

  constructor(private restfulService: RestfulService,
    private toastService: ToasterService,
    private router: Router) { }

  ngOnInit() {
    
  }

  forgot() {
    if(!this.email || !this.email.length) {
      this.toastService.error('Please enter your email id', 'Error')
      return;
    }
    this.restfulService.post(environment.endpoints.forgotPassword, {email: this.email.toLowerCase()})
    .subscribe(res => {
      this.toastService.success(res.message, 'Success!')
      this.email = ''
    }, err => {
      this.toastService.error(err.error.message, 'Error!')
    })
  }

}
