import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[thbsBackground]'
})
export class ImgsrcDirective {

  constructor( private myelem: ElementRef) {
    this.myelem.nativeElement.style.backgroundColor = 'green';
    this.myelem.nativeElement.innerHTML = 'vandana';
   }
 @HostListener('mouseenter')
 onMouseEnter() {
   this.myelem.nativeElement.style.fontsize = '30px';
 }
 @HostListener('mouseleave')
 onMouseLeave() {
   this.myelem.nativeElement.style.fontsize = '15px';
 }
 @HostListener('dbclick')
 onMouseDoubleClick() {
   this.myelem.nativeElement.style.fontsize = 'red';
 }

 @HostListener('click')
 onMouseClick() {
   this.myelem.nativeElement.style.fontsize = 'pink';
 }

}

