import { Component, OnInit } from '@angular/core';

import { ServersRouteService } from '../serversroute.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-serverroute',
  templateUrl: './serverroute.component.html'
})
export class ServerRouteComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersRouteService, 
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // const id = +this.activateRoute.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.activateRoute.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // )

    //resolver ussage example:
    this.activateRoute.data.subscribe(
      (data: Data) => {
        //serverResolverObj is the key used in app-routing.module.ts for ServerResolver to load data in advance
        //specially importance to resolve asyncronous data
        this.server = data['serverResolverObj']
      }
    )
  }

  onEdit() {
    //relative path used wrt "servers" path
    //on click of Edit button, queryParams usually gets lost
    //To preserve QueryParams, queryParamsHandling used
    this.router.navigate(['edit'], {relativeTo: this.activateRoute, queryParamsHandling: 'preserve'});
  }

}
