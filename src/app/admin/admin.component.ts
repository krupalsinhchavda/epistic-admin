import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function () {
      $(".sidebar-toggle").click(function () {
        $("body").toggleClass("hide-sidebar");
      });
      $(".setting-toggle").click(function () {
        $("body").toggleClass("show-settingbar");
      });
      $("#setting-bar-overlay").click(function () {
        $("body").removeClass("show-settingbar");
      });
    });

  }

}
