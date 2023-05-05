import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/shared/service/common.service';


@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})

export class AddEditUserComponent implements OnInit {

  toastr: any;

  genders:string[]= ['Male', 'Female'];
  roles:string[]= ['Admin', 'Employee'];
  emptypes:string[]= ['Developer', 'Designer','Manager'];
  data: any[] = [];
  myForm!: FormGroup;
  isFormSubmitted=false;
  gujtest=false;
  editMode:boolean=false;
  isSubmitted:boolean=false;
  editUserid: any;
  constructor(private router:Router,private commonservice:CommonService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
      dob:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required),
      role:new FormControl('', Validators.required),
      gender:new FormControl('', Validators.required),
      emptype:new FormControl('', Validators.required),
      ipaddress:new FormControl('', Validators.required),
    });
    // this.GetAllRoles();
  }
  // GetAllRoles() {
  //   this.commonservice.GetAllRoles().subscribe({next: (res:any) => {
  //        this.roles = res.data;
  //        console.log(this.roles);


  //     },
  //     error: (err: any) => {
  //       console.log(err);



  //     },
  //   })
  //}
  submitForm(postData:any){
    if(!this.isFormSubmitted){
      console.log("hello");
    }
    this.isSubmitted = true;
    if(this.editMode){
      this.commonservice.updateCategory(this.editUserid,postData).subscribe({next:(responseData:any)=>
        this.getFetch()
      }
      )}
      else{
    console.log(postData)
    this.commonservice.postname(postData).subscribe({next:(resData:any)=>
      console.log(resData)
    })
  }

  }
  getFetch(): void {
    // throw new Error('Method not implemented.');
  }

  updateUser(id:any,index:any){
    this.editMode=true;
    console.log(this.data[index]);
    this.editUserid = id;
    console.log(this.data[index].imageUrl);

    this.myForm.setValue({
      fname:this.data[index].fname,
      lname:this.data[index].lname,
      email:this.data[index].email,
      gender:this.data[index].gender,
      dob:this.data[index].dob,
      role:this.data[index].role,
      emptype:this.data[index].emptype,
      ipaddress:this.data[index].ipaddress,
    })

  }
}
export interface postData {
  fname: string;
  lname: string;
  email: string;
  gender: string;
  dob: string;
  role: string;
  emptype: string;
  ipaddress: string;
  action: number;
}

