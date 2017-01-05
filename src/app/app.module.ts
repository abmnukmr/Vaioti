import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {WalletPage} from "../pages/wallet/wallet";
import {Abmnu} from "../providers/abmnu";
import {TransitionPage} from "../pages/transition/transition";
import {AgmCoreModule} from "angular2-google-maps/core";
import {ProfilePage} from "../pages/Profile/profile";
import {ConnectivityService} from "../providers/connectivity-service";
import {SearchPage} from "../pages/search/search";
import {WendorPage} from "../pages/wendor/wendor";
import { DynamicComponentModule } from 'ng-dynamic';
import {IonAlphaScrollModule, IonAlphaScroll} from "ionic2-alpha-scroll";
import {FiterPage} from "../pages/fiter/fiter";
import {MapToIterable} from "ionic2-alpha-scroll/ion-alpha-scroll";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    WalletPage,
    HomePage,
    TabsPage,
    TransitionPage,
    ProfilePage,
    SearchPage,
    WendorPage,
    FiterPage
     ],
  imports: [
    IonAlphaScrollModule,
    DynamicComponentModule,
    DynamicComponentModule.forRoot({
      imports: [CommonModule, IonicModule],
      declarations: [MapToIterable]
    }),
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
      platforms: {
        android: {
          tabsPlacement: 'bottom',
          tabsHideOnSubPages: true,
          iconMode:"ios"

        },
        ios: {
          tabsPlacement: 'bottom',
          tabsHideOnSubPages: true,
          showCancelButton:true
        },
        windows:
        {
          tabsPlacement: 'bottom',
          tabsHideOnSubPages: true
        }
      }
    }
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDS1s-CmlAqqWpEpS8D7hm8-TchEtq_Dyc'
    })
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    WalletPage,
    ContactPage,
    HomePage,
    TabsPage,
    TransitionPage,
     ProfilePage,
    SearchPage,
    WendorPage,
    FiterPage


  ],
  providers:[Abmnu,ConnectivityService],
 // directives:[Focuser],
  schemas:     [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
