
import { Injectable } from '@angular/core';
import { Loading, LoadingController } from 'ionic-angular';

/*
  Generated class for the SpinnerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpinnerProvider {
  loading: Loading;
  constructor(public loadingCtrl: LoadingController) {
    console.log('Hello SpinnerProvider Provider');
  }

  showSpinner(timeout?: number) {
    this.loading = this.loadingCtrl.create({
      content: '<div class="custom-spinner"><div class="dot1"></div><div class="dot2"></div></div>'
    });
    this.loading.present();

    if (timeout) {
      setTimeout(() => {
        this.hideSpinner();
      }, timeout);
    }


  }


  hideSpinner() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }

  }

}
