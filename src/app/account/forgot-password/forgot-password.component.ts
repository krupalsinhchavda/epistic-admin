import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private toastr: ToastrService, private router: Router, private commonService: CommonService,) { }

  ngOnInit(): void {
  }

  FormName = new FormGroup({
    inputfield: new FormControl('', [Validators.required]),
  })

  onsubmit() {
    console.log(this.FormName.value)
    this.toastr.success('submit success');
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
