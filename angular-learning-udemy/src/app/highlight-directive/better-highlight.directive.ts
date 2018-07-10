import { Directive, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[betterHighLightDirective]'
})
export class BetterHighLightDirective implements OnInit{

    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    ngOnInit(){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    }

}