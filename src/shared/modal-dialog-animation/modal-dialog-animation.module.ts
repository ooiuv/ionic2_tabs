import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDialogAnimationPage } from './modal-dialog-animation';

@NgModule({
  declarations: [
    ModalDialogAnimationPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDialogAnimationPage),
  ],
  exports: [ModalDialogAnimationPage]
})
export class ModalDialogAnimationPageModule {
}
