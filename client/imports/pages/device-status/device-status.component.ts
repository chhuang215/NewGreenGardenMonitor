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
  statusToggled = -1;
  constructor(params: NavParams) {
    this.device = params.data.device;

  }

  toggleStatusDetail(stat){
    if(this.statusToggled == stat){
      this.statusToggled = -1;
      
    }
    else{
      this.statusToggled = stat;
    }
    

  }

  displayStatus(stat){
    return ((this.statusToggled == -1) || stat==this.statusToggled);
  }
}
