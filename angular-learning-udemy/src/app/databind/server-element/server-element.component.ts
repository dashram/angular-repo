import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  ViewChild, 
  ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements  OnInit, 
                                                OnChanges, 
                                                DoCheck, 
                                                AfterContentInit,
                                                AfterContentChecked,
                                                AfterViewInit,
                                                AfterViewChecked,
                                                OnDestroy {

  /**
   * Exposing perperty to outside to any parent component hosting the current component
   * srvElement will act as alias for element outside of the component
   */
  @Input('srvElement') element: {type: string, name: string, content: string};

  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('1. constructor called...');
   }

  ngOnChanges(changes: SimpleChanges){
    console.log('2. ngOnChanges called...');
    console.log(changes);
  }

  ngOnInit() {
    console.log('3. ngOnInit called...');
    console.log('Text Content: ###'+this.header.nativeElement.textContent);
  }

  ngDoCheck(){
    //Triggers when angular checks for any change in any component
    console.log('4. ngDoCheck called');
  }

  ngAfterContentInit(){
    //it executes only once after content initialization
    console.log('5. ngAfterContentInit called...')
  }

  ngAfterContentChecked(){
    console.log('6. ngAfterContentChecked called...')
  }

  ngAfterViewInit(){
    //it executes only once after content initialization
    console.log('7. ngAfterViewInit called...')
    console.log('Text Content: ###'+this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('8. ngAfterViewChecked called...')
  }

  ngOnDestroy(){
    console.log('9. ngOnDestroy called...')
  }

}
