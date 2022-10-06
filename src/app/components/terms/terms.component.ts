import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UtilityService } from 'src/app/services';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  currentLang = 'en'

  constructor(private translateService: TranslateService, private utilityService: UtilityService) {
    this.utilityService.updateLang.subscribe(res => {
      
      this.currentLang = this.utilityService.getItem('lang')
    })
   }

  ngOnInit() {
    window.scrollTo(0, 0)
  }

}
