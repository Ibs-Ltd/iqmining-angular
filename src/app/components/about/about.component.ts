import { Router } from '@angular/router';
import { UtilityService } from './../../services/utility/utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private utilityService: UtilityService, private router: Router) { }

  ngOnInit() {
  }

  navigateToBuyMore() {
    this.utilityService.setViewPort('buy-now')
    this.router.navigate(['/home'])
  }

}
