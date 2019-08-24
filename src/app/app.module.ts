import { AboutPage } from './../pages/about/about';
import { ComponentsModule } from './../components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home.page';
import { ObserveProvider } from '../providers/observe/observe.service';
import { RequestHelperProvider } from '../providers/request-helper/request-helper';
import { AlertHandlerProvider } from '../providers/alert-handler/alert-handler';
import { SpinnerProvider } from '../providers/spinner/spinner';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { ServiceRequestProvider } from '../providers/service-request/service-request';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Helper } from '../helper/helper';
import { EncryptionProvider } from '../providers/encryption/encryption';
import { ValidationRules } from '../helper/ValidationRules';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'overlay'
    }),
    ComponentsModule,
    HttpModule,
    HttpClientModule, 
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ObserveProvider,
    RequestHelperProvider,
    AlertHandlerProvider,
    SpinnerProvider,
    ValidationRules,
    ServiceRequestProvider,
    Helper,
    EncryptionProvider
  ]
})
export class AppModule {}
