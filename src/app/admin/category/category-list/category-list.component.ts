import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id','projectname', 'projectdes', 'createdon', 'modifiedon', 'action'];
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

  delete() {
    this.dialog.open(DeleteCategoryComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}

export interface PeriodicElement {
  id: number;
  projectname: string;
  projectdes: string;
  createdon: string;
  modifiedon: string;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, projectname: 'Appliances', projectdes: 'CT001', createdon: '22-02-2023 ', modifiedon: '25-02-2023 ', action: 0 },
  { id: 2, projectname: 'Clothing', projectdes: 'CT002', createdon: '22-02-2023  ', modifiedon: '25-02-2023 ', action: 0 },
  { id: 3, projectname: 'Computers', projectdes: 'CT003', createdon: '22-02-2023  ', modifiedon: '25-02-2023 ', action: 0 },
  { id: 4, projectname: 'Health', projectdes: 'CT004', createdon: '22-02-2023  ', modifiedon: '25-02-2023 ', action: 0 },
  { id: 5, projectname: 'Health', projectdes: 'CT004', createdon: '22-02-2023  ', modifiedon: '25-02-2023 ', action: 0 },
  { id: 6, projectname: 'Health', projectdes: 'CT004', createdon: '22-02-2023  ', modifiedon: '25-02-2023 ', action: 0 },
  // { id: 5, projectname: 'Jewellery', projectdes: 'CT005', createdon: ' ', modifiedon: '25-02-2023 ', action: 0 },
  // { id: 6, projectname: 'Industrial', projectdes: 'CT006', createdon: ' ', modifiedon: '25-02-2023 ', action: 0 },
  // { id: 7, projectname: 'Movies', projectdes: 'CT007', createdon: ' ', modifiedon: '25-02-2023 ', action: 0 },
  // { id: 8, projectname: 'Music', projectdes: 'CT008', createdon: ' ', modifiedon: '25-02-2023 ', action: 0 },
  // { id: 9, projectname: 'Shoes', projectdes: 'CT009', createdon: ' ', modifiedon: '25-02-2023 ', action: 0 },
  // { id: 10, projectname: 'Watches', projectdes: 'CT010', createdon: ' ', modifiedon: '25-02-2023 ', action: 0 }

];