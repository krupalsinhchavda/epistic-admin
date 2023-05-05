import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesListComponent } from './roles-list/roles-list.component';
import { RolesComponent } from './roles.component';


const routes: Routes = [
  {
    path: '', component: RolesComponent,
    children: [
      { path: '', redirectTo: '/roles-list', pathMatch: 'full' },
      { path: 'roles-list', component: RolesListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
