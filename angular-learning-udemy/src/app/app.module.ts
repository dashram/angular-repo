import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerListComponent } from './server/server-list/server-list.component';
import { FormsModule} from '@angular/forms';
import { DatabindComponent } from './databind/databind.component';
import { CockpitComponent } from './databind/cockpit/cockpit.component';
import { ServerElementComponent } from './databind/server-element/server-element.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerListComponent,
    DatabindComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
