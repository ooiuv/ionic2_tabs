import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareDemoPage } from './share-demo';

@NgModule({
  declarations: [
    ShareDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(ShareDemoPage),
  ],
})
export class ShareDemoPageModule {}
