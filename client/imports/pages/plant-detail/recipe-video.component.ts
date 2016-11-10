import { Component , Input , OnInit } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import style from "./recipe-video.component.scss";
@Component({
  selector: "recipe-video",
  template:`
  <div class="videoContainer">
    <iframe [src]="srcUrl" frameborder="0" allowfullscreen ></iframe>
    <div id="player"></div>
  </div>
  `,
  styles:[style],

})
export class RecipeVideoComponent implements OnInit {

  @Input() src;
  @Input() width;
  @Input() height;
  srcUrl ;

  constructor(public sanitizer: DomSanitizer) {


  }

  ngOnInit() {
    this.srcUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);

  }


}
