import { Component } from "@angular/core";
import { NavParams } from 'ionic-angular';
import { PlantDetailComponent } from "../plant-detail/plant-detail.component"
import template from "./device-status.component.html";
import style from "./device-status.component.scss";

@Component({
  //selector: "device-status",
  template,
  styles: [style],
})

export class DeviceStatusComponent {
  device ;
  //eventTriggered = "none";
  spinClass= "";
  displayAll = true;
  statusToggled = -1;
  constructor(params: NavParams) {
    this.device = params.data.device;

  }

  toggleStatusDetail(stat){
    // if(this.displayAll){
    //   this.displayAll = false;
    //   this.statusToggled = stat;
    // }
    // else{
    //   this.displayAll = true;
    //   this.statusToggled = -1;
    // }

    console.log("toggled " + stat);
    

  }
}
