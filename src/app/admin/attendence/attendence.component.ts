import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
  isLoginMode = true;

  constructor() { }

  ngOnInit(): void {
  }
  onSwitchMode() {
    if(this.isLoginMode = !this.isLoginMode){
    console.log("User LogOut");
    alert("You Are Log Out !!")
    }
    else{
      console.log("User Login");
      alert("You Are Login !!")

    }

  }
}
