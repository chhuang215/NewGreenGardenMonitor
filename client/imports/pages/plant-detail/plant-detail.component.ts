import { Component } from "@angular/core";
import { NavParams } from 'ionic-angular';
import style from "./plant-detail.component.scss";
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
      <ion-item>
        <h2>Recipe 1  <span class="difficulty">Difficulty: 2</span></h2>
  
        <p> Ingre and vid </p>
      </ion-item>
      <button ion-item>Recipe 2  <span class="difficulty">Difficulty: 4</span></button>
      <button ion-item>Recipe 3  <span class="difficulty">Difficulty: Gorden Ramsay</span> </button>
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

}
