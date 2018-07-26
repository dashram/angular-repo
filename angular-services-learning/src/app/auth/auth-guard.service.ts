import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

import { AuthFakeService } from "./auth-fake.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private authFakeService: AuthFakeService,
        private router: Router){
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.authFakeService.isAuthenticated()
                .then(
                    (authenticated: boolean) => {
                        if( authenticated ){
                            return true;
                        } else {
                            this.router.navigate(['/']);
                        }
                    }
                );
        }
        
}