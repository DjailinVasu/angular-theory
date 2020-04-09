import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') color: string = 'pink'
  @Input() backgroundColor: string = '#ddd'
  @Input() borderRadius: string = '0px'

  constructor(private el: ElementRef, private r: Renderer2) {
  }

  @HostBinding('style.borderRadius') elBorderRadius = null

  @HostListener('click', ['$event']) onClick(event: Event) {
      console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
      this.r.setStyle(this.el.nativeElement, 'border-color', this.color);
      this.r.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor);

      this.elBorderRadius = this.borderRadius;
  }

  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'border-color', null);
    this.r.setStyle(this.el.nativeElement, 'background-color', null);

    this.elBorderRadius = null;
  }
}
