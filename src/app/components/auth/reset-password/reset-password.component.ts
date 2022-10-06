import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from './../../../services/utility/utility.service';
import { ToasterService } from './../../../services/toaster/toaster.service';
import { environment } from './../../../../environments/environment.prod';
import { RestfulService } from './../../../services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  newPassword;
  confirmPassword;

  constructor(private restfulService: RestfulService, private toaster: ToasterService,
    private utilityService: UtilityService,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService,
    private router: Router) { }

  ngOnInit() {
  }

  resetPassword() {
    if(!this.newPassword || this.newPassword.length < 6) {
      this.toaster.warning('Please enter password with minimum 6 charater length', 'Warning');
      return;
    }
    if(this.confirmPassword !== this.newPassword) {
      this.toaster.warning('Confirm password and new password should be same', 'Warning')
      return;
    }
    if(!this.confirmPassword || !this.newPassword) return;
    let body = {password: this.newPassword}
    let params = {'Authorization': `Bearer ${this.activatedRoute.snapshot.queryParams.token.toString()}`, 'Accept-Language': this.translateService.store.currentLang || 'en'}
    this.utilityService.setItem('token', this.activatedRoute.snapshot.queryParams.token.toString())
    this.restfulService.patch(environment.endpoints.resetPassword, body, true, params)
    .subscribe(res => {
      this.utilityService.removeItem('token')
      this.toaster.success(res.message, 'Success!');
      this.newPassword = ''
      this.confirmPassword = ''
      this.router.navigate(['/auth/login'])
    }, err => {
      this.toaster.error(err.error.message, 'Error!')
    })
  }

}
