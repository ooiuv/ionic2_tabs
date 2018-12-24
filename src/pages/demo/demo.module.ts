import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DemoPage } from './demo';
import { PaginationDemoPage } from './pagination-demo/pagination-demo';
import { CustomIconDemoPage } from './custom-icon-demo/custom-icon-demo';
import { EchartsDemoPage } from './echarts-demo/echarts-demo';
import { SelectPicDemoPage } from './select-pic-demo/select-pic-demo';
import { PagingPageModule } from '../../shared/paging/paging.module';
import { SelectPicturePageModule } from '../../shared/select-picture/select-picture.module';
import { ModalScalePageModule } from './transition-demo/modal-scale/modal-scale.module';
import { ModalFromRightPageModule } from './transition-demo/modal-from-right/modal-from-right.module';
import { TransitionDemoPageModule } from './transition-demo/transition-demo.module';
import { CityPickerDemoPage } from './city-picker-demo/city-picker-demo';
import { CityPickerModule } from 'ionic2-city-picker';
import { DemoService } from './DemoService';
import { CalendarModule } from 'ion2-calendar';
import { CalendarDemoPage } from './calendar-demo/calendar-demo';
import { NativeDemoPage } from './native-demo/native-demo';
import { FileCacheDemoPage } from './file-cache-demo/file-cache-demo';
import { PermissionDemoPage } from './permission-demo/permission-demo';
import { PatrolTaskPage } from './permission-demo/patrol-task/patrol-task';
import { CustomerListPage } from './permission-demo/customer-list/customer-list';
import { QrcodeDemoPage } from './qrcode-demo/qrcode-demo';
import { AllowleverDemoPage } from './allowlever-demo/allowlever-demo';
import { FormDemoPage } from './form-demo/form-demo';
import { DirectivesModule } from '../../directives/directives.module';
import { TransitionDialogDemoPage } from './transition-dialog-demo/transition-dialog-demo';
import { ModalDialogAnimationPageModule } from '../../shared/modal-dialog-animation/modal-dialog-animation.module';
import { QrscannerDemoPage } from './qrscanner-demo/qrscanner-demo';
import { QrscannerPageModule } from '../../shared/qrscanner/qrscanner.module';
import { FormValidationDemoPage } from './form-validation-demo/form-validation-demo';

@NgModule({
  imports: [IonicModule, PagingPageModule, SelectPicturePageModule, TransitionDemoPageModule, ModalScalePageModule, ModalFromRightPageModule, CityPickerModule, CalendarModule, DirectivesModule, ModalDialogAnimationPageModule, QrscannerPageModule],
  declarations: [DemoPage, PermissionDemoPage, PatrolTaskPage, CustomerListPage, PaginationDemoPage, CustomIconDemoPage, EchartsDemoPage, SelectPicDemoPage, CityPickerDemoPage, CalendarDemoPage, NativeDemoPage, FileCacheDemoPage, QrcodeDemoPage, AllowleverDemoPage, FormDemoPage, TransitionDialogDemoPage, QrscannerDemoPage, FormValidationDemoPage],
  entryComponents: [DemoPage, PermissionDemoPage, PatrolTaskPage, CustomerListPage, PaginationDemoPage, CustomIconDemoPage, EchartsDemoPage, SelectPicDemoPage, CityPickerDemoPage, CalendarDemoPage, NativeDemoPage, FileCacheDemoPage, QrcodeDemoPage, AllowleverDemoPage, FormDemoPage, TransitionDialogDemoPage, QrscannerDemoPage, FormValidationDemoPage],
  providers: [DemoService],
  exports: [IonicModule]
})
export class DemoModule {
}
