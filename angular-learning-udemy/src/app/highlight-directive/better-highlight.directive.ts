import { Directive, OnInit, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: '[betterHighLightDirective]'
})
export class BetterHighLightDirective implements OnInit{

    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    ngOnInit(){
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        //this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseenter') mouseover(eventData: Event){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    }

}