import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContentManagementRoutingModule } from './content-management-routing.module';
import { ContentManagementComponent } from './content-management.component';
import { ContentListComponent } from './content-list/content-list.component';
import { AddEditContentComponent } from './content-list/add-edit-content/add-edit-content.component';

import { DeleteContentComponent } from './content-list/delete-content/delete-content.component';

@NgModule({
  declarations: [
    ContentManagementComponent,
    ContentListComponent,
    AddEditContentComponent,
  
    DeleteContentComponent,
  ],
  imports: [
    CommonModule,
    ContentManagementRoutingModule,
    SharedModule
  ]
})
export class ContentManagementModule { }
