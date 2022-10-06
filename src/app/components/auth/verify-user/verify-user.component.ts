import { UtilityService } from './../../../services/utility/utility.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from './../../../../environments/environment.prod';
import { RestfulService, ToasterService } from './../../../services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.scss']
})
export class VerifyUserComponent implements OnInit {

  constructor(private restfulService: RestfulService,
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private utilityService: UtilityService,
    private toaster: ToasterService,
    private router: Router) {
      
   }

  ngOnInit() {
    let body = {}

    let params = {'Authorization': `Bearer ${this.activatedRoute.snapshot.queryParams.token.toString()}`, 'Accept-Language': this.translateService.store.currentLang || 'en'}
    this.utilityService.setItem('token', this.activatedRoute.snapshot.queryParams.token.toString())

    this.restfulService.post(environment.endpoints.verifyUser, body, true, params)
    .subscribe(res => {
      this.utilityService.removeItem('token')
      this.toaster.success(res.message, 'Success');
      this.router.navigate(['/auth/login'])
    }, err => {
      this.toaster.error(err.error.message, 'Error!')
    })
  }

}
