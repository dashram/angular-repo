import { Component, OnInit } from '@angular/core';

import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  serverElements = [
    { type: 'server', name: 'QAServer', content: 'QA test server' },
    { type: 'blueprint', name: 'PRODServer', content: 'Prod server' }
  ];
  
  constructor() { }

  ngOnInit() {
    //Custom Observable example, for this 'rxjs-compat' package required. npm install --save rxjs-compat
    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(           
          () => {
            observer.next('$$$$$$$$$first package');
          }, 2000 );
        setTimeout(
          () => {
            observer.next('$$$$$$$$$second package');
          }, 4000 );
        setTimeout(
          () => {
            observer.error('$$$$$$$$$this does not work');            
          }, 5000 );
      });

    myObservable.subscribe(
      (data: string) => { console.log( data ); },
      (error: string) => { console.log(error); },
      () => { console.log('Completed'); }
    );
  }  

  onServerAdded( serverData: {serverName: string, serverContent: string} ) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluprintAdded( serverData: {serverName: string, serverContent: string} ) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

}
