import {Component} from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';
//import template from "/client/imports/pages/device-list/device-list.component.html";
import {DeviceStatusComponent} from '../device-status/device-status.component';
@Component({
  selector: "device-list",
  //template: template,
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Devices</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <button ion-item *ngFor="let device of devices" (click)="openDeviceStatusPage(device)">
        <ion-thumbnail item-left>
          <img src="/plant.jpg">
        </ion-thumbnail>
        <h2>{{device.name}}</h2>
        <p>Condition: {{device.condition}}</p>
      </button>
      <ion-item>
        <button ion-button block round icon-right>
          Add new <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>
        </button>
      </ion-item>
    </ion-list>
  </ion-content>
  `
})
export class DeviceListComponent {
  devices = [
    {
      type: "eden",
      name: "eden 1",
      condition: "good"
    },
    {
      type: "eden",
      name: "eden 2",
      condition: "good"
    },
    {
      type: "wall",
      name: "wall 1",
      condition: "good"
    },
  ];
  constructor( public nav: NavController ) {

  }

  openDeviceStatusPage(device) {
    this.nav.push(DeviceStatusComponent, { device: device });
  }
}
