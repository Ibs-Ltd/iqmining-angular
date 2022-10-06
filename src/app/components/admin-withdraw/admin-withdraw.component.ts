import { ToasterService } from './../../services/toaster/toaster.service';
import { environment } from './../../../environments/environment';
import { RestfulService } from 'src/app/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-withdraw',
  templateUrl: './admin-withdraw.component.html',
  styleUrls: ['./admin-withdraw.component.scss']
})
export class AdminWithdrawComponent implements OnInit {
  withdrawList: any;

  constructor(private restfulService: RestfulService, private toasterService: ToasterService) { }

  ngOnInit() {
    this.getWithdrawList();
  }

  getWithdrawList(page?) {
    this.restfulService.get(environment.endpoints.adminWithdraw)
    .subscribe(res => {
      this.withdrawList = res.data.data;
    })
  }

  updateStatus(status, withdraw) {
    this.restfulService.patch(environment.endpoints.updateWithdraw + `/${withdraw.id}`, {status: status})
    .subscribe(res => {
      this.getWithdrawList();
      this.toasterService.success(res.message, 'Success!')
    }, err => {
      this.toasterService.error(err.error.message, 'Error!')
    })
  }

}
