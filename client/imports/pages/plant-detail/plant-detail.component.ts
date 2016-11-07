import { Component } from "@angular/core";
import { NavParams } from 'ionic-angular';

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
          <img src="romaine-lettuce.jpg" alt="romain lettuce">
        </ion-col>
        <ion-col width-50><h2>Days: 15</h2></ion-col>
      </ion-row>
    </ion-grid>

    <ion-list>
      <ion-list-header>
        Recipes
      </ion-list-header>
      <button ion-item>Food</button>
      <button ion-item>Another Food</button>
      <button ion-item>More Food</button>
    </ion-list>
  </ion-content>

  `,
})

export class PlantDetailComponent {
  plant;
  constructor(params: NavParams) {
    this.plant = params.data.plant;
  }

}
