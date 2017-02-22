import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import {TestPage} from "./test";


@NgModule({
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  declarations: [TestPage],
  entryComponents: [TestPage],
  providers: [],
  exports: [IonicModule]
})
export class TestModule {
}
