import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditBannerComponent } from './add-edit-banner/add-edit-banner.component';
import { ViewBannerComponent } from './view-banner/view-banner.component';
import { DeleteBannerComponent } from './delete-banner/delete-banner.component';


@Component({
  selector: 'app-banner-management',
  templateUrl: './banner-management.component.html',
  styleUrls: ['./banner-management.component.css']
})
export class BannerManagementComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'bannerimgurl', 'bannervideourl', 'bannername', 'title', 'Description', 'redirectionlink', 'action'];
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
    this.dialog.open(AddEditBannerComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  edit() {
    this.dialog.open(AddEditBannerComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  view() {
    this.dialog.open(ViewBannerComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  delete() {
    this.dialog.open(DeleteBannerComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}

export interface PeriodicElement {
  position: number;
  bannerimgurl: string;
  bannervideourl: string
  bannername: string;
  title: string;
  Description: string;
  redirectionlink: string;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, bannerimgurl: 'banner.jpg', bannervideourl: '', bannername: 'home banner', title: 'THE QUALITY', Description: 'Consistency in precision and impregnable tenacity have converted all opportunities into optimum consequences in terms of the standard of implants.', redirectionlink: '/our-team', action: 0 },
  { position: 2, bannerimgurl: 'image-not-found.png', bannervideourl: 'blob:https://www.youtube.com/913b2968-4c55-48af-b90a-4eff9f4edeb9', bannername: 'home banner', title: 'THE QUALITY', Description: 'Consistency in precision and impregnable  into optimum consequences in terms of the standard of implants.', redirectionlink: '/about-us', action: 0 },
  { position: 3, bannerimgurl: 'banner.jpg', bannervideourl: '', bannername: 'home banner', title: 'THE team', Description: 'Consistency in precision and  into optimum consequences in terms of the standard of implants.', redirectionlink: '/our-team', action: 0 },
  { position: 4, bannerimgurl: 'image-not-found.png', bannervideourl: 'blob:https://www.youtube.com/913b2968-4c55-48af-b90a-4eff9f4edeb9', bannername: 'home banner', title: 'THE QUALITY', Description: 'Consistency in precision and impregnable tenacity have converted all opportunities into optimum consequences in terms of the standard of implants.', redirectionlink: '/our-team', action: 0 },
  { position: 5, bannerimgurl: 'banner.jpg', bannervideourl: '', bannername: 'home banner', title: 'THE QUALITY', Description: 'Consistency in precision and impregnable tenacity .', redirectionlink: '/contact-us', action: 0 },
  { position: 6, bannerimgurl: 'banner.jpg', bannervideourl: '', bannername: 'home banner', title: 'THE QUALITY', Description: 'Consistency in precision and impregnable tenacity have converted all opportunities into optimum consequences in terms of the standard of implants.', redirectionlink: '/our-team', action: 0 },

];
