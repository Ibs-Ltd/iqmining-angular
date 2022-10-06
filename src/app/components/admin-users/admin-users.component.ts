import { environment } from './../../../environments/environment';
import { RestfulService } from './../../services/restful/restful.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  users: any[];

  constructor(private restfulService: RestfulService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.restfulService.get(environment.endpoints.adminUsers)
    .subscribe(res => {
      this.users = res.data.data
    })
  }

}
