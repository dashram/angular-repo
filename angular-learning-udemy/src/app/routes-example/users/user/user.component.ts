import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription

  //ActivatedRoute will give access to the ID passed in the URL => Selected User
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    //this implementation only works on first load of commont
    this.user = {
      id: this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name']
    }
    //this is for subsequent load with chang in url params
    //Observable approach to update on any change
    this.paramsSubscription = this.activeRoute.params.subscribe(
      (params: Params ) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    )
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
