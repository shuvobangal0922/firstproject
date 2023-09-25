import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {
  ourel!:ElementRef

  constructor(el:ElementRef) {
    
    el.nativeElement.style.color="red";
    this.ourel=el;
   }
   ngOnInit(){
    this.ourel.nativeElement.innerText = "Now you can see your text is change" 
 }

}
