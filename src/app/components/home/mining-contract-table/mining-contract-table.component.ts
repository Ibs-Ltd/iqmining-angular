import { AppConfig } from "./../../../config/app-config";
import { Router } from "@angular/router";
import {
  RestfulService,
  UtilityService,
  ToasterService,
} from "./../../../services";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable, interval, Subscription } from "rxjs";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: "app-mining-contract-table",
  templateUrl: "./mining-contract-table.component.html",
  styleUrls: ["./mining-contract-table.component.scss"],
})
export class MiningContractTableComponent implements OnInit {
  @ViewChild("buyPackage", { static: false })
  buyPackageContent: TemplateRef<any>;
  @ViewChild("transaction", { static: false })
  transactionTemplate: TemplateRef<any>;
  @Output() miningCalculatorEmitter = new EventEmitter<any>();
  packages = { oneYear: [], twoYear: [], fiveYear: [], lifetimeYear: [] };
  contractYear = "One";
  selectedPackage;
  // fees;
  transactionData;
  transactionSuccess;
  showPaymentDiv;
  time;
  buyContract: any = {};
  coins: any = [
    { name: "LTCT", key: "ltct" },
    { key: "visa", name: "visa" },
    { key: "bitcoin", name: "bitcoin" },
    {
      key: "altcoins",
      name: "Altcoins",
      coins: [
        { name: "ethereum" },
        { name: "litecoin" },
        { name: "dash" },
        { name: "zcash" },
      ],
    },
    {
      key: "stablecoins",
      name: "Stablecoins",
      coins: [{ name: "USDT" }, { name: "TUSD" }, { name: "USDC" }],
    },
  ];
  selectedCoin: any;
  buyNowDiv;
  timerSub: Subscription;
  network;
  miningCalculator: any = {
    daily: 0,
    monthly: 0,
    yearly: 0,
    power: 0,
    yearlyPower: 0,
  };
  windowSize: number;
  lang;

  constructor(
    private restfulService: RestfulService,
    private utilityService: UtilityService,
    private router: Router,
    private toast: ToasterService,
    private ngbModal: NgbModal,
    private viewportScroller: ViewportScroller,
    public activeModal: NgbActiveModal
  ) {
    this.utilityService.updateNetwork.subscribe((res) => {
      if (res) this.network = this.utilityService.getItem("network");
    });
  }

  ngOnInit() {
    this.getContract(this.contractYear);

    this.network = this.utilityService.getItem("network");
    this.lang = this.utilityService.getItem('lang')

    console.log(this.lang)
  }

  ngAfterViewChecked() {
    this.windowSize = window.innerWidth;
  }
  startTimer() {
    var timer = 1800;
    var minutes;
    var seconds;

    this.timerSub = interval(1000).subscribe((x) => {
      minutes = Math.floor(timer / 60);
      seconds = Math.floor(timer % 60);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      this.time = minutes + ":" + seconds;

      --timer;
      if (timer < 0) {
        console.log("timer is ended");
        this.transactionSuccess = false;
        this.showPaymentDiv = false;
      }
      // console.log(this.time)
    });
  }

  getContract(contract) {
    this.restfulService
      .get(environment.endpoints.rootPackages + contract)
      .subscribe((res) => {
        this.packages[this.contractYear.toLowerCase() + "Year"] = res.data.map(
          (it) => {
            let name = it.name.split(" ").join("-");
            it = {
              ...it,
              className: `package-name-${name}`,
              investmentAmount: "1000",
            };
            this.calculate(it);
            return it;
          }
        );
      });
  }

  buyNow(data) {
    this.selectedPackage = data;
    this.transactionSuccess = false;
    this.showPaymentDiv = false;
    this.time = null;
    if (this.utilityService.getToken()) {
      this.buyContract = { payBy: "LTCT" };
      // this.ngbModal.open(this.buyPackageContent, {size: 'lg', backdrop: 'static'})
      // this.buyNowDiv = true;
      this.submit();
      setTimeout(() => this.navigateToHash(), 0);
    } else {
      this.buyNowDiv = false;

      if(this.lang == "de") {
        this.toast.error("Pitte einloggen zum Fortfahren", "Fehler!")
      } else {
        this.toast.error("Please Login First", "Error!");
      }

      this.router.navigate(["/auth/login"]);
    }
  }

