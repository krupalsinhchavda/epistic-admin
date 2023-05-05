import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category.component';


const routes: Routes = [
  {
    path: '', component: CategoryComponent,
    children: [
      { path: '', redirectTo: '/roles-list', pathMatch: 'full' },
      { path: 'category-list', component: CategoryListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
