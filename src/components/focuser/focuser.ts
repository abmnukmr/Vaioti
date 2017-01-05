import {Directive, Renderer, ElementRef} from '@angular/core';
import {Keyboard} from "ionic-native";

/*
  Generated class for the Focuser directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[focuser]' // Attribute selector
})
export class Focuser {
  constructor(private renderer:Renderer, private elementRef:ElementRef) {
}
  ngOnInit() {
    const element = this.elementRef.nativeElement.querySelector('input');
    // we need to delay our call in order to work with ionic ...
    setTimeout(() => {
      this.renderer.invokeElementMethod(element, 'focus', []);
      Keyboard.show();
    }, 0);
  }

}
