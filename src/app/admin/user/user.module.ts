import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ViewUserComponent } from './user-list/view-user/view-user.component';
import { AddEditUserComponent } from './user-list/add-edit-user/add-edit-user.component';
import { DeleteUserComponent } from './user-list/delete-user/delete-user.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    AddEditUserComponent,
    DeleteUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule
  ]
})
export class UserModule { }
