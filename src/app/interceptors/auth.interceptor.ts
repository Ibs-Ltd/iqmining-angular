import { Router } from '@angular/router';
import { UtilityService } from './../services';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private utilityService: UtilityService, private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!request.url.includes('auth/login') && !request.url.includes('https://blockchain.info/tobtc?currency=USD')) {
      request = request.clone({
        setHeaders: {
          network: this.utilityService.getItem('network') || 'main',
          lang: this.utilityService.getItem('lang') || 'en'
        }
      });
    }
    
    return next.handle(request).pipe( tap(() => {},
      (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.error.statusCode !== 401) {
         return;
        }
        this.utilityService.updateHeaderData(false);
        this.utilityService.clearStorage()
        this.router.navigate(['auth/login']);
      }
    }));
  }
}
