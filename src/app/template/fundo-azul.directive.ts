import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[fundoAzul]'
})
export class FundoAzulDirective {

  constructor(private elementRef: ElementRef,
              private _renderRef: Renderer2) {
    this._renderRef.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'blue',
    );

    this._renderRef.setStyle(
      this.elementRef.nativeElement,
      'color',
      'white'
    );
}

}
