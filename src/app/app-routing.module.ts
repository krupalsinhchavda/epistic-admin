import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './admin/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'account/signin',pathMatch:"full"},
  { path: '', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
