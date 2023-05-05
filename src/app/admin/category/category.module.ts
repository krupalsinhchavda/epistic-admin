import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddEditCategoryComponent } from './category-list/add-edit-category/add-edit-category.component';
import { DeleteCategoryComponent } from './category-list/delete-category/delete-category.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryListComponent,
    AddEditCategoryComponent,
    
    DeleteCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
