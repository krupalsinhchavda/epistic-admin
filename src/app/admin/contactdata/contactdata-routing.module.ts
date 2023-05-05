import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactdataListComponent } from './contactdata-list/contactdata-list.component';
import { ContactdataComponent } from './contactdata.component';

const routes: Routes = [
  {
    path: '', component: ContactdataComponent,
    children: [
      { path: '', redirectTo: '/contactdata-list', pathMatch: 'full' },
      { path: 'contactdata-list', component: ContactdataListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactdataRoutingModule { }
