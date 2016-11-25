import { Component} from "@angular/core";
import { NavParams } from 'ionic-angular';
import style from "./plant-detail.component.scss";
import template from "./plant-detail.component.html";
import {RecipeVideoComponent} from "./recipe-video.component";

@Component({

  template,
  styles:[style],
})

export class PlantDetailComponent {
  plant;

  constructor(params: NavParams) {
    this.plant = params.data.plant;
  }

  toggleRecipe(recipe){
    recipe.show = !recipe.show;
  }

}
