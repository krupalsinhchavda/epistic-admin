import { Component, OnInit, OnDestroy } from "@angular/core";
import { timer } from "rxjs";
import { Router } from "@angular/router";


@Component({
  selector: 'app-signed-out',
  templateUrl: './signed-out.component.html',
  styleUrls: ['./signed-out.component.css']
})
export class SignedOutComponent implements OnInit, OnDestroy {


  time_sec = 10;
  countDown: any
  tick = 1000;

  constructor(private router: Router) { }

  ngOnInit() {
    this.countDown = timer(0, this.tick).subscribe(
      () => --this.time_sec
    );
    setTimeout(() => {
      this.router.navigate(['account/signin']);
    }, this.time_sec * 1000);
  }

  ngOnDestroy() {
    this.countDown = null;
  }

}

