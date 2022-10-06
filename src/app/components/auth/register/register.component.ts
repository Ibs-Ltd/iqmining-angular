import { Router, ActivatedRoute } from '@angular/router';
import { environment } from './../../../../environments/environment.prod';
import { RestfulService, ToasterService } from './../../../services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register: any = {}
  terms = false;
  confirmpolicy = false;
  risk = false;

  constructor(private restfulService: RestfulService,
    private toastService: ToasterService,
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.register.referralCode = this.activatedRoute.snapshot.queryParams.referral
  }

  registerForm() {
    const {firstName, lastName, phone, email, password, ...rest} = this.register
    if(!this.terms && !this.confirmpolicy && !this.risk) {
      this.toastService.warning('Please accept terms conditions, confirmation any risk policy', 'Warning');
      return;
    }
    if(!password || password.length < 6) {
      this.toastService.warning('Please enter password with minimum 6 charater length', 'Warning');
      return;
    }
    if(password !== this.register.confirmPassword) {
      this.toastService.warning('Confirm password and new password should be same', 'Warning')
      return;
    }
    let body = {firstName: firstName, lastName: lastName, phone: phone, email: email.toLowerCase(), password: password}
    this.restfulService.post(environment.endpoints.register, body)
    .subscribe(res => {
      this.toastService.success(res.message, 'Success')
      this.router.navigate(['/auth/login']);
      this.register = {}
    }, err => {
      this.toastService.error(err.error.message, 'Error')
      this.register.password = ''
      this.register.confirmPassword = ''
      this.register.email = ''
    })
  }

}
