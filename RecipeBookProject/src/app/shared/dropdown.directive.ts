import { Directive, HostListener, HostBinding } from '@angular/core';

//Custom Directive to enable dowpdown components to respond in Angular
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
