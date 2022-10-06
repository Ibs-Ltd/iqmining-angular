import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }

  success(message: string, title?: string) {
    this.toastr.success(message || 'Success', title);
  }

  error(message: string, title?: string) {
    this.toastr.error(message || 'Something went wrong.', title);
  }

  warning(message: string, title?: string) {
    this.toastr.error(message, title);
  }

  info(message: string, title?: string) {
    this.toastr.error(message, title);
  }
}