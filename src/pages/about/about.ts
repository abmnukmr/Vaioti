import { Component } from '@angular/core';

import {NavController} from 'ionic-angular';
import {TransitionPage} from "../transition/transition";
import {LocationTracker} from "../../providers/location-tracker";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 transitionpage=TransitionPage
  title: string = 'My first angular2-google-maps project';

  constructor(public navCtrl: NavController) {

  }


}
