import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {IonAlphaScroll} from "ionic2-alpha-scroll";
import {HomePage} from "../home/home";

/*
  Generated class for the Fiter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fiter',
  templateUrl: 'fiter.html'
})
export class FiterPage {


  constructor(public navCtrl: NavController,private victrl:ViewController ) {

  }

  ionViewDidLoad() {
    console.log('Hello FiterPage Page');
  }

  Dismiss(){
      this.victrl.dismiss();

  }



}
