import { Component, OnInit } from '@angular/core';

import { ServersRouteService } from '../serversroute.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-serverroute',
  templateUrl: './edit-serverroute.component.html'
})
export class EditServerRouteComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: ServersRouteService, 
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activateRoute.snapshot.queryParams);
    console.log(this.activateRoute.snapshot.fragment);
    this.activateRoute.queryParams.subscribe();
    this.activateRoute.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
