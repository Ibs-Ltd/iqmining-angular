import { AdminContactComponent } from './../../components/admin-contact/admin-contact.component';
import { RouteGuard } from './../../guards/route.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUsersComponent, AdminWithdrawComponent, AdminPurchaseComponent } from '../../components';


const routes: Routes = [
  { path: 'purchase', component: AdminPurchaseComponent },
  { path: 'withdraw', component: AdminWithdrawComponent },
  { path: 'users', component: AdminUsersComponent },
  { path: 'contact', component: AdminContactComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AdminRoutingModule { }
