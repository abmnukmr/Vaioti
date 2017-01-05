import {Component} from '@angular/core';
import {NavController, ModalController, MenuController} from 'ionic-angular';
import {Abmnu} from "../../providers/abmnu";
import {TransitionPage} from "../transition/transition";
import {ProfilePage} from "../Profile/profile";
import {Completeservice} from "../../providers/completeservice";
import {SearchPage} from "../search/search";
import {WendorPage} from "../wendor/wendor";
import {FiterPage} from "../fiter/fiter";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 // directives : [AUTOCOMPLETE_DIRECTIVES],
 // providers:[Completeservice]

    })


  export class HomePage {
  title:string;
  transitionpage=TransitionPage;
  search=SearchPage;
  profile=ProfilePage;
  wendor=WendorPage;
  show2:any=false;

  constructor(public navCtrl: NavController,private _abmnu:Abmnu,private menuCtrl:MenuController, private modalCtrl: ModalController) {
    /*this.title=this._abmnu.dosomthing();
    this.address = {
      place: ''
    };*/

  }

  mySlideOptions = {
    initialSlide: 1,
    loop: true,
    autoplay:2500,
    direction:'vertical',
    pager:true
  };
  showAddressModal() {
   let modal = this.modalCtrl.create(SearchPage);
    /* let  me = this;
    modal.onDidDismiss(data => {
      this.address.place = data;
    });*/
   // modal.present(modal);
    console.log("modal not working")
   modal.present();
     }

  showFilter() {
    let modal = this.modalCtrl.create(FiterPage);
    /* let  me = this;
     modal.onDidDismiss(data => {
     this.address.place = data;
     });*/
    // modal.present(modal);
    console.log("modal not working")
    modal.present();
  }
  openMenu() {
    this.menuCtrl.open();
  }


}
