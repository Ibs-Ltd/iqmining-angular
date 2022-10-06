import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { RestfulService, ToasterService, UtilityService } from 'src/app/services';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard: any = {};

  constructor(private restfulService: RestfulService, private toastService: ToasterService, private http: HttpClient, private utilityService: UtilityService, private router: Router) { }

  ngOnInit() {
    this.getDashboard();
    this.utilityService.setViewPort(null)
  }

  getDashboard() {
    this.restfulService.get(environment.endpoints.dashboard)
    .subscribe(res => {
      this.dashboard = res.data
      this.dashboard.weeklyIncome = (this.dashboard.dailyIncome*7).toFixed(4)
      this.dashboard.monthlyIncome = (this.dashboard.dailyIncome*30).toFixed(4)
      this.dashboard.annualIncome = (this.dashboard.dailyIncome*365).toFixed(4)
      this.dashboard.incomePerHash = this.dashboard.totalHashRate ? (this.dashboard.dailyIncome/this.dashboard.totalHashRate).toFixed(4) : 0
      this.dashboard.dailyIncome = this.dashboard.dailyIncome.toFixed(4)
      this.convertToBtc(this.dashboard);
    }, err => {
      this.toastService.error(err.error.message, 'Error!')
    })
  }

  changePlan(plan) {
    this.restfulService.get(environment.endpoints.hashRate + plan)
    .subscribe(res => {
      this.dashboard.totalHashRate = res.data
    })
  }

  convertToBtc(dashboard) {
    for(let d in dashboard) {
      if(d != 'userBalances' && d != 'totalHashRate') {
        this.http.get('https://blockchain.info/tobtc?currency=USD&value=' + dashboard[d])
        .subscribe(res => {
          this.dashboard[`${d}Btc`] = res
        })
      }
    }
    // return 0
  }

  navigateToBuyMore() {
    this.utilityService.setViewPort('buy-now')
    this.router.navigate(['/home'])
  }

}
