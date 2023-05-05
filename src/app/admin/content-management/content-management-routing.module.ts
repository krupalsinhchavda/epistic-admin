import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentManagementComponent } from './content-management.component';


const routes: Routes = [
  {
    path: '', component: ContentManagementComponent,
    children: [
      { path: '', redirectTo: '/content-list', pathMatch: 'full' },
      { path: 'content-list', component: ContentListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManagementRoutingModule { }
