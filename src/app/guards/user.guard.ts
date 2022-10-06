import { UtilityService, ToasterService } from 'src/app/services';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanLoad {

  constructor(private utilityService: UtilityService, private toastService: ToasterService, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      let user = this.utilityService.getItem('user') && JSON.parse(this.utilityService.getItem('user'))
      if(!!user && user.role && user.role.toLowerCase() != 'admin') {
        return true;
      }
      this.utilityService.clearStorage()
      this.toastService.warning('Please login first', 'Warning');
      this.router.navigate(['/auth/login'])
      return false;
  }
}
