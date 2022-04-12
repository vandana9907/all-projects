import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
data = 'THBS';
  constructor() {
    console.log(`new - data is ${this.data}`);
   }
   ngOnChanges(changes:SimpleChanges){
    console.log(` ngOnChanges - data is ${this.data}`);
   }
   ngOnInit() {

    console.log(`ngOnInit  - data is ${this.data}`);

  }



  ngDoCheck() {

    console.log("ngDoCheck");

  }



  ngAfterContentInit() {

    console.log("ngAfterContentInit");

  }
  ngAfterContentChecked() {

    console.log("ngAfterContentChecked");

  }



  ngAfterViewInit() {

    console.log("ngAfterViewInit");

  }



  ngAfterViewChecked() {

    console.log("ngAfterViewChecked");

  }



  ngOnDestroy() {

    console.log("ngOnDestroy");

  }
  

}
