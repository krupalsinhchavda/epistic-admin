import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditFaqComponent } from './add-edit-faq/add-edit-faq.component';
import { ViewFaqComponent } from './view-faq/view-faq.component';
import { DeleteFaqComponent } from './delete-faq/delete-faq.component';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'Questions', 'answer', 'action'];
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
    this.dialog.open(AddEditFaqComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  edit() {
    this.dialog.open(AddEditFaqComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  view() {
    this.dialog.open(ViewFaqComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  delete() {
    this.dialog.open(DeleteFaqComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}

export interface PeriodicElement {
  position: number;
  Questions: string
  answer: string
  action: number;
}



const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, Questions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', answer: 'At maxime aperiam necessitatibus? Doloribus omommodi exercitationem dolorem sit repellendus ipsam cum consequuntur.', action: 0 },
  { position: 2, Questions: 'Lorem ipsum, dolor sit ing elit.', answer: 'At maxime aperiam necessitatibus? Doloribus omnis tempore, optio reprehenderit et, temporibus dolorem sit repellendus ipsam cum consequuntur.', action: 0 },
  { position: 3, Questions: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', answer: 'At  omnis tempore, optio reprehenderit et, temporibus eveniet enim recusandae commodi exercitationem dolorem sit repellendus ipsam cum consequuntur.', action: 0 },
  { position: 4, Questions: 'Lorem sit amet consectetur adipisicing elit.', answer: 'At maxime aperiam necessitatibus? Doloribus omnis tempore, optio onsequuntur.', action: 0 },
  { position: 5, Questions: 'Lorem ipsum, dolor sit amet consectetur  elit.', answer: 'At maxime aperiam necessitatibus?  ipsam cum consequuntur.', action: 0 },
  { position: 6, Questions: 'Lorem ipsum, dolor elit.', answer: 'At maxime aperiam necessitatibus? Doloribus omnis temonsequuntur.', action: 0 },
];