import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditTestimonialComponent } from './add-edit-testimonial/add-edit-testimonial.component';
import { ViewTestimonialComponent } from './view-testimonial/view-testimonial.component';
import { DeleteTestimonialComponent } from './delete-testimonial/delete-testimonial.component';


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'Designation', 'Description', 'location', 'action'];
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
    this.dialog.open(AddEditTestimonialComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  edit() {
    this.dialog.open(AddEditTestimonialComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  view() {
    this.dialog.open(ViewTestimonialComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  delete() {
    this.dialog.open(DeleteTestimonialComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}

export interface PeriodicElement {
  position: number;
  name: string
  Designation: string;
  Description: string
  location: string;
  action: number;
}



const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'james', Designation: 'designer', Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', location: 'Uk', action: 0 },
  { position: 2, name: 'james', Designation: 'designer', Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', location: 'Usa', action: 0 },
  { position: 3, name: 'james', Designation: 'designer', Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', location: 'canada', action: 0 },
  { position: 4, name: 'james', Designation: 'designer', Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', location: 'india', action: 0 },
  { position: 5, name: 'james', Designation: 'designer', Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', location: 'china', action: 0 },
  { position: 6, name: 'james', Designation: 'designer', Description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', location: 'Uk', action: 0 },
];