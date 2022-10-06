import { environment } from './../../../environments/environment';
import { RestfulService, ToasterService } from './../../services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  packages: any[];
  profile: any = {files: ['', '']};
  passwords: any = {}
  allFiles = []
  page = 1

  constructor(private restfulService: RestfulService, private toastService: ToasterService) { }

  ngOnInit() {
    this.getMyPackages();
    this.getMyProfile();
  }

  getMyPackages(page?) {
    this.page = page || 1
    this.restfulService.get(environment.endpoints.myPackages + `?page=${this.page}&take=10`)
    .subscribe(res => {
      this.packages = res.data.data
    })
  }

  save() {
    if(this.allFiles.length) {
      this.allFiles[0] = this.allFiles[0] ? this.allFiles[0] : ''
      this.profile.files = this.allFiles
    }
    this.restfulService.patch(environment.endpoints.updateUser, this.profile)
    .subscribe(res => {
      if(res.success) {
        this.toastService.success(res.message, 'Success!')
        this.getMyProfile();
      }
    }, err => {
      this.toastService.error(err.error.message, 'Error!')
    })

  }

  openDialog(whichComponent) {
    if(whichComponent == 'passport')
      document.getElementById('passport-file').click()
    else
      document.getElementById('verification-file').click()
  }

  uploadFile(e, whichFile) {
    console.log(e, whichFile)
    const file = e.target.files[0]
    var fileSize = file.size / 1024
    if(fileSize > 10000) {
      this.toastService.error('Please select a file with maximum size of 10MB', 'Error!')
      return;
    }

    let formData = new FormData();
    formData.append('files', file)

    this.restfulService.post(environment.endpoints.uploadFile, formData)
    .subscribe(res => {
      if(res.success) {
        this.toastService.success(res.message, 'Success!')
        if(whichFile == 'passport') {
          this.allFiles[0] = res.data[0].file
        } else this.allFiles[1] = res.data[0].file
      }
    }, err => {
      this.toastService.error(err.error.message, 'Error!')
    })
  }

  getMyProfile() {
    this.restfulService.get(environment.endpoints.myProfile)
    .subscribe(res => {
      this.profile = res.data
      this.profile.files = (this.profile.files && this.profile.files.length) ? this.profile.files : []
      this.allFiles = this.profile.files
    }, err => {
      this.toastService.error(err.error.message)
    })
  }

  changePassword() {
    if(this.passwords.password != this.passwords.confirmPassword) {
      this.toastService.error('New password and confirm password dont match', 'Error!');
      return;
    }

    this.restfulService.patch(environment.endpoints.changePassword, {password: this.passwords.password})
    .subscribe(res => {
      if(res.success) {
        this.passwords = {}
        this.toastService.success(res.message, 'Success!')
      }
    }, err => {
      this.passwords = {}
      this.toastService.error(err.error.message, 'Error!')
    })
  }

}
