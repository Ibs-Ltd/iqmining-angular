import { UtilityService } from './../services';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private utilityService: UtilityService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.utilityService.getToken() && !request.url.includes('https://blockchain.info/tobtc?currency=USD')){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.utilityService.getToken()}`
        }
      });
    }
    return next.handle(request);
  }
}