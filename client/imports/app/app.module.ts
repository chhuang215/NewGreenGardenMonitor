import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from "ionic-angular";
import { AppComponent } from './app.component';

import {DeviceListComponent} from "../pages/device-list/device-list.component";
import {DeviceStatusComponent} from "../pages/device-status/device-status.component";
import {MomentModule} from "angular2-moment";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    DeviceListComponent,
    DeviceStatusComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent,
    DeviceListComponent,
    DeviceStatusComponent
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
