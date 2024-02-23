import { Directive,ElementRef, Input } from '@angular/core';
import {HostListener} from '@angular/core';
@Directive({
  selector: '[appHoveraffect]',
  standalone: true
})
export class HoveraffectDirective {

  constructor(private elm: ElementRef) { 
  }
  @Input() type = "";
  @HostListener ("mouseenter") underline(){
    if (this.type=='underline') {
      this.elm.nativeElement.style.textDecoration="underline";
    }
    else if (this.type=='bold'){
      this.elm.nativeElement.style.fontWeight="bold";
    }
  }
  @HostListener ("mouseleave") removeul(){
    this.elm.nativeElement.style.textDecoration="";
    this.elm.nativeElement.style.fontWeight="normal";
  }

}