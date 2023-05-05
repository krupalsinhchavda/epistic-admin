import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactdataRoutingModule } from './contactdata-routing.module';
import { ContactdataComponent } from './contactdata.component';
import { ContactdataListComponent } from './contactdata-list/contactdata-list.component';
import { ViewContactdataComponent } from './contactdata-list/view-contactdata/view-contactdata.component';
import { DeleteContactdataComponent } from './contactdata-list/delete-contactdata/delete-contactdata.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ContactdataComponent,
    ContactdataListComponent,
    ViewContactdataComponent,
    DeleteContactdataComponent,
  ],
  imports: [
    CommonModule,
    ContactdataRoutingModule,
    SharedModule
  ]
})
export class ContactdataModule { }
