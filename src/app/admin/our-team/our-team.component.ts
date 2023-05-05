import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditOurTeamComponent } from './add-edit-our-team/add-edit-our-team.component';
import { ViewOurTeamComponent } from './view-our-team/view-our-team.component';
import { DeleteOurTeamComponent } from './delete-our-team/delete-our-team.component';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'teamMemberImgUrl', 'teamMemberName', 'Designation', 'Description', 'facebook', 'twitter', 'linkedin', 'action'];
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
    this.dialog.open(AddEditOurTeamComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  edit() {
    this.dialog.open(AddEditOurTeamComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  view() {
    this.dialog.open(ViewOurTeamComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  delete() {
    this.dialog.open(DeleteOurTeamComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}

export interface PeriodicElement {
  position: number;
  teamMemberImgUrl: string;
  teamMemberName: string
  Designation: string;
  Description: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  action: number;
}



const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, teamMemberImgUrl: 'user.png', teamMemberName: 'james', Designation: 'designer', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', facebook: 'Lorem Ipsum is simply', twitter: 'Lorem Ipsum is simply', linkedin: 'Lorem Ipsum is simply', action: 0 },
  { position: 2, teamMemberImgUrl: 'user.png', teamMemberName: 'james', Designation: 'designer', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', facebook: 'Lorem Ipsum is simply', twitter: 'Lorem Ipsum is simply', linkedin: 'Lorem Ipsum is simply', action: 0 },
  { position: 3, teamMemberImgUrl: 'user.png', teamMemberName: 'james', Designation: 'designer', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', facebook: 'Lorem Ipsum is simply', twitter: 'Lorem Ipsum is simply', linkedin: 'Lorem Ipsum is simply', action: 0 },
  { position: 4, teamMemberImgUrl: 'user.png', teamMemberName: 'james', Designation: 'designer', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', facebook: 'Lorem Ipsum is simply', twitter: 'Lorem Ipsum is simply', linkedin: 'Lorem Ipsum is simply', action: 0 },
  { position: 5, teamMemberImgUrl: 'user.png', teamMemberName: 'james', Designation: 'designer', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', facebook: 'Lorem Ipsum is simply', twitter: 'Lorem Ipsum is simply', linkedin: 'Lorem Ipsum is simply', action: 0 },
  { position: 6, teamMemberImgUrl: 'user.png', teamMemberName: 'james', Designation: 'designer', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', facebook: 'Lorem Ipsum is simply', twitter: 'Lorem Ipsum is simply', linkedin: 'Lorem Ipsum is simply', action: 0 },
  { position: 7, teamMemberImgUrl: 'user.png', teamMemberName: 'james', Designation: 'designer', Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', facebook: 'Lorem Ipsum is simply', twitter: 'Lorem Ipsum is simply', linkedin: 'Lorem Ipsum is simply', action: 0 },

];

