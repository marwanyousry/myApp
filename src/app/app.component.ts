import { AboutPage } from './../pages/about/about';
import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home.page';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'TabbarPage';
  count: number = 0;
  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private event: Events) {
                
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    }); 
  }

  openPage(){
    this.event.publish('MY_EVENT', this.count++);
  }

  closeMenu(){

  }
}

