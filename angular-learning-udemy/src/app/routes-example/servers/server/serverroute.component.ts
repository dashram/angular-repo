import { Component, OnInit } from '@angular/core';

import { ServersRouteService } from '../serversroute.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-serverroute',
  templateUrl: './serverroute.component.html'
})
export class ServerRouteComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersRouteService, 
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.activateRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.activateRoute.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    )
  }

}
