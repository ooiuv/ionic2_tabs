import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {DemoPage} from "./demo";
import {PaginationDemoPage} from "./pagination-demo/pagination-demo";
import {SharedModule} from "../../shared/shared.module";
import {CustomIconDemoPage} from "./custom-icon-demo/custom-icon-demo";
import {ChartjsDemoPage} from "./chartjs-demo/chartjs-demo";
import {SelectPicDemoPage} from "./select-pic-demo/select-pic-demo";
import {CustomPipeDemo} from "./custom-pipe-demo/custom-pipe-demo";
import {Conversion} from "../../pipes/conversion";

@NgModule({
  imports: [IonicModule, SharedModule],
  declarations: [DemoPage, PaginationDemoPage, CustomIconDemoPage, ChartjsDemoPage, SelectPicDemoPage,CustomPipeDemo,Conversion],
  entryComponents: [DemoPage, PaginationDemoPage, CustomIconDemoPage, ChartjsDemoPage, SelectPicDemoPage,CustomPipeDemo],
  providers: [],
  exports: [IonicModule]
})
export class DemoModule {
}
