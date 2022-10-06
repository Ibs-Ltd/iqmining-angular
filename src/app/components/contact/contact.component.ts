import { environment } from 'src/environments/environment.prod';
import { RestfulService, ToasterService } from 'src/app/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: any = {}

  constructor(private restfulService: RestfulService, private toastService: ToasterService) { }

  ngOnInit() {
  }

  submit() {
    this.restfulService.post(environment.endpoints.createContact, this.contact)
    .subscribe(res => {
      this.toastService.success(res.data.message, 'Success');
      this.contact = {}
    }, err => {
      this.toastService.error(err.error.message, 'Error!');
    })
  }

}
