import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  Name="vandana";
  Profile=[{
    company:'THBS',
    tech:'MEAN',
    year:2021
  }];
  Address="Bangalore";

  data: any;  


  constructor() { }

  ngOnInit(): void {


  }
  receivedChildData(myval: string) {
    this.data = myval;
  }

}
