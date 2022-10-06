import { UtilityService } from 'src/app/services';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  currentLang = 'en'

  constructor(private translateService: TranslateService, private utilityService: UtilityService) {
    this.utilityService.updateLang.subscribe(res => {
      
      this.currentLang = this.utilityService.getItem('lang')
    })
   }

  ngOnInit() {
    window.scrollTo(0, 0)
    // console.log(this.currentLang)
  }

}
