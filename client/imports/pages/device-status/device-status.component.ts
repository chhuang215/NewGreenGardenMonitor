import {Component} from "@angular/core";
import { NavParams } from 'ionic-angular';
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
      <div>{{eventTriggered}}</div>
      <div class="device-inner {{spinClass}}" (tap)="tapEvent($event)" (rotate)="rotateEvent($event)">
        <div class="seed-slots">
          <button ion-button small round *ngFor="let seedSlot of seedSlots" >{{seedSlot.id}}</button>
        </div>
      </div>
      <button ion-button small (click)="rotateRight($event)" >rotate right</button>
    </ion-content>
  `,
  styles: [style],
})

export class DeviceStatusComponent {
  device ;
  seedSlots ;
  eventTriggered = "none";
  spinClass= "";
  constructor(params: NavParams) {
    this.device = params.data.device;
    this.seedSlots = [];
    let slotPositions = [
      {left: "50%" ,top: "40%"},
      {left:"60%", top:"50%"},
    ];
    for(let i = 1; i <=18; i++){
      this.seedSlots.push({id:i, type:"lettuce"});
    }
  }

  rotateRight(e){
    if(!this.spinClass)
      this.spinClass = "spin";
    else{
      this.spinClass = "";
    }
  }

  tapEvent(e){
    console.log(e);
    this.eventTriggered =  "TAP";
  }

  rotateEvent(e){
    console.log(e);
    this.eventTriggered = "ROTATE";
  }
}
