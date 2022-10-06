import { HttpClient } from '@angular/common/http';
import { UtilityService } from './../../services/utility/utility.service';
import { environment } from './../../../environments/environment';
import { RestfulService, ToasterService } from './../../services';
import { Component, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  miningCalculator: any = {daily: 0, monthly: 0, yearly: 0, power: 0, yearlyPower: 0}
  validities = [{name: '1 year', year: 1}, {name: '2 years', year: 2}, {name: '5 years', year: 5}]
  contracts = ['SHA-256', 'SHA-256 Pro', 'SHA-256 BCH', 'Ethereum']
  contract = 'SHA-256';
  validity = 1;
  amount = '1000'
  calculatorTouched;
  cryptoNews: Object;

  @HostListener('keydown', ['$event'])
  onKeyDown($event) {
    // console.log($event)
    if(this.calculatorTouched && $event.code == 'Enter') {
      this.calculate()
    }
  }


  constructor(private translate: TranslateService,
    private restfulService: RestfulService,
    private _renderer2: Renderer2, 
    private toastrService: ToasterService,
    private viewportScroller: ViewportScroller,
    private utilityService: UtilityService,
    private http: HttpClient,
        @Inject(DOCUMENT) private _document: Document
    
    ) {
    translate.setDefaultLang('en');
      


}

  ngOnInit() {
    let script = this._renderer2.createElement('script');
        script.type = `text/javascript`;
        script.text = `
       
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/6103d03c649e0a0a5cceaa19/1fbrearnk';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        
        `;

        this._renderer2.appendChild(this._document.body, script);
        parseFloat(this.amount) > 0 ? this.calculate() : null;
        // this.viewportScroller.scrollToAnchor('buy-now');
        // this.getCryptoNews();
    
  }

  getCryptoNews() {
    this.http.get('https://cryptopanic.com/api/v1/posts/?auth_token=a5b01c39df4d8709b721ce6ef239db52a51c4d7c&public=true').subscribe(res => {
      console.log(res);
      this.cryptoNews = res
    })
  }

  ngAfterViewChecked() {
    let viewPort = this.utilityService.getViewPort()
    viewPort ? this.viewportScroller.scrollToAnchor(viewPort) : null;
    setTimeout(() => this.utilityService.setViewPort(null), 1000)
  }

  calculate() {
    this. miningCalculator = {daily: 0, monthly: 0, yearly: 0, power: 0}
    // if(!this.amount.includes('$')){
    //   this.toastrService.error('Please add currency unit at last. Example: "1000$"', 'Error!')
    //   return;
    // }
    let amount = parseFloat(this.amount)
    if(!amount) {
      
      return;
    }
    let dailyFormula;
    let additional:any
    let percentage: any;
    
    switch (this.contract) {
      case "SHA-256":
        this.miningCalculator.yearlyPower = (amount*19.31)
        percentage = (amount/100000)
        additional = (this.parse(this.miningCalculator.yearlyPower*this.validity)*this.parse(percentage))
        this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower*this.validity) + this.parse(additional)

        if(this.validity > 1) {
          additional = (this.parse(this.miningCalculator.yearlyPower)*this.parse(percentage))
          this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower) + this.parse(additional)
        }


        this.miningCalculator.daily = (this.miningCalculator.power*0.242867/1000)
        if(this.validity > 1) {
          let b = this.miningCalculator.daily/100
          this.miningCalculator.daily = this.miningCalculator.daily/this.validity + (b*5)
        }
        this.miningCalculator.power = (this.parse(this.miningCalculator.yearlyPower*this.validity) + this.parse(additional)).toFixed(4)
        break;

      case "SHA-256 Pro":
        this.miningCalculator.yearlyPower = (amount*16.735)
        percentage = (amount/100000)
        additional = (this.parse(this.miningCalculator.yearlyPower*this.validity)*this.parse(percentage))
        this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower*this.validity) + this.parse(additional)

        if(this.validity > 1) {
          additional = (this.parse(this.miningCalculator.yearlyPower)*this.parse(percentage))
          this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower) + this.parse(additional)
        }
        this.miningCalculator.daily = (this.miningCalculator.power*0.242867/1000)
        if(this.validity > 1) {
          let b = this.miningCalculator.daily/100
          this.miningCalculator.daily = this.miningCalculator.daily/this.validity + (b*5)
        }
        this.miningCalculator.power = (this.parse(this.miningCalculator.yearlyPower*this.validity) + this.parse(additional)).toFixed(4)
        break;
      
      case "SHA-256 BCH":
        this.miningCalculator.yearlyPower = (amount*17.25)
        percentage = (amount/100000)
        additional = (this.parse(this.miningCalculator.yearlyPower*this.validity)*this.parse(percentage))
        this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower*this.validity) + this.parse(additional)

        if(this.validity > 1) {
          additional = (this.parse(this.miningCalculator.yearlyPower)*this.parse(percentage))
          this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower) + this.parse(additional)
        }
        this.miningCalculator.daily = (this.miningCalculator.power*0.242867/1000)
        if(this.validity > 1) {
          let b = this.miningCalculator.daily/100
          this.miningCalculator.daily = this.miningCalculator.daily/this.validity + (b*5)
        }
        this.miningCalculator.power = (this.parse(this.miningCalculator.yearlyPower*this.validity) + this.parse(additional).toFixed(4))
        break;

      case "Ethereum":
        this.miningCalculator.yearlyPower = ((amount*0.000058)+0.01)
        percentage = (amount/100000)
        additional = (this.parse(this.miningCalculator.yearlyPower*this.validity)*this.parse(percentage))
        this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower*this.validity) + this.parse(additional)

        if(this.validity > 1) {
          additional = (this.parse(this.miningCalculator.yearlyPower)*this.parse(percentage))
          this.miningCalculator.power = this.parse(this.miningCalculator.yearlyPower) + this.parse(additional)
        }
        this.miningCalculator.daily = (this.miningCalculator.power*56.72)
        if(this.validity > 1) {
          let b = this.miningCalculator.daily/100
          this.miningCalculator.daily = this.miningCalculator.daily/this.validity + (b*5)
        }
        this.miningCalculator.power = (this.parse(this.miningCalculator.yearlyPower*this.validity) + this.parse(additional)).toFixed(4)
        break;
    }
    this.miningCalculator.monthly = (this.parse(this.miningCalculator.daily)*30).toFixed(4)
    this.miningCalculator.yearly = (this.parse(this.miningCalculator.monthly)*12).toFixed(4)
    this.miningCalculator.daily = this.miningCalculator.daily.toFixed(4)
    this.calculatorTouched = false;
    
  }

  parse(number) {
    return parseFloat(number)
  }

  selectChanged(e) {
    // console.log(e)
    this.calculatorTouched = true;
    parseFloat(this.amount) > 0 ? this.calculate() : null;
  }

  scrollToCalc(e) {
    this.viewportScroller.scrollToAnchor('mining-calculator');
  }

  navigateToId() {
    this.viewportScroller.scrollToAnchor('buy-now');
  }

}
