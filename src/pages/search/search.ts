import {Component, NgZone} from '@angular/core';
import {NavController, ViewController, Searchbar} from 'ionic-angular';
import {google} from "angular2-google-maps/core/services/google-maps-types";
import {Directive} from "@angular/core/src/metadata/directives";
import {Focuser} from "../../components/focuser/focuser";
import {ViewChild} from "@angular/core/src/metadata/di";

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'search.html',



})

export class SearchPage {
  @ViewChild('searchbar') searchbar:Searchbar;

  //  show2:any=false;
  //autocompleteItems;
  //autocomplete;
  //service = new google.maps.places.AutocompleteService();

  constructor (public viewCtrl: ViewController, private zone: NgZone) {
   // this.autocompleteItems = [];
   // this.autocomplete = {
    //  query: ''
    //};
  }
  ionViewDidEnter() {
    setTimeout(()=>{
       console.log("Searchbar open")
      this.searchbar.setFocus();
    },2);}


  dismiss4() {
    this.viewCtrl.dismiss();
  }




  /*
  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
  }

  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let me = this;
    this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: {country: 'TH'} }, function (predictions, status) {
      me.autocompleteItems = [];
      me.zone.run(function () {
        predictions.forEach(function (prediction) {
          me.autocompleteItems.push(prediction.description);
        });
      });
    });


     }*/


}
