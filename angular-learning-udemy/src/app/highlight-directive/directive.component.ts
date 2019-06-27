import { Component } from "@angular/core";

@Component({
    selector: 'app-directives',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    onlyOdd = false;
    
    oddNumbers = [1, 3, 5];
    evenNumbers = [2, 4, 6];
    value = "10";

}