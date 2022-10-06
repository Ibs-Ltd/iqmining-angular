import { LoaderService } from './../../services';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading: boolean;

  constructor(private loaderService: LoaderService,  private ngxService: NgxUiLoaderService) { 
    // this.loaderService.isLoading.subscribe((v) => {
    //   // console.log(v);
    //   this.loading = v;
    //   this.loading ? this.ngxService.start() : this.ngxService.stop();
      
    // });
  }

  ngOnInit() {
  }

}
