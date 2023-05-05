import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'categoryImgUrl', 'categoryName', 'categoryCode', 'Description', 'createdBy', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  add() {
    this.dialog.open(AddEditCategoryComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  edit() {
    this.dialog.open(AddEditCategoryComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  view() {
    this.dialog.open(ViewCategoryComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  delete() {
    this.dialog.open(DeleteCategoryComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}

export interface PeriodicElement {
  position: number;
  categoryImgUrl: string;
  categoryName: string;
  categoryCode: string;
  Description: string;
  createdBy: string;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, categoryImgUrl: 'Appliances.jpg', categoryName: 'Appliances', categoryCode: 'CT001', Description: 'Appliances Description', createdBy: 'Admin', action: 0 },
  { position: 2, categoryImgUrl: 'Appliances.jpg', categoryName: 'Clothing', categoryCode: 'CT002', Description: 'Clothing Description', createdBy: 'Admin', action: 0 },
  { position: 3, categoryImgUrl: 'Appliances.jpg', categoryName: 'Computers', categoryCode: 'CT003', Description: 'Computers Description', createdBy: 'Admin', action: 0 },
  { position: 4, categoryImgUrl: 'Appliances.jpg', categoryName: 'Health', categoryCode: 'CT004', Description: 'Health Description', createdBy: 'Admin', action: 0 },
  { position: 5, categoryImgUrl: 'Appliances.jpg', categoryName: 'Jewellery', categoryCode: 'CT005', Description: 'Jewellery Description', createdBy: 'Admin', action: 0 },
  { position: 6, categoryImgUrl: 'Appliances.jpg', categoryName: 'Industrial', categoryCode: 'CT006', Description: 'Industrial Description', createdBy: 'Admin', action: 0 },
  { position: 7, categoryImgUrl: 'Appliances.jpg', categoryName: 'Movies', categoryCode: 'CT007', Description: 'Movies Description', createdBy: 'Admin', action: 0 },
  { position: 8, categoryImgUrl: 'Appliances.jpg', categoryName: 'Music', categoryCode: 'CT008', Description: 'Music Description', createdBy: 'Admin', action: 0 },
  { position: 9, categoryImgUrl: 'Appliances.jpg', categoryName: 'Shoes', categoryCode: 'CT009', Description: 'Shoes Description', createdBy: 'Admin', action: 0 },
  { position: 10, categoryImgUrl: 'Appliances.jpg', categoryName: 'Watches', categoryCode: 'CT010', Description: 'Watches Description', createdBy: 'Admin', action: 0 }

];