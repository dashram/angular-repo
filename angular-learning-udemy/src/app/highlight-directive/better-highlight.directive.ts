import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: '[betterHighLightDirective]'
})
export class BetterHighLightDirective implements OnInit{
    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    ngOnInit(){
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        //this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseenter') mouseover(eventData: Event){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        //this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
        this.backgroundColor = 'blue';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    }

}