import { Component, OnInit } from '@angular/core';
import { ServersRouteService } from './serversroute.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serversroute',
  templateUrl: './serversroute.component.html'
})
export class ServersRouteComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersRouteService, 
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    //here relative path 'servers' route will append to currently active/selected route pointed by activeRoute
    this.router.navigate(['servers'], {relativeTo: this.activeRoute})
  }

}
