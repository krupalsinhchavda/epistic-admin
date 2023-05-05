import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  showMenu: any;

  constructor() { }

  ngOnInit(): void {
    this.showMenu = '';
    $(document).ready(function () {
      $(".submenu ul a.active").parent().parent().parent().addClass("expand");
    });
  }

  addExpandClass(element: any) {
    $(".sidebar-menu > li").removeClass("expand");
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

}
