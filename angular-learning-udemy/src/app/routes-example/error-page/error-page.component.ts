import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    //message property set on app-routing.module.ts router
    this.errorMessage = this.activeRoute.snapshot.data['message'];

    //for any change in data
    this.activeRoute.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    )
  }

}
