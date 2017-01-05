import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Abmnu provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Abmnu {

  constructor(public http: Http) {
    console.log('Hello Abmnu Provider');
  }

 dosomthing(){
    return '@bmnu';
  }

}
