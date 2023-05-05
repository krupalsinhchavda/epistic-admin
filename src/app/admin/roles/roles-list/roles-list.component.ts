import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditRoleComponent } from './add-edit-role/add-edit-role.component';
import { DeleteRoleComponent } from './delete-role/delete-role.component';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'empid', 'docid', 'file','action'];
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
    this.dialog.open(AddEditRoleComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  edit() {
    this.dialog.open(AddEditRoleComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

 

  delete() {
    this.dialog.open(DeleteRoleComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}



export interface PeriodicElement {
  id: number;
  empid: number;
  docid: number;
  file: string;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, empid: 2, docid: 0, file: '', action: 0 },
  { id: 2, empid: 3, docid: 2, file: '', action: 0 },
  { id: 3, empid: 4, docid: 5, file: '', action: 0 },
  { id: 4, empid: 5, docid: 8, file: '', action: 0 },
  { id: 5, empid: 6, docid: 7, file: '', action: 0 },
  // { id: 6, empid: 'designer', docid: 0, file: 0, action: 0 },
  // { id: 7, empid: 'journal manager', docid: 0, file: 0, action: 0 },
  // { id: 8, empid: 'journal manager', docid: 0, file: 0, action: 0 },
  // { id: 9, empid: 'journal manager', docid: 0, file: 0, action: 0 },
  // { id: 10, empid: 'journal manager', docid: 0, file: 0, action: 0 },
];