import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from "ionic-angular";
import { AppComponent } from './app.component';

import {DeviceListComponent} from "../pages/device-list/device-list.component";
import {DEVICESTATUS_DIRECTIVES, DEVICESTATUS_ENTRY} from "../pages/device-status/";
import {PLANTDETAIL_DIRECTIVES, PLANTDETAIL_ENTRY} from "../pages/plant-detail/";
import {MomentModule} from "angular2-moment";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    DeviceListComponent,
    DEVICESTATUS_DIRECTIVES,
    PLANTDETAIL_DIRECTIVES,
  ],
  // Entry Components
  entryComponents: [
    AppComponent,
    DeviceListComponent,
    DEVICESTATUS_ENTRY,
    PLANTDETAIL_ENTRY
  ],
  // Providers
  providers: [
  ],
  // Modules
  imports: [
    IonicModule.forRoot(AppComponent),
    MomentModule
  ],
  // Main Component
  bootstrap: [ IonicApp ]
})
export class AppModule {}
