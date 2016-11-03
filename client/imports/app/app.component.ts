import { Component } from '@angular/core';
import { Platform } from "ionic-angular";
import { StatusBar } from "ionic-native";
import template from './app.component.html';
import {DeviceListComponent} from "../pages/device-list/device-list.component";
//import style from './app.component.scss';

@Component({
  selector: 'app',
  template,
  //styles: [ style ]
})
export class AppComponent {
  rootPage = DeviceListComponent;
  constructor(platform: Platform) {

    platform.ready().then(() => {
      console.log("Maybe?");
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
