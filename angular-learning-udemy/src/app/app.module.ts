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
    ShortenPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
