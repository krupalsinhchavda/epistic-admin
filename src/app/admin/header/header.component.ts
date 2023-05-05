import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }
  fullpage: any

  ngOnInit() {
    this.fullpage = document.documentElement;
  }

  openFullscreen() {
    if (this.fullpage.requestFullscreen) {
      this.fullpage.requestFullscreen();
    } else if (this.fullpage.mozRequestFullScreen) {
      /* Firefox */
      this.fullpage.mozRequestFullScreen();
    } else if (this.fullpage.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.fullpage.webkitRequestFullscreen();
    } else if (this.fullpage.msRequestFullscreen) {
      /* IE/Edge */
      this.fullpage.msRequestFullscreen();
    }
  }


}
