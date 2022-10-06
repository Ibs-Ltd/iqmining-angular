import { environment } from './../../../environments/environment';
import { RestfulService } from './../../services/restful/restful.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-purchase',
  templateUrl: './admin-purchase.component.html',
  styleUrls: ['./admin-purchase.component.scss']
})
export class AdminPurchaseComponent implements OnInit {
  page = 1;
  packages: any;
  constructor(private restfulService: RestfulService) { }

  ngOnInit() {
    this.getPurchaseList()
  }

  getPurchaseList(page?) {
    this.page = page || 1
    this.restfulService.get(environment.endpoints.adminPurchase + `?page=${this.page}&take=10&order=DESC&sortBy=createdAt&status=ACTIVE`)
    .subscribe(res => {
      this.packages = res.data.data
    })
  }

}
