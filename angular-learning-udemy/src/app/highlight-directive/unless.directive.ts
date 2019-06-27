import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {
    //This is a setter method but still its a property: unless
    @Input() set appUnless(condition: boolean) {
        if(!condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {
            this.vcRef.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}
}