import {Component} from "@angular/core";
import { NavParams } from 'ionic-angular';

@Component({
  //selector: "device-status",
  //template: template,
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>
          Device status : {{ device.name }}
        </ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <ion-grid>
        <ion-row>
          <ion-col width-33> <ion-icon ios="ios-water" md="md-water"></ion-icon> Water: 67%</ion-col>
          <ion-col width-33> <ion-icon ios="ios-sunny" md="md-sunny"></ion-icon> Temp: 17 C</ion-col>
          <ion-col width-33>Extra</ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  `
})

export class DeviceStatusComponent {
  device ;
  constructor(params: NavParams) {
    this.device = params.data.device;
  }
}
