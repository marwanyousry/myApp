import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlertHandlerProvider {
  dissmissText: string;
  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  presentToast(messageKey: string, showCloseButton?: boolean, showWithDuration?: boolean) {

    const toast = this.toastCtrl.create({
      message: messageKey,
      duration: showWithDuration ? 2000 : 1500,
      position: 'bottom',
      showCloseButton: true,
      dismissOnPageChange: true,
      cssClass: 'opacity:0.6',
      closeButtonText: 'Dismiss'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}


