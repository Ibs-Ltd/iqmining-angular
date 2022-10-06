import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuard } from 'src/app/guards/route.guard';
import { AccountComponent } from '../../components';


const routes: Routes = [
  
  { path: 'account', component: AccountComponent, canActivate: [RouteGuard] }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ProfileRoutingModule { }
