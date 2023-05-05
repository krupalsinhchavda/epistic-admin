import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditRoleComponent } from './add-edit-role/add-edit-role.component';
import { ViewRoleComponent } from './view-role/view-role.component';
import { DeleteRoleComponent } from './delete-role/delete-role.component';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'rolename', 'abbreviation', 'submission', 'review', 'copyediting', 'production', 'action'];
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

  view() {
    this.dialog.open(ViewRoleComponent, {
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
  position: number;
  rolename: string;
  abbreviation: number;
  submission: number;
  review: number;
  copyediting: number;
  production: number;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, rolename: 'journal manager', abbreviation: 0, submission: 0, review: 0, copyediting: 0, production: 0, action: 0 },
  { position: 2, rolename: 'journal editor', abbreviation: 0, submission: 0, review: 0, copyediting: 0, production: 0, action: 0 },
  { position: 3, rolename: 'production manager', abbreviation: 0, submission: 0, review: 0, copyediting: 0, production: 0, action: 0 },
  { position: 4, rolename: 'section manager', abbreviation: 0, submission: 0, review: 0, copyediting: 0, production: 0, action: 0 },
  { position: 5, rolename: 'copy manager', abbreviation: 0, submission: 0, review: 0, copyediting: 0, production: 0, action: 0 },
  { position: 6, rolename: 'designer', abbreviation: 0, submission: 0, review: 0, copyediting: 0, production: 0, action: 0 },
  { position: 7, rolename: 'journal manager', abbreviation: 0, submission: 0, review: 0, copyediting: 0, production: 0, action: 0 },
  { position: 8, rolename: 'journal manager', abbreviation: 0, submission: 0, review: 0, copyediting: 0, production: 0, action: 0 },
  { position: 9, rolename: 'journal manager', abbreviation: 0, submission: 0, review: 0, copyediting: 0, production: 0, action: 0 },
  { position: 10, rolename: 'journal manager', abbreviation: 0, submission: 0, review: 0, copyediting: 0, production: 0, action: 0 },
];