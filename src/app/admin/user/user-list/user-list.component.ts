import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CommonService } from 'src/app/shared/service/common.service';
import { UserData } from 'src/app/shared/model/userdata.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['fname', 'lname', 'email', 'gender', 'dob', 'role', 'emptype', 'ipaddress','action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  userdata:UserData[]=[];

  index!: number;
  id!: number;
  constructor(public dialog: MatDialog,private commonservice:CommonService) { }

  ngOnInit(): void {
    alert('hi');
    this.getEmployeedata();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
    const dialogRef = this.dialog.open(AddEditUserComponent, {
      width: '1000px',
      height: '100%',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {

      this.getEmployeedata();

    });
  }

  updateUser(i:number,id:number,fname:string,lname:string,dob:string,gender:string,role:string,email:string,emptype:string,ipaddress:string) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(AddEditUserComponent, {
      width: '1000px',
      height: '100%',
      autoFocus: false,
        data: {id:id,fname:fname,lname:lname,dob:dob,gender:gender,role:role,email:email,emptype:emptype,ipaddress:ipaddress}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(this.id);
      this.getEmployeedata();

    });
  }

  view() {
    const dialogRef = this.dialog.open(ViewUserComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  delete(i:number,id:number,fname:string,lname:string,dob:string,gender:string,role:string,email:string,emptype:string,ipaddress:string) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '400px',
      autoFocus: false,
      data: {id:id,fname:fname,lname:lname,dob:dob,gender:gender,role:role,email:email,emptype:emptype,ipaddress:ipaddress}
    });
    dialogRef.afterClosed().subscribe(result => {

      this.getEmployeedata();

    });
  }

}

