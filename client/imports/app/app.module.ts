import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from "ionic-angular";
import { AppComponent } from './app.component';

import {DeviceListComponent} from "../pages/device-list/device-list.component";
import {DEVICESTATUS_DIRECTIVES} from "../pages/device-status/";
import {PlantDetailComponent, VideoRecipeComponent} from "../pages/plant-detail/plant-detail.component";
import {MomentModule} from "angular2-moment";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    DeviceListComponent,
    DEVICESTATUS_DIRECTIVES,
    PlantDetailComponent,
    VideoRecipeComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent,
    DeviceListComponent,
    DEVICESTATUS_DIRECTIVES,
    PlantDetailComponent
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
