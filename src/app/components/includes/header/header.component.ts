import { Router, ActivatedRoute } from '@angular/router';
import { UtilityService } from './../../../services/utility/utility.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language: string = "Eng";
  eng: string = 'Eng';
  spe: string = 'Spa';
  token;
  user;
  network = 'Main'
  isAdmin: boolean;


  constructor(private translate: TranslateService,
    private utilityService: UtilityService,
    private activatedR: ActivatedRoute,
    private router: Router) {
    translate.setDefaultLang('en');
    console.log(this.activatedR)
    this.utilityService.updateHeader.subscribe(res => {
      if(res) {
        this.token = this.utilityService.getToken()
        this.user = this.utilityService.getItem('user') && JSON.parse(this.utilityService.getItem('user'))
        this.isAdmin = this.user.role.toLowerCase() === 'admin'
      } else {
        this.token = null
        this.isAdmin = false;
      }
    })
  }

  ngOnInit() {
    let lang = this.utilityService.getItem('lang')
    this.token = this.utilityService.getToken()
    let network = this.utilityService.getItem('network')
    lang ? this.translate.use(lang) : null
    this.language = lang == 'de' ? 'Ger' : 'Eng'
    this.network = network ? network : this.network

    this.user = this.utilityService.getItem('user') && JSON.parse(this.utilityService.getItem('user'))
    this.isAdmin = this.user && this.user.role.toLowerCase() === 'admin'

  }

  changelang(lang) {
    if (lang == 'spa') {
      return (this.language = 'Spa')
    } else if (lang == 'eng')
      return (this.language = 'Eng')
  }

  useLanguage(code, language: string): void {
    this.language = language;
    this.translate.use(code);
    this.utilityService.setItem('lang', code)
    this.utilityService.updateLangData(code)
  }

  logout() {
    this.utilityService.clearStorage();
    this.utilityService.updateHeaderData(false);
    this.router.navigate(['/home'])
  }

  useNetwork(d) {
    this.network = d;
    this.utilityService.setItem('network', this.network)
    this.utilityService.updateNetworkData(true)
    location.reload()
  }
}


