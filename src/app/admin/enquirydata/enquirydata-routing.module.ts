import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquirydataListComponent } from './enquirydata-list/enquirydata-list.component';
import { EnquirydataComponent } from './enquirydata.component';

const routes: Routes = [
  {
    path: '', component: EnquirydataComponent,
    children: [
      { path: '', redirectTo: '/enquirydata-list', pathMatch: 'full' },
      { path: 'enquirydata-list', component: EnquirydataListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquirydataRoutingModule { }
