import { ToasterService, UtilityService } from 'src/app/services';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router, private utilityService: UtilityService, private toastService: ToasterService) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    let token = this.utilityService.getToken()
    if(!!token) {
      return true;
    }
    this.utilityService.clearStorage()
    this.toastService.warning('Please login first', 'Warning');
    this.router.navigate(['/auth/login'])
    return false;
  }
}
