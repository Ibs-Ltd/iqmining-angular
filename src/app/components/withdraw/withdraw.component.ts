import { UtilityService } from './../../services/utility/utility.service';
import { environment } from './../../../environments/environment';
import { RestfulService, ToasterService } from './../../services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
  btcAddress;
  btcRegex = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;
  withdrawHistory : any[]
  page = 1;
  userBalance;

  constructor(private restfulService: RestfulService, private toastService: ToasterService, private utilityService: UtilityService) { }

  ngOnInit() {
    this.getWithdraw()
    this.userBalance = JSON.parse(this.utilityService.getItem('user')).totalBalance
  }

  submitWithdraw() {
    if(!this.btcAddress || !this.btcRegex.test(this.btcAddress)) {
      this.toastService.error('Please enter valid address', 'Error!')
      return;
    }

    this.restfulService.post(environment.endpoints.withdraw, {address: this.btcAddress})
    .subscribe(res => {
      // this.withdrawHistory = res.data
      this.toastService.success(res.message, 'Success!')
      this.getWithdraw()
      this.btcAddress = ''
    }, err => {
      this.toastService.error(err.error.message, 'Error!')
      this.btcAddress = ''
    })
  }

  getWithdraw(page?) {
    this.page = page || 1
    this.restfulService.get(environment.endpoints.getWithdraw + `?page=${this.page}&take=10`)
    .subscribe(res => {
      this.withdrawHistory = res.data.data
    })

  }

}
