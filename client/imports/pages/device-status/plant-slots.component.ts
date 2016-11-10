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
      this.plantSlots.push(
        {
          id:i,
          type:"lettuce",
          img:"romaine-lettuce.jpg",
          description:"Lettuce is a rich source of vitamin K and vitamin A. You put them in every dish to eat like a Canto.",
          recipes:[
            {
              name: "Simple Lettuce Salad",
              servings: 2,
              ingredients: [
                {
                  name: "NewGreen Lettuce",
                  quantity: "2 Cups",
                  technique: "torn",
                },
                {
                  name: "egg",
                  quantity: "1",
                  technique: "chopped hard-cooked",
                },
                {
                  name: "green onion",
                  quantity: "1",
                  technique: "sliced",
                },
                {
                  name: "mayonnaise",
                  quantity: "2 tablespoons",
                  technique: "",
                },
                {
                  name: "cider vinegar",
                  quantity: "1 teaspoon",
                  technique: "sliced",
                },
                {
                  name: "pepper",
                  quantity: "1/8 teaspoon",
                  technique: "",
                },
              ],
              video: {
                src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                width: 560,
                height:315
              },
            },

          ],
        });
    }
  }

  openPlantDetailPage(plant){
    this.nav.push(PlantDetailComponent, {plant: plant});
  }
}