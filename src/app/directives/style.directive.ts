import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private el: ElementRef, private r: Renderer2) {
      this.r.setStyle(el.nativeElement, 'border-color', 'pink')
  }

}
