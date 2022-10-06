import { Router } from '@angular/router';
import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ToasterService, RestfulService, UtilityService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  auth: any = {};
  constructor(private restfulService: RestfulService,
    private toasterService: ToasterService,
    private router: Router,
    private utilityService: UtilityService) { }

  ngOnInit() {
  }

  login() {
    this.auth.email = this.auth.email.toLowerCase()
    this.restfulService.post(environment.endpoints.login, this.auth)
    .subscribe(response => {
      console.log(response)
      this.utilityService.setItem('token', response.data.token.accessToken)
      this.utilityService.setItem('user', JSON.stringify(response.data.user));
      this.toasterService.success('Login successfully', 'Success')
      if(response.data.user.role === 'ADMIN')
        this.router.navigate(['/admin/users'])
      else
        this.router.navigate(['/dashboard'])
      this.utilityService.updateHeaderData(true);
    }, err => {
      this.toasterService.error(err.error.message, 'Error!')
      this.utilityService.removeItem('token');
      this.utilityService.updateHeaderData(false);
    })
  }

}
