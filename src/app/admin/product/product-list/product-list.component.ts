import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

import { DeleteProductComponent } from './delete-product/delete-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'subject', 'startTime', 'endTime', 'date','action'];
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
    this.dialog.open(AddEditProductComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  edit() {
    this.dialog.open(AddEditProductComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

 

  delete() {
    this.dialog.open(DeleteProductComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}

export interface PeriodicElement {
  id: number;
  subject: string;
  startTime: string;
  endTime: string;
  date: string;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, subject: 'learn html', startTime: '22:12', endTime: 'Computers', date: 'N/D', action: 0 },
  { id: 2, subject: 'learn html', startTime: 'PT001', endTime: 'Computers', date: 'N/D', action: 0 },
  { id: 3, subject: 'learn html', startTime: 'PT001', endTime: 'Computers', date: 'N/D', action: 0 },
  { id: 4, subject: 'learn html', startTime: 'PT001', endTime: 'Computers', date: 'N/D', action: 0 },
  { id: 5, subject: 'learn html', startTime: 'PT001', endTime: 'Computers', date: 'N/D', action: 0 },
  { id: 6, subject: 'learn html', startTime: 'PT001', endTime: 'Computers', date: 'N/D', action: 0 },
  { id: 7, subject: 'learn html', startTime: 'PT001', endTime: 'Computers', date: 'N/D', action: 0 },
  { id: 8, subject: 'learn html', startTime: 'PT001', endTime: 'Computers', date: 'N/D', action: 0 },
  { id: 9, subject: 'learn html', startTime: 'PT001', endTime: 'Computers', date: 'N/D', action: 0 },
  { id: 10, subject: 'learn html', startTime: 'PT001', endTime: 'Computers', date: 'N/D', action: 0 },

];