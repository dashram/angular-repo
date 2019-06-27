import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerListComponent } from './server/server-list/server-list.component';
import { DatabindComponent } from './databind/databind.component';
import { CockpitComponent } from './databind/cockpit/cockpit.component';
import { ServerElementComponent } from './databind/server-element/server-element.component'
import { HighLightDirective } from './highlight-directive/highlight.directive';
import { BetterHighLightDirective } from './highlight-directive/better-highlight.directive';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DirectiveComponent } from './highlight-directive/directive.component';
import { UnlessDirective } from './highlight-directive/unless.directive';
import { ServiceComponent } from './services/service.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import { AccountService } from './services/account.service';

//Routes Modules
import { RoutesExampleComponent } from './routes-example/routes.component';
import { UserComponent } from './routes-example/users/user/user.component';
import { UsersComponent } from './routes-example/users/users.component';
import { ServerRouteComponent } from './routes-example/servers/server/serverroute.component';
import { ServersRouteComponent } from './routes-example/servers/serversroute.component';
import { ServersRouteService } from './routes-example/servers/serversroute.service';
import { HomeComponent } from './routes-example/home/home.component';
import { EditServerRouteComponent } from './routes-example/servers/edit-server/edit-serverroute.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerListComponent,
    DatabindComponent,
    CockpitComponent,
    ServerElementComponent,
    HighLightDirective,
    BetterHighLightDirective,
    FormTemplateDrivenComponent,
    FormReactiveComponent,
    DirectiveComponent,
    ServiceComponent,
    AccountComponent,
    NewAccountComponent,
    UnlessDirective,
    ShortenPipe,
    FilterPipe,
    //Router-Example Components
    RoutesExampleComponent,
    UserComponent,
    UsersComponent,
    ServerRouteComponent,
    ServersRouteComponent,
    EditServerRouteComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule 
  ],
  //Services to be included to access thru applicaiton or use Injectable annotation
  providers: [
    AccountService,
    //Router-Example services
    ServersRouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
