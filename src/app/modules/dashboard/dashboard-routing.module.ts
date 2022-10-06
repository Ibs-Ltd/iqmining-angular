import { RouteGuard } from './../../guards/route.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralComponent, WithdrawComponent, DashboardComponent } from '../../components';


const routes: Routes = [
  { path: 'referral', component: ReferralComponent },
  { path: 'withdraw', component: WithdrawComponent, canActivate: [RouteGuard] },
  { path: '', pathMatch: 'full', component: DashboardComponent, canActivate: [RouteGuard] },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class DashboardRoutingModule { }
