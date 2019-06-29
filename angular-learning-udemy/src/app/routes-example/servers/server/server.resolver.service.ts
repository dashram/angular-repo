import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ServersRouteService } from "../serversroute.service";

interface Server {
    id: number;
    name: string;
    status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server>{
    constructor(private serverService: ServersRouteService){}

    //This resolver helps to load data in advance.
    resolve(activeRouter: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(+activeRouter.params['id']);
    }
}