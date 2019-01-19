import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerListComponent } from './server/server-list/server-list.component';
import { FormsModule} from '@angular/forms';
import { DatabindComponent } from './databind/databind.component';
import { CockpitComponent } from './databind/cockpit/cockpit.component';
import { ServerElementComponent } from './databind/server-element/server-element.component'
import { HighLightDirective } from './highlight-directive/highlight.directive';
import { BetterHighLightDirective } from './highlight-directive/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerListComponent,
    DatabindComponent,
    CockpitComponent,
    ServerElementComponent,
    HighLightDirective,
    BetterHighLightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
