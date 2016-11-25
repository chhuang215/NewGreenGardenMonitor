import { Component , trigger,
  state,
  style as s,
  transition,
  animate} from "@angular/core";
import { NavParams } from 'ionic-angular';
import style from "./plant-detail.component.scss";
import template from "./plant-detail.component.html";
import {RecipeVideoComponent} from "./recipe-video.component";

@Component({
  
  template,
  styles:[style],
  animations: [
    trigger(
      'myAnimation', [
         transition(':enter', [
          s({height: '0px', opacity:0}),
          animate('200ms', s({height:'60vh', opacity:1}))
        ]),
        transition(':leave', [
          s({height:'*'}),
          animate('200ms', s({height: '0px'}))
        ])
      ]
    )
  ],
})

export class PlantDetailComponent {
  plant;

  constructor(params: NavParams) {
    this.plant = params.data.plant;
  }

  toggleRecipe(recipe){
    recipe.show = !recipe.show;
  }
  isToggledIcon(toggled){
    if(toggled){
      return "arrow-dropdown";
    }
    return "arrow-dropright";
    
  }

}
