import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'productImgUrl', 'productname', 'SKU', 'category', 'brand', 'price', 'unit', 'Qty', 'createdBy', 'action'];
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

  view() {
    this.dialog.open(ViewProductComponent, {
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
  position: number;
  productImgUrl: string;
  productname: string;
  SKU: string;
  category: string;
  brand: string;
  price: string
  unit: string
  Qty: string
  createdBy: string;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, productImgUrl: 'macbook.jpg', productname: 'macbook', SKU: 'PT001', category: 'Computers', brand: 'N/D', price: '1500', unit: 'pc', Qty: '100.00', createdBy: 'Admin', action: 0 },
  { position: 2, productImgUrl: 'macbook.jpg', productname: 'macbook', SKU: 'PT001', category: 'Computers', brand: 'N/D', price: '1500', unit: 'pc', Qty: '100.00', createdBy: 'Admin', action: 0 },
  { position: 3, productImgUrl: 'macbook.jpg', productname: 'macbook', SKU: 'PT001', category: 'Computers', brand: 'N/D', price: '1500', unit: 'pc', Qty: '100.00', createdBy: 'Admin', action: 0 },
  { position: 4, productImgUrl: 'macbook.jpg', productname: 'macbook', SKU: 'PT001', category: 'Computers', brand: 'N/D', price: '1500', unit: 'pc', Qty: '100.00', createdBy: 'Admin', action: 0 },
  { position: 5, productImgUrl: 'macbook.jpg', productname: 'macbook', SKU: 'PT001', category: 'Computers', brand: 'N/D', price: '1500', unit: 'pc', Qty: '100.00', createdBy: 'Admin', action: 0 },
  { position: 6, productImgUrl: 'macbook.jpg', productname: 'macbook', SKU: 'PT001', category: 'Computers', brand: 'N/D', price: '1500', unit: 'pc', Qty: '100.00', createdBy: 'Admin', action: 0 },
  { position: 7, productImgUrl: 'macbook.jpg', productname: 'macbook', SKU: 'PT001', category: 'Computers', brand: 'N/D', price: '1500', unit: 'pc', Qty: '100.00', createdBy: 'Admin', action: 0 },
  { position: 8, productImgUrl: 'macbook.jpg', productname: 'macbook', SKU: 'PT001', category: 'Computers', brand: 'N/D', price: '1500', unit: 'pc', Qty: '100.00', createdBy: 'Admin', action: 0 },
  { position: 9, productImgUrl: 'macbook.jpg', productname: 'macbook', SKU: 'PT001', category: 'Computers', brand: 'N/D', price: '1500', unit: 'pc', Qty: '100.00', createdBy: 'Admin', action: 0 },
  { position: 10, productImgUrl: 'macbook.jpg', productname: 'macbook', SKU: 'PT001', category: 'Computers', brand: 'N/D', price: '1500', unit: 'pc', Qty: '100.00', createdBy: 'Admin', action: 0 },

];