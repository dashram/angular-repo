import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from "./routes-example/users/users.component";
import { HomeComponent } from "./routes-example/home/home.component";
import { ServersRouteComponent } from "./routes-example/servers/serversroute.component";
import { UserComponent } from "./routes-example/users/user/user.component";
import { EditServerRouteComponent } from "./routes-example/servers/edit-server/edit-serverroute.component";
import { ServerRouteComponent } from "./routes-example/servers/server/serverroute.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'users', component: UsersComponent},
    { path: 'users/:id/:name', component: UserComponent},
    { path: 'servers', component: ServersRouteComponent},
    { path: 'servers/:id', component: ServerRouteComponent},
    { path: 'servers/:id/edit', component: EditServerRouteComponent},
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {    
}