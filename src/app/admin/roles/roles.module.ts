import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { AddEditRoleComponent } from './roles-list/add-edit-role/add-edit-role.component';
import { ViewRoleComponent } from './roles-list/view-role/view-role.component';
import { DeleteRoleComponent } from './roles-list/delete-role/delete-role.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RolesComponent,
    RolesListComponent,
    AddEditRoleComponent,
    ViewRoleComponent,
    DeleteRoleComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    SharedModule
  ]
})
export class RolesModule { }
