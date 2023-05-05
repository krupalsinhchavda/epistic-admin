import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditContentComponent } from './add-edit-content/add-edit-content.component';

import { DeleteContentComponent } from './delete-content/delete-content.component';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'empid','subject', 'startdate', 'enddate', 'action'];
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
    this.dialog.open(AddEditContentComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  edit() {
    this.dialog.open(AddEditContentComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

 

  delete() {
    this.dialog.open(DeleteContentComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}

export interface PeriodicElement {
  id: number;
  subject: string;
  startdate:string;
  enddate: string
  action: number;
  empid:number;
}



const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1,empid:10, subject: 'about us', startdate: 'Tue Apr 18 2023 00:00:00 GMT+0530 (India Standard Time)', enddate: 'Tue Apr 20 2023 00:00:00 GMT+0530 (India Standard Time)', action: 0 },
  // { id: 2, page: 'about us', title: 'our history', content: '<ol>\n\t<li>lorem</li>\n</ol>\n <ol>\n\t<li>lorem</li>\n</ol>\n <ol>\n\t<li>lorem</li>\n</ol>\n  ', action: 0 },
  // { id: 3, page: 'about us', title: 'our history', content: '<ol>\n\t<li>lorem</li>\n</ol>\n <ol>\n\t<li>lorem</li>\n</ol>\n <ol>\n\t<li>lorem</li>\n</ol>\n  ', action: 0 },
  // { id: 4, page: 'about us', title: 'our history', content: '<ol>\n\t<li>lorem</li>\n</ol>\n <ol>\n\t<li>lorem</li>\n</ol>\n <ol>\n\t<li>lorem</li>\n</ol>\n  ', action: 0 },
  // { id: 5, page: 'about us', title: 'our history', content: '<ol>\n\t<li>lorem</li>\n</ol>\n <ol>\n\t<li>lorem</li>\n</ol>\n <ol>\n\t<li>lorem</li>\n</ol>\n  ', action: 0 },
  // { id: 6, page: 'about us', title: 'our history', content: '<ol>\n\t<li>lorem</li>\n</ol>\n <ol>\n\t<li>lorem</li>\n</ol>\n <ol>\n\t<li>lorem</li>\n</ol>\n  ', action: 0 },
];