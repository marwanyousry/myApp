import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public event: Events) {
                this.event.subscribe("EVENT", (val)=>{
                  console.log("EVENT val: "+ val);
                })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
