import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabbarPage } from './tabbar';

@NgModule({
  declarations: [
    TabbarPage,
  ],
  imports: [
    IonicPageModule.forChild(TabbarPage),
  ]
})
export class TabbarPageModule {}
