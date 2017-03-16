import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import {TestPage} from "./test";
import {TestService} from "./TestService";
import {SharedModule} from "../../shared/shared.module";
import {RecordingRecordPage} from "./recording-record/recording-record";
import {RecordingPlayPage} from "./recording-play/recording-play";


@NgModule({
  imports: [
    IonicModule.forRoot(MyApp), SharedModule
  ],
  declarations: [TestPage, RecordingRecordPage, RecordingPlayPage],
  entryComponents: [TestPage, RecordingRecordPage, RecordingPlayPage],
  providers: [TestService]
})
export class TestModule {
}
