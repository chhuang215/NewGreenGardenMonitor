import { Component} from "@angular/core";
import { NavParams } from 'ionic-angular';
import style from "./plant-detail.component.scss";

import {RecipeVideoComponent} from "./recipe-video.component";

@Component({

  template:`
  <ion-header>
    <ion-navbar>
      <ion-title>
        Plant Detail - {{ plant.id }}. {{plant.type}}
      </ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content padding>
    <ion-grid>
      <ion-row>
        <ion-col width-50>
          <img src={{plant.img}} alt={{plant.type}}>
        </ion-col>
        <ion-col width-50><h2>Days: 15</h2></ion-col>
      </ion-row>
    </ion-grid>
    <div>{{plant.description}}</div>
    <br>
    <ion-list>
      <ion-list-header>
        Recipes
      </ion-list-header>
      <ion-item *ngFor="let recipe of plant.recipes">
        <div class="recipeTitle">
          <h2 (click)="toggleRecipe(recipe)">{{recipe.name}}  <span class="difficulty">Difficulty: {{recipe.difficulty}}</span></h2>
        </div>

        <div *ngIf="recipe.show">
          <br>
          <h2> Ingrediants </h2>
          <ul>
            <li *ngFor="let ingredient of recipe.ingredients">
              {{ingredient.quantity}} {{ingredient.technique}} {{ingredient.name}}
            </li>
          </ul>

          <recipe-video src={{recipe.video.src}}></recipe-video>

        </div > <!-- /recipe-->
      </ion-item>
    </ion-list>
  </ion-content>

  `,
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
