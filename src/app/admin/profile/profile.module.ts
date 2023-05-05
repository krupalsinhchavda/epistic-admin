import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileEditComponent } from './view-profile/profile-edit/profile-edit.component';
import { AddDocumentComponent } from './view-profile/add-document/add-document.component';
import { DeletePopupComponent } from './view-profile/delete-popup/delete-popup.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ViewProfileComponent,
    ChangePasswordComponent,
    ProfileEditComponent,
    AddDocumentComponent,
    DeletePopupComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
