import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css']
})
export class ObservableExampleComponent implements OnInit, OnDestroy {
  private fristObserSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    //it will fire a new value every second
    this.fristObserSubscription = interval(1000).subscribe(
      count => {
        //console.log("counting.. " + count)
      }
    )

    //Building a custom Observable
    const customIntervalObservable = Observable.create( observer=> {
      let count = 0;
      setInterval( () =>{
        observer.next(count);
        if(count === 4){
          //on completion, observable stops emiting data(stops)
          observer.complete();
        }
        if(count>5) {
          //Throws error from Observable
          observer.error(new Error('Count is greater than 5'));
        }
        count++;
      }, 1000)
    })

    //Transform Observable data using rxjs Operators
    customIntervalObservable.pipe(
      map((data: number) => {
        return 'Round: ' + (data + 1);
      }
      ))

    //subscribe to custom Observable
    customIntervalObservable.subscribe( 
      //1st part of subscription is data
      data=> {
        console.log(data);
      },
      //2nd part of subscription is error
      error=> {
        console.log(error);
        alert(error.message);
      },
      //3rd part, completion handler of subscription, but on error completion part does not executes
      () => {
        console.log('Completed...')
      }      
    );
  }

  ngOnDestroy() {
    this.fristObserSubscription.unsubscribe();
  }

}
