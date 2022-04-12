import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {


  myObs2$: any;
  constructor() { }

  ngOnInit(): void {
    // interval(100).subscribe(val=> console.log(`I am obs stream value -> ${val}`));
    this.myObs2$ = of(1, 2, 4, 5, 10, 100);
    this.myObs2$.subscribe(
      (val: number) => console.log(`I am of --> obs stream value ->${val}`)

    )
   from([1, 10, 2, 20]).subscribe(
    (val: Number) => console.log(`I am from --> obs stream vale -> ${val}`)
   )
   }
  ngOnDestroy(): void {
    console.log('from destory')
    this.myObs2$.unsubcribe();
    this.myObs2$.unsubcribe();
  }
}

