import { Component } from "@angular/core";
import { NavParams } from 'ionic-angular';
import { PlantDetailComponent } from "../plant-detail/plant-detail.component"
import style from "./device-status.component.scss";

@Component({
  //selector: "device-status",
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>
          Device status : {{ device.name }}
        </ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <ion-grid>
        <ion-row>
          <ion-col
            [attr.width-33]="displayAll? true : null"
            [attr.width-75]="statusToggled == 1 ? true : null"
            (click)="toggleStatusDetail(1)"
          >
            <div class="center">
              <ion-icon ios="ios-water" md="md-water"></ion-icon> Water: OK / 67%
              <div *ngIf="statusToggled == 1 ">More detail</div>
            </div>

          </ion-col>

          <ion-col
            [attr.width-33]="displayAll? true : null"
            [attr.width-75]="statusToggled == 2 ? true : null"
            (click)="toggleStatusDetail(2)"
          >
            <div class="center">
              <ion-icon ios="ios-sunny" md="md-sunny"></ion-icon> Light: ON <br> 20 &#8451; 68 &#8457;
            </div>

          </ion-col>
            <!-- [attr.width-10]="!(displayAll || statusToggled == 3) ? true : null" -->
          <ion-col

            [attr.width-33]="displayAll? true : null"
            [attr.width-75]="statusToggled == 3 ? true : null"
            (click)="toggleStatusDetail(3)"
          >
          <div class="center">
              Nutrient
          </div>

          </ion-col>
        </ion-row>
      </ion-grid>
      <!--div>{{eventTriggered}}</div-->
      <plant-slots></plant-slots>
    </ion-content>
  `,
  styles: [style],
})

export class DeviceStatusComponent {
  device ;
  //eventTriggered = "none";
  spinClass= "";
  displayAll = true;
  statusToggled = -1;
  constructor(params: NavParams) {
    this.device = params.data.device;

  }

  toggleStatusDetail(stat){
    if(this.displayAll){
      this.displayAll = false;
      this.statusToggled = stat;
    }
    else{
      this.displayAll = true;
      this.statusToggled = -1;
    }

  }

  // rotateRight(e){
  //   if(!this.spinClass)
  //     this.spinClass = "spin";
  //   else{
  //     this.spinClass = "";
  //   }
  // }
  //
  // tapEvent(e){
  //   console.log(e);
  //   this.eventTriggered =  "TAP";
  // }
  //
  // rotateEvent(e){
  //   console.log(e);
  //   this.eventTriggered = "ROTATE";
  // }
}
