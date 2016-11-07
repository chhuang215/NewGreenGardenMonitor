import { Component } from "@angular/core";
import { NavParams } from 'ionic-angular';
import { PlantDetailComponent } from "../plant-detail/plant-detail.component"
import style from "./device-status.component.scss";

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
          <ion-col width-33>
            <ion-icon ios="ios-water" md="md-water"></ion-icon> Water: OK / 67%
            <br> Nutrient
          </ion-col>
          <ion-col width-33> <ion-icon ios="ios-sunny" md="md-sunny"></ion-icon> Light: ON / Temp: 17 C</ion-col>
          <ion-col width-33>Nutrient</ion-col>
        </ion-row>
      </ion-grid>
      <!--div>{{eventTriggered}}</div-->
      <plant-slots></plant-slots>
    </ion-content>
  `,
  styles: [style],
})

export class DeviceStatusComponent {
  device ;
  //eventTriggered = "none";
  spinClass= "";
  constructor(params: NavParams) {
    this.device = params.data.device;

  }

  // rotateRight(e){
  //   if(!this.spinClass)
  //     this.spinClass = "spin";
  //   else{
  //     this.spinClass = "";
  //   }
  // }
  //
  // tapEvent(e){
  //   console.log(e);
  //   this.eventTriggered =  "TAP";
  // }
  //
  // rotateEvent(e){
  //   console.log(e);
  //   this.eventTriggered = "ROTATE";
  // }
}
