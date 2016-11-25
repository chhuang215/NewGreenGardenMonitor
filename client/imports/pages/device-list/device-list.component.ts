import {Component} from "@angular/core";
import { NavController } from 'ionic-angular';
import {DeviceStatusComponent} from '../device-status/device-status.component';
import template from "./device-list.component.html";
import style from "./device-list.component.scss";
@Component({
  selector: "device-list",
  template,
  styles: [style]
})
export class DeviceListComponent {
  devices;
  constructor( public nav: NavController ) {
    this.devices = [
      {
        type: "neweden",
        name: "NewEden 1",
        condition: "good",
        ipaddr: "192.168.1.2",
      },
      // {
      //   type: "neweden",
      //   name: "NewEden 2",
      //   condition: "need water",
      //   ipaddr: "192.168.1.3",
      // },
      // {
      //   type: "wall",
      //   name: "wall 1",
      //   condition: "good",
      //   ipaddr: "192.168.1.4",
      // },
    ];
  }

  openDeviceStatusPage(device) {
    this.nav.push(DeviceStatusComponent, { device: device });
  }
}
