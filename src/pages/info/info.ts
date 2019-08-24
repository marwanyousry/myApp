import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  userId:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userId = this.navParams.get('userId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  profile(){
    this.navCtrl.push("ProfilePage", {userId: this.userId})
  }

  orders(){
    this.navCtrl.push("OrdersPage", {userId: this.userId})
  }

}
