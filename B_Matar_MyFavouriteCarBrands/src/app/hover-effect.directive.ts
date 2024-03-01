// hover-effect.directive.ts
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.applyEffect(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyEffect(false);
  }

  private applyEffect(shouldApply: boolean) {
    if (shouldApply) {
      this.el.nativeElement.style.textDecoration = 'underline';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
    }
  }
}