  submit() {
    // if(!this.buyContract.units) {
    //   this.toast.error('Please enter some units to buy', 'Error!')
    //   return;
    // }
    if (!this.buyContract.payBy) {

      if(this.lang == "de") {
        this.toast.error("Bitte wählen Sie ein Zahlungsmittel aus", "Fehler!");
      } else {
        this.toast.error("Please select some pay medium", "Error!");
      }

      return;
    }
    this.restfulService
      .post(environment.endpoints.purchasePackage, {
        packageId: this.selectedPackage.id
      })
      .subscribe(
        (res) => {

          //this.network == "test" ? this.approve() : null;
          if(this.network == "test") {
            this.approveTestPackage();
            return;
          }

          // this.toast.success(res.message, 'Success!')
          let purchasePackageId = res.data.purchasedPackageId;
          this.buyContract.payBy = "LTCT";
          this.restfulService
            .post(environment.endpoints.createTransaction, {
              purchasedPackageId: purchasePackageId,
              currency: this.buyContract.payBy,
            })
            .subscribe(
              (res) => {
                this.transactionData = res.data;
                this.transactionSuccess = true;
                this.buyNowDiv = false;
                this.timerSub && this.timerSub.unsubscribe();
                this.startTimer();
                // this.toast.success(res.message, 'Success!')

                if(this.lang == "de") {
                  this.toast.success(
                    "Bitte bezahlen Sie Ihren Vertrag, indem Sie unten eine beliebige Münze auswählen.",
                    "Transaktion Abgeschlossen"
                  );
                } else {
                  this.toast.success(
                    "Please pay for your contract by selecting any coin below.",
                    "Transaction Complete"
                  );
                }

                this.network = this.utilityService.getItem("network");
                this.network == "test" ? this.approve() : null;

                // this.ngbModal.open(this.transactionTemplate, {size: 'm', backdrop: 'static'})
              },
              (err) => {
                this.toast.error(err.error.message, "Error!");
              }
            );
          // modal.dismiss('')
        },
        (err) => {
          // modal.dismiss('')

          this.toast.error(err.error.message, "Error!");
        }
      );
  }

  whichContractyear() {
    return this.contractYear.includes("Lifetime")
      ? "Lifetime"
      : this.contractYear == "One"
      ? "One Year"
      : this.contractYear + " Years";
  }

  approve() {
    // modal.dismiss('')

    if(this.lang == "de") {
      this.toast.success(
        "Danke fürs Bezahlen! Wir werden Ihr Paket aktualisieren, sobald es bestätigt ist",
        "Erfolg!"
      );
    } else {
      this.toast.success(
        "Thanks for paying! We will update your package once it is confirmed",
        "Success!"
      );
    }

    this.buyNowDiv = false;
    this.transactionSuccess = false;
    this.showPaymentDiv = false;
    this.time = null;
    this.timerSub && this.timerSub.unsubscribe();
  }

  approveTestPackage() {

    if(this.lang == "de") {
      this.toast.success(
        "Paket erfolgreich gekauft!"
      );
    } else {
      this.toast.success(
        "Package purchased successfully!"
      );
    }

    this.buyNowDiv = false;
    this.transactionSuccess = false;
    this.showPaymentDiv = false;
    this.time = null;
    this.timerSub && this.timerSub.unsubscribe();
  }

  copied(e) {
    if(this.lang == "de") {
      this.toast.success("Adresse kopiert!", "Erfolg!");
    } else {
      this.toast.success("Address copied!", "Success!");
    }
  }

  fees() {
    let fee =
      (parseFloat(this.buyContract.units) / 10) *
        parseFloat(this.selectedPackage.discountedPrice) +
      (parseFloat(this.buyContract.units) / 10) *
        parseFloat(this.selectedPackage.maintenanceFee);
    return fee.toFixed(2);
    // this.fees = this.fees.toFixed(4)
  }

  showChild(coin) {
    this.coins.forEach((it) => {
      if (coin.key != it.key) it.show = false;
    });
    coin.show = !coin.show;
    this.selectedCoin = coin.key;
    if (!coin.coins || !coin.coins.length) {
      this.showPaymentDiv = false;
      this.time = null;
      this.showPaymentDiv = true;
      this.coins.forEach((it) => {
        if (coin.key != it.key) it.show = false;
      });
    }
  }

  scrollToCalc() {
    this.miningCalculatorEmitter.emit(true);
  }

  showInvestmentReturns(item) {
    this.calculate(item);
  }

