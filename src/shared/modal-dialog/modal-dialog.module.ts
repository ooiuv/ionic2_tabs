import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDialogPage } from './modal-dialog';

@NgModule({
  declarations: [ModalDialogPage],
  exports: [ModalDialogPage],
  imports: [
    IonicPageModule.forChild(ModalDialogPage),
  ]
})
export class ModalDialogPageModule {
}
