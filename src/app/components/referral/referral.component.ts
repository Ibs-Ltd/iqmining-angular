import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NotificationService, UtilityService, ToasterService } from '../../services';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})

export class ReferralComponent implements OnInit {
  urlToCopy: string = ''
  referralLink;


  title = 'toaster-not';

  constructor(private utilityService: UtilityService, private router: Router, private toastService: ToasterService) { }

  ngOnInit() {
    // console.log(this.utilityService.getItem('user'))
    this.urlToCopy = this.utilityService.getItem('user') && JSON.parse(this.utilityService.getItem('user')).referralCode;
    this.referralLink = `http://ec2-35-182-218-180.ca-central-1.compute.amazonaws.com/auth/register?referral=${this.urlToCopy}`
  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    alert('URL Copied!')
  }

  copied(e) {
    // console.log(e)
    if(e.isSuccess) {
      // this.referralLink =  `http://ec2-35-182-218-180.ca-central-1.compute.amazonaws.com/auth/register?referral=${e.content}`
      this.toastService.success('Link copied', 'Success!')
    }
  }

  redirect() {
    this.router.navigate(['auth/register'], { queryParams: { referral: this.urlToCopy } })
  }
}
