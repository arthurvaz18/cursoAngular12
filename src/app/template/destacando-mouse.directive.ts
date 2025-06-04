import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[destacandoMouse]'
})
export class DestacandoMouseDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'yellow';
  @HostBinding('style.color') color: string = 'blue';

  constructor() {
  }

  @HostListener('mouseenter') cursorMouse() {
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') cursorMouseLivre() {
    this.backgroundColor = 'yellow';
  }

}
