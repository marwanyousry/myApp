import { RequestType, RequestHelperProvider, RequestParams } from './../../providers/request-helper/request-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpinnerProvider } from '../../providers/spinner/spinner';

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  userId: string;
  requestParams: RequestParams[];
  orders: any [] = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public request: RequestHelperProvider,
              private spinner: SpinnerProvider) {
    this.userId = this.navParams.get('userId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.gerOrders();
  }


  gerOrders(){
    this.spinner.showSpinner();
    this.requestParams = [{label: 'userId', value: this.userId}];
    this.request.sendRequest(RequestType.GET, 'http://mobile.musa3ed.com/api/GetMyRentContracts', this.requestParams).subscribe((res)=>{
      this.orders = res;
    },(error)=>{
      this.spinner.hideSpinner();
    },()=>{
      this.spinner.hideSpinner();
    })
  }

}
