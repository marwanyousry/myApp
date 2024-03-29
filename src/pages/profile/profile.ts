import { SpinnerProvider } from './../../providers/spinner/spinner';
import { RequestHelperProvider, RequestParams, RequestType } from './../../providers/request-helper/request-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  userId: string;
  requestParams: RequestParams[];
  profile: any = {};
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public request: RequestHelperProvider,
              private spinner: SpinnerProvider) {
    this.userId = this.navParams.get('userId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.getProfile();
  }


  getProfile(){
    this.spinner.showSpinner();
    this.requestParams = [{label: 'customerID', value: this.userId}];
    this.request.sendRequest(RequestType.GET, 'http://mobile.musa3ed.com/api/Account/GetUserProfileForDraya', this.requestParams).subscribe((res)=>{
      this.profile = res;
    },(error)=>{
      this.spinner.hideSpinner();
    },()=>{
      this.spinner.hideSpinner();
    })
  }

}
