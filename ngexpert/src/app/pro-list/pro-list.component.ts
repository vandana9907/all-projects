import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.css']
})
export class ProListComponent implements OnInit {

  arraynum = ['one', 'two', 'three']
  arraydet = [{
    name: 'vandana',
    id: 6645
  }]

  dataReceived: any;


  constructor() { }

  ngOnInit(): void {
  }
  receivedChildData(myval: string) {

    this.dataReceived = myval;


  }

}
