import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CropImageDemoPage } from './crop-image-demo';

@NgModule({
  declarations: [
    CropImageDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(CropImageDemoPage),
  ],
})
export class CropImageDemoPageModule {}
