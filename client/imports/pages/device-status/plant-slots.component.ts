import { Component } from "@angular/core";
import { NavController} from 'ionic-angular';
import { PlantDetailComponent } from "../plant-detail/plant-detail.component"

import template from "./plant-slots.component.html";
import style from "./plant-slots.component.scss";
@Component({
  selector: "plant-slots",
  template,
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
          type:"Romaine Lettuce",
          img:"romaine.png",
          description: "<span class='boldFont'>Romaine Lettuce</span> <br/> Also known as Cos, this variety of head forming lettuce has deep green, long leaves with a crisp texture and deep taste.<br/><br/> Romaine's vitamin C and beta-carotene content make it a heart-healthy green. Vitamin C and beta-carotene work together to prevent the oxidation of cholesterol.",
          recipes:[
            {
              name: "Mighty Waldorf Salad",
              servings: 4,
              difficulty: 3,
              ingredients: [
                {
                  name: "NewGreen Romaine Lettuce",
                  quantity: "2 Cups",
                  technique: "",
                },
                {
                  name: "grapes",
                  quantity: "150g",
                  technique: "",
                },
                {
                  name: "apple",
                  quantity: "1",
                  technique: "",
                },
                {
                  name: "lemon",
                  quantity: "1",
                  technique: "",
                },
                {
                  name: "shelled walnuts",
                  quantity: "60g",
                  technique: "",
                },
                {
                  name: "celery",
                  quantity: "1 stalk",
                  technique: "",
                },
                {
                  name: "tarragon",
                  quantity: "6 sprigs",
                  technique: "",
                },
                {
                  name: "organic yogurt",
                  quantity: "250ml",
                  technique: "",
                },
                {
                  name: "olive oil",
                  quantity: "",
                  technique: "",
                },
                {
                  name: "english mustard",
                  quantity: "",
                  technique: "",
                },
                {
                  name: "salt and pepper",
                  quantity: "",
                  technique: "",
                },
              ],
              video: {
                src: "https://www.youtube.com/embed/0_Ifseq4Eg8",
                width: 560,
                height:315
              },
              show: false
            },
            
            {
              name: "Simple Lettuce Salad",
              servings: 2,
              difficulty: 1,
              ingredients: [
                {
                  name: "NewGreen Romaine Lettuce",
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
                src: "https://www.youtube.com/embed/HWRC5OWiyBg",
                width: 560,
                height:315
              },
              show: false
            },

          ],
        });
    }
  }

  openPlantDetailPage(plant){
    this.nav.push(PlantDetailComponent, {plant: plant});
  }
}
