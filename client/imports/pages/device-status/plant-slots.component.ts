import { Component } from "@angular/core";
import { NavController} from 'ionic-angular';
import { PlantDetailComponent } from "../plant-detail/plant-detail.component"
import style from "./plant-slots.component.scss";
@Component({
  selector: "plant-slots",
  template: `
    <div class="device-inner">
      <div class="plant-slots">
        <button ion-button small round class="btn-plant-slot" *ngFor="let plantSlot of plantSlots" (click)="openPlantDetailPage(plantSlot)" >
        {{plantSlot.id}}
        </button>
      </div>
    </div>
  `,
  styles: [style],

})
export class PlantSlotsComponent {
  plantSlots;
  constructor(public nav: NavController) {

    this.plantSlots = [];

    for(let i = 1; i <=20; i++){
      this.plantSlots.push({id:i, type:"lettuce"});
    }
  }

  openPlantDetailPage(plant){
    this.nav.push(PlantDetailComponent, {plant: plant});
  }
}
