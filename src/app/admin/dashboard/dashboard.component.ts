import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../shared/service/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  panelOpenState = false;
  isloader = false;
  employee: any;


  constructor(private _formBuilder: FormBuilder, private toastr: ToastrService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.GetAllRoles();
  }
  
  GetAllRoles() {
    this.commonService.GetAllRoles().subscribe({
      next: (res) => {
        this.employee = res.data

      },
      error: (err: any) => {
        this.toastr.error('Invalid data');
      },
    })
  }
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: '#0f1829',
        backgroundColor: '#0f18295c'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;


  showloader() {
    this.isloader = true;
  }

  showtoastr() {
    this.toastr.success('Hello world!');
  }

}
