import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/shared/service/common.service';
import { EmailSendedPopupComponent } from '../email-sended-popup/email-sended-popup.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private toastr: ToastrService, private router: Router, private commonService: CommonService, public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  FormName = new FormGroup({
    inputfield: new FormControl('', [Validators.required]),
  })

  onsubmit() {
    console.log(this.FormName.value)
    this.dialog.open(EmailSendedPopupComponent, {
      width: '400px',
      autoFocus: false
    });
    this.commonService.exampletMethod(this.FormName.value).subscribe({
      next: (res) => {
      },
      error: (err: any) => {
      },
      complete: () => {
      }
    })

  }

}