  calculate(item) {
    item.returns = { daily: 0, monthly: 0, yearly: 0, power: 0 };
    // if (!item.investmentAmount.includes("$")) {
    //   this.toast.error(
    //     'Please add currency unit at last. Example: "1000$"',
    //     "Error!"
    //   );
    //   return;
    // }
    let amount = parseFloat(item.investmentAmount);
    if (!amount) {
      return;
    }
    let dailyFormula;
    let additional: any;
    let percentage: any;
    let validity;
    if (this.contractYear == "One") {
      validity = 1;
    } else if (this.contractYear == "Two") {
      validity = 2;
    } else validity = 5;

    switch (item.name) {
      case "SHA-256":
        item.returns.yearlyPower = amount * 19.31;
        percentage = amount / 100000;
        additional =
          this.parse(item.returns.yearlyPower * validity) *
          this.parse(percentage);
        item.returns.power =
          this.parse(item.returns.yearlyPower * validity) +
          this.parse(additional);

        if (validity > 1) {
          additional =
            this.parse(item.returns.yearlyPower) * this.parse(percentage);
          item.returns.power =
            this.parse(item.returns.yearlyPower) + this.parse(additional);
        }

        item.returns.daily = (item.returns.power * 0.242867) / 1000;
        if (validity > 1) {
          let b = item.returns.daily / 100;
          item.returns.daily = item.returns.daily / validity + b * 5;
        }
        item.returns.power = (
          this.parse(item.returns.yearlyPower * validity) +
          this.parse(additional)
        ).toFixed(4);
        break;

      case "SHA-256 PRO":
        item.returns.yearlyPower = amount * 16.735;
        percentage = amount / 100000;
        additional =
          this.parse(item.returns.yearlyPower * validity) *
          this.parse(percentage);
        item.returns.power =
          this.parse(item.returns.yearlyPower * validity) +
          this.parse(additional);

        if (validity > 1) {
          additional =
            this.parse(item.returns.yearlyPower) * this.parse(percentage);
          item.returns.power =
            this.parse(item.returns.yearlyPower) + this.parse(additional);
        }
        item.returns.daily = (item.returns.power * 0.242867) / 1000;
        if (validity > 1) {
          let b = item.returns.daily / 100;
          item.returns.daily = item.returns.daily / validity + b * 5;
        }
        item.returns.power = (
          this.parse(item.returns.yearlyPower * validity) +
          this.parse(additional)
        ).toFixed(4);
        break;

      case "SHA-256 BCH":
        item.returns.yearlyPower = amount * 17.25;
        percentage = amount / 100000;
        additional =
          this.parse(item.returns.yearlyPower * validity) *
          this.parse(percentage);
        item.returns.power =
          this.parse(item.returns.yearlyPower * validity) +
          this.parse(additional);

        if (validity > 1) {
          additional =
            this.parse(item.returns.yearlyPower) * this.parse(percentage);
          item.returns.power =
            this.parse(item.returns.yearlyPower) + this.parse(additional);
        }
        item.returns.daily = (item.returns.power * 0.242867) / 1000;
        if (validity > 1) {
          let b = item.returns.daily / 100;
          item.returns.daily = item.returns.daily / validity + b * 5;
        }
        item.returns.power =
          this.parse(item.returns.yearlyPower * validity) +
          this.parse(additional).toFixed(4);
        break;

      case "ETHEREUM":
        item.returns.yearlyPower = amount * 0.000058 + 0.01;
        percentage = amount / 100000;
        additional =
          this.parse(item.returns.yearlyPower * validity) *
          this.parse(percentage);
        item.returns.power =
          this.parse(item.returns.yearlyPower * validity) +
          this.parse(additional);

        if (validity > 1) {
          additional =
            this.parse(item.returns.yearlyPower) * this.parse(percentage);
          item.returns.power =
            this.parse(item.returns.yearlyPower) + this.parse(additional);
        }
        item.returns.daily = item.returns.power * 56.72;
        if (validity > 1) {
          let b = item.returns.daily / 100;
          item.returns.daily = item.returns.daily / validity + b * 5;
        }
        item.returns.power = (
          this.parse(item.returns.yearlyPower * validity) +
          this.parse(additional)
        ).toFixed(4);
        break;
    }
    item.returns.monthly = (this.parse(item.returns.daily) * 30).toFixed(4);
    item.returns.yearly = (this.parse(item.returns.monthly) * 12).toFixed(4);
    item.returns.daily = item.returns.daily.toFixed(4);
  }

  parse(number) {
    return parseFloat(number);
  }
  navigateToHash() {
    this.viewportScroller.scrollToAnchor("hashdiv");
  }
}
