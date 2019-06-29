import { Component, OnInit } from '@angular/core';

import { ServersRouteService } from '../serversroute.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanDeactivateComponent } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-serverroute',
  templateUrl: './edit-serverroute.component.html'
})
export class EditServerRouteComponent implements OnInit, CanDeactivateComponent {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersRouteService, 
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log(this.activateRoute.snapshot.queryParams);
    console.log(this.activateRoute.snapshot.fragment);
    this.activateRoute.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    const id = +this.activateRoute.snapshot.params['id'];
    this.activateRoute.fragment.subscribe();
    this.server = this.serversService.getServer(id);

    //subscribe route params to update the id if params change [need to be implemented]
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.activateRoute});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if( !this.allowEdit) {
      return true;
    } 
    if( (this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved ) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

}
