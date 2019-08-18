import { ServiceRequestProvider } from './../../providers/service-request/service-request';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Helper } from '../../helper/helper';
/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private event: Events,
              private helper: Helper,
              private storage: Storage) {
                storage.set('name', 'Ahmed');
                this.event.subscribe('MY_EVENT',(val)=>{
                console.log("TCL: InfoPage -> val", val)
                  
                })
  }

  ionViewDidLoad() {
    this.helper.log('aaaaaaaa');
    console.log('ionViewDidLoad InfoPage');
  }

  getName(){
    this.storage.get('name').then((val)=>{
    console.log("TCL: InfoPage -> getName -> val", val)

    }).catch((error)=>{
    console.log("TCL: InfoPage -> getName -> error", error)

    });;
  }

}
