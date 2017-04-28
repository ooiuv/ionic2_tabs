import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import {DemoPage} from "./demo";
import {PaginationDemoPage} from "./pagination-demo/pagination-demo";
import {SharedModule} from "../../shared/shared.module";
import {CustomIconDemoPage} from "./custom-icon-demo/custom-icon-demo";
import {ChartjsDemoPage} from "./chartjs-demo/chartjs-demo";
import {RecordingPage} from "./recording/recording";
import {RecordingPlayPage} from "./recording/recording-play";
import {RecordingRecordPage} from "./recording/recording-record";
import {SelectPicDemoPage} from "./select-pic-demo/select-pic-demo";

@NgModule({
  imports: [
    IonicModule.forRoot(MyApp), SharedModule
  ],
  declarations: [DemoPage, PaginationDemoPage, CustomIconDemoPage, ChartjsDemoPage, RecordingPage, RecordingPlayPage, RecordingRecordPage, SelectPicDemoPage],
  entryComponents: [DemoPage, PaginationDemoPage, CustomIconDemoPage, ChartjsDemoPage, RecordingPage, RecordingPlayPage, RecordingRecordPage, SelectPicDemoPage],
  providers: [],
  exports: [IonicModule]
})
export class DemoModule {
}
