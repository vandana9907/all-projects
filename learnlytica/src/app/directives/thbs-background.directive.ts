import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[AppThbsBackground]'
})
export class ThbsBackgroundDirective {

  constructor(private myelem: ElementRef) { 
    this.myelem.nativeElement.style.thbsbackgroundColor = 'pink';
    this.myelem.nativeElement.innerHTML = "chinnu";
  }

}
