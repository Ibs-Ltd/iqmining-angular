import { UtilityService, ToasterService } from './../services';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private utilityService: UtilityService, private toastService: ToasterService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.utilityService.getToken();
    if(token) return true;
    this.toastService.warning('Please login first', 'Warning');
    this.router.navigate(['/auth/login'])
    return false;
  }
  
}
