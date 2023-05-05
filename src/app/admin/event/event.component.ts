import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditEventComponent } from './add-edit-event/add-edit-event.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'eventImgurl', 'title', 'date', 'postedBy', 'Description', 'venue', 'action'];
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
    this.dialog.open(AddEditEventComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  edit() {
    this.dialog.open(AddEditEventComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  view() {
    this.dialog.open(ViewEventComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  delete() {
    this.dialog.open(DeleteEventComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}

export interface PeriodicElement {
  position: number;
  eventImgurl: string;
  title: string
  date: string;
  postedBy: string;
  Description: string;
  venue: string;
  action: number;
}



const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, eventImgurl: 'events.jpg', title: 'events 1', date: '12-01-2022', postedBy: 'Admin', Description: 'Lorem', venue: 'london', action: 0 },
  { position: 2, eventImgurl: 'events.jpg', title: 'events 1', date: '12-01-2022', postedBy: 'Admin', Description: 'Lorem', venue: 'london', action: 0 },
  { position: 3, eventImgurl: 'events.jpg', title: 'events 1', date: '12-01-2022', postedBy: 'Admin', Description: 'Lorem', venue: 'london', action: 0 },
  { position: 4, eventImgurl: 'events.jpg', title: 'events 1', date: '12-01-2022', postedBy: 'Admin', Description: 'Lorem', venue: 'london', action: 0 },
  { position: 5, eventImgurl: 'events.jpg', title: 'events 1', date: '12-01-2022', postedBy: 'Admin', Description: 'Lorem', venue: 'london', action: 0 },
  { position: 6, eventImgurl: 'events.jpg', title: 'events 1', date: '12-01-2022', postedBy: 'Admin', Description: 'Lorem', venue: 'london', action: 0 },
  { position: 7, eventImgurl: 'events.jpg', title: 'events 1', date: '12-01-2022', postedBy: 'Admin', Description: 'Lorem', venue: 'london', action: 0 },
  { position: 8, eventImgurl: 'events.jpg', title: 'events 1', date: '12-01-2022', postedBy: 'Admin', Description: 'Lorem', venue: 'london', action: 0 },
  { position: 9, eventImgurl: 'events.jpg', title: 'events 1', date: '12-01-2022', postedBy: 'Admin', Description: 'Lorem', venue: 'london', action: 0 },
  { position: 10, eventImgurl: 'events.jpg', title: 'events 1', date: '12-01-2022', postedBy: 'Admin', Description: 'Lorem', venue: 'london', action: 0 },

];