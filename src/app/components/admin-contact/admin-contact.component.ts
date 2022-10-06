import { environment } from 'src/environments/environment.prod';
import { RestfulService, ToasterService } from 'src/app/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss']
})
export class AdminContactComponent implements OnInit {

  concerns: any = []

  constructor(private restfulService: RestfulService, private toast: ToasterService) { }

  ngOnInit() {
    this.getConcerns();
  }

  getConcerns() {
    this.restfulService.get(environment.endpoints.getConcerns)
    .subscribe(res => {
      this.concerns = res.data.data
    }, err => {
      this.toast.error(err.error.message, 'Error!')
    })
  }

  updateStatus(status, item) {
    this.restfulService.patch(environment.endpoints.updateContact + `/${item.id}`, {
      "status" : status.toUpperCase()
    }).subscribe(res => {
      if(res.success) {
        this.toast.success(res.message, 'Success!');
        this.getConcerns()
      }
    }, err => {
      this.toast.error(err.error.message, 'Error!')
    })
  }

}
