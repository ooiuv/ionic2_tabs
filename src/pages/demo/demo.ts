import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeDemoPage } from './native-demo/native-demo';
import { PaginationDemoPage } from './pagination-demo/pagination-demo';
import { CustomIconDemoPage } from './custom-icon-demo/custom-icon-demo';
import { SelectPicDemoPage } from './select-pic-demo/select-pic-demo';
import { TransitionDemoPage } from './transition-demo/transition-demo';
import { CropPicDemoPage } from './crop-pic-demo/crop-pic-demo';
import { CityPickerDemoPage } from './city-picker-demo/city-picker-demo';
import { CalendarDemoPage } from './calendar-demo/calendar-demo';
import { FileCacheDemoPage } from './file-cache-demo/file-cache-demo';
import { EchartsDemoPage } from './echarts-demo/echarts-demo';
import { PermissionDemoPage } from './permission-demo/permission-demo';
import { QrcodeDemoPage } from './qrcode-demo/qrcode-demo';
import { AllowleverDemoPage } from './allowlever-demo/allowlever-demo';
import { FormDemoPage } from './form-demo/form-demo';
import { TransitionDialogDemoPage } from './transition-dialog-demo/transition-dialog-demo';
import { QrscannerDemoPage } from './qrscanner-demo/qrscanner-demo';
import { FormValidationDemoPage } from './form-validation-demo/form-validation-demo';

@Component({
  selector: 'page-contact',
  templateUrl: 'demo.html'
})
export class DemoPage {

  constructor(private navCtrl: NavController) {

  }

  permission() {
    this.navCtrl.push(PermissionDemoPage);
  }

  native() {
    this.navCtrl.push(NativeDemoPage);
  }

  form() {
    this.navCtrl.push(FormDemoPage);
  }

  formValidation() {
    this.navCtrl.push(FormValidationDemoPage);
  }

  pagination() {
    this.navCtrl.push(PaginationDemoPage);
  }

  customIcon() {
    this.navCtrl.push(CustomIconDemoPage);
  }

  echarts() {
    this.navCtrl.push(EchartsDemoPage);
  }

  selectPic() {
    this.navCtrl.push(SelectPicDemoPage);
  }

  cropPic() {
    this.navCtrl.push(CropPicDemoPage);
  }

  pageTransition() {
    this.navCtrl.push(TransitionDemoPage);
  }

  dialogTransition() {
    this.navCtrl.push(TransitionDialogDemoPage);
  }

  cityPicker() {
    this.navCtrl.push(CityPickerDemoPage);
  }

  calendar() {
    this.navCtrl.push(CalendarDemoPage);
  }

  fileCache() {
    this.navCtrl.push(FileCacheDemoPage);
  }

  qrCode() {
    this.navCtrl.push(QrcodeDemoPage);
  }

  scan() {
    this.navCtrl.push(QrscannerDemoPage);
  }

  alloylever() {
    this.navCtrl.push(AllowleverDemoPage);
  }

}
