import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from "./routes-example/users/users.component";
import { HomeComponent } from "./routes-example/home/home.component";
import { ServersRouteComponent } from "./routes-example/servers/serversroute.component";
import { UserComponent } from "./routes-example/users/user/user.component";
import { EditServerRouteComponent } from "./routes-example/servers/edit-server/edit-serverroute.component";
import { ServerRouteComponent } from "./routes-example/servers/server/serverroute.component";
import { PageNotFoundComponent } from "./routes-example/page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard-service";
import { CanDeactivateGuard } from "./routes-example/servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./routes-example/error-page/error-page.component";
import { ServerResolver } from "./routes-example/servers/server/server.resolver.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'users', component: UsersComponent, children: [
        //Child routes of users
        { path: ':id/:name', component: UserComponent},
    ]},    
    { path: 'servers', 
        //canActivate: [AuthGuard],
        //Guard to apply only on child routes
        canActivateChild: [AuthGuard], component: ServersRouteComponent, children: [
        //servers will get appended to below paths automatically from patent router
        { path: ':id', component: ServerRouteComponent, resolve: {serverResolverObj: ServerResolver}},
        { path: ':id/edit', component: EditServerRouteComponent, canDeactivate: [CanDeactivateGuard]},
    ]},
    //{ path: 'not-found', component: PageNotFoundComponent},
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},
    //catch for all routes not covered in defined paths in application
    { path: '**', redirectTo: '/not-found'},    
]

@NgModule({
    imports:[ RouterModule.forRoot(appRoutes) ],
    exports:[ RouterModule ]
})
export class AppRoutingModule {    
}