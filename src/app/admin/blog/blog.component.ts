import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditBlogComponent } from './add-edit-blog/add-edit-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { DeleteBlogComponent } from './delete-blog/delete-blog.component';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'blogImgurl', 'title', 'date', 'postedBy', 'Description', 'author', 'action'];
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
    this.dialog.open(AddEditBlogComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  edit() {
    this.dialog.open(AddEditBlogComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  view() {
    this.dialog.open(ViewBlogComponent, {
      width: '1000px',
      autoFocus: false
    });
  }

  delete() {
    this.dialog.open(DeleteBlogComponent, {
      width: '400px',
      autoFocus: false
    });
  }

}

export interface PeriodicElement {
  position: number;
  blogImgurl: string;
  title: string
  date: string;
  postedBy: string;
  Description: string;
  author: string;
  action: number;
}



const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, blogImgurl: 'banner.jpg', title: 'blog 1', date: '12-01-2022', postedBy: 'Lorem', Description: 'Lorem', author: 'Lorem', action: 0 },
  { position: 2, blogImgurl: 'banner.jpg', title: 'blog 1', date: '12-01-2022', postedBy: 'Lorem', Description: 'Lorem', author: 'Lorem', action: 0 },
  { position: 3, blogImgurl: 'banner.jpg', title: 'blog 1', date: '12-01-2022', postedBy: 'Lorem', Description: 'Lorem', author: 'Lorem', action: 0 },
  { position: 4, blogImgurl: 'banner.jpg', title: 'blog 1', date: '12-01-2022', postedBy: 'Lorem', Description: 'Lorem', author: 'Lorem', action: 0 },
  { position: 5, blogImgurl: 'banner.jpg', title: 'blog 1', date: '12-01-2022', postedBy: 'Lorem', Description: 'Lorem', author: 'Lorem', action: 0 },
  { position: 6, blogImgurl: 'banner.jpg', title: 'blog 1', date: '12-01-2022', postedBy: 'Lorem', Description: 'Lorem', author: 'Lorem', action: 0 },

];