import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { AddDocumentComponent } from './add-document/add-document.component';
import { MatPaginator } from '@angular/material/paginator';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})

export class ViewProfileComponent implements OnInit, AfterViewInit {



  displayedColumns: string[] = ['position', 'filename', 'action'];
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


  onfileselected(event: any) {
    var imgsizeinKB = event.target.files[0].size / 1024;
    console.log(event.target.files[0])
  }

  editprofile() {
    this.dialog.open(ProfileEditComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  adddocument() {
    this.dialog.open(AddDocumentComponent, {
      width: '400px',
      autoFocus: false
    });
  }

  delete() {
    this.dialog.open(DeletePopupComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}


export interface PeriodicElement {
  position: number;
  filename: string;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, filename: 'Degree-Certificate.pdf', action: 0 },
  { position: 2, filename: 'Experience-Letter.pdf', action: 0 },
  { position: 3, filename: 'Passport-Size-Photo.jpg', action: 0 },
  { position: 1, filename: 'Degree-Certificate.pdf', action: 0 },
  { position: 2, filename: 'Experience-Letter.pdf', action: 0 },
  { position: 3, filename: 'Passport-Size-Photo.jpg', action: 0 },
  { position: 1, filename: 'Degree-Certificate.pdf', action: 0 },
  { position: 2, filename: 'Experience-Letter.pdf', action: 0 },
  { position: 3, filename: 'Passport-Size-Photo.jpg', action: 0 },
  { position: 1, filename: 'Degree-Certificate.pdf', action: 0 },
  { position: 2, filename: 'Experience-Letter.pdf', action: 0 },
];