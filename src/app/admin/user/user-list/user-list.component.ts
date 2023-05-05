import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['fname', 'lname', 'email', 'gender', 'dob', 'role', 'emptype', 'ipaddress','action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog,private commonservice:CommonService) { }


  ngOnInit(): void {
    this.getEmployeedata();
  }
  getEmployeedata() {
    this.commonservice.getEmployeedata().subscribe({next:(resData:any)=>
      {
            this.dataSource = resData;
            console.log(this.dataSource);

  }
      })
    }
  add() {
    debugger
    this.dialog.open(AddEditUserComponent, {
      width: '1000px',
      height: '100%',
      autoFocus: false
    });
  }

  updateUser(id:any,index:any) {
    console.log(id);
    this.dialog.open(AddEditUserComponent, {
      width: '1000px',
      height: '100%',

      autoFocus: false
    });
  }

  view() {
    this.dialog.open(ViewUserComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  delete(id:any,index:any) {
    console.log(id);

    this.dialog.open(DeleteUserComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}

