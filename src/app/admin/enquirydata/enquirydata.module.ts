import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquirydataRoutingModule } from './enquirydata-routing.module';
import { EnquirydataComponent } from './enquirydata.component';
import { EnquirydataListComponent } from './enquirydata-list/enquirydata-list.component';
import { ViewEnquirydataComponent } from './enquirydata-list/view-enquirydata/view-enquirydata.component';
import { DeleteEnquirydataComponent } from './enquirydata-list/delete-enquirydata/delete-enquirydata.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EnquirydataComponent,
    EnquirydataListComponent,
    ViewEnquirydataComponent,
    DeleteEnquirydataComponent,
  ],
  imports: [
    CommonModule,
    EnquirydataRoutingModule,
    SharedModule
  ]
})
export class EnquirydataModule { }
