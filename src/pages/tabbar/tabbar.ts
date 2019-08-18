import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';

/**
 * Generated class for the TabbarPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabbar',
  templateUrl: 'tabbar.html'
})
export class TabbarPage {

  infoRoot = 'InfoPage'
  contactRoot = 'ContactPage'
  profileRoot = 'ProfilePage'


  constructor(public navCtrl: NavController,
              private menu: MenuController) {}
  select(){
    this.menu.toggle();
  }

}
