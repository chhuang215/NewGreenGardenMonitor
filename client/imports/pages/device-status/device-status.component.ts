import { Component , trigger,
  state,
  style as s,
  transition,
  animate,
keyframes} from "@angular/core";
import { NavParams } from 'ionic-angular';
import { PlantDetailComponent } from "../plant-detail/plant-detail.component"
import template from "./device-status.component.html";
import style from "./device-status.component.scss";

@Component({
  //selector: "device-status",
  template,
  styles: [style],
  animations: [
    trigger('statusTransition', [
    state('-1' , s({ display: "none", opacity: 0, width:0 })), 
    state('0 ' , s({  })), 
    state('1', s({ display:"table", "margin-top": ".3rem" , width:"100%"})),
    transition('0 => -1', animate('.2s ')),
    transition('-1 => 0', animate('.2s .1s')),
    transition('0 => 1', animate('.3s',keyframes([
        s({display:"table", offset:0}),
        s({"margin-top":".3rem",  offset: 0.6}),
        s({width:"100%" ,    offset: 1.0})
      ]))
    ),
    transition('1 => 0', animate('0s'))
    ]),
    trigger('toggleDetail', [
      state('true',s({display: 'table-cell', opacity:1 })),
      state('false',s({display:'none', opacity:0, width:0})),
      transition('0 => 1', animate('.15s .3s', keyframes([
        s({display:"table-cell", offset:0}),
        s({opacity:1, offset:1}),
        ]))
      ),
      transition('1 => 0', animate('0s'))
    ])
  ]
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

  isToggled(stat){
    if (this.statusToggled == -1) return 0;
    if(this.statusToggled == stat) return 1;
    return -1;

  }

  displayStatus(stat){
    return ((this.statusToggled == -1) || stat==this.statusToggled);
  }
}
