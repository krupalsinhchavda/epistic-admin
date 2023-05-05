import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewContactdataComponent } from './view-contactdata/view-contactdata.component';
import { DeleteContactdataComponent } from './delete-contactdata/delete-contactdata.component';

@Component({
  selector: 'app-contactdata-list',
  templateUrl: './contactdata-list.component.html',
  styleUrls: ['./contactdata-list.component.css']
})
export class ContactdataListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'email', 'phone', 'subject', 'message', 'action'];
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


  view() {
    this.dialog.open(ViewContactdataComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  delete() {
    this.dialog.open(DeleteContactdataComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}

export interface PeriodicElement {
  position: number;
  name: string
  email: string
  phone: string
  subject: string
  message: string
  action: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'john', email: 'john@gmail.com', phone: '+1 54646646465', subject: 'about product', message: 'i need to know about product and price', action: 0 },
  { position: 2, name: 'john', email: 'john@gmail.com', phone: '+1 54646646465', subject: 'about product', message: 'i need to know about product and price', action: 0 },
  { position: 3, name: 'john', email: 'john@gmail.com', phone: '+1 54646646465', subject: 'about product', message: 'i need to know about product and price', action: 0 },
  { position: 4, name: 'john', email: 'john@gmail.com', phone: '+1 54646646465', subject: 'about product', message: 'i need to know about product and price', action: 0 },
  { position: 5, name: 'john', email: 'john@gmail.com', phone: '+1 54646646465', subject: 'about product', message: 'i need to know about product and price', action: 0 },
  { position: 6, name: 'john', email: 'john@gmail.com', phone: '+1 54646646465', subject: 'about product', message: 'i need to know about product and price', action: 0 },
];