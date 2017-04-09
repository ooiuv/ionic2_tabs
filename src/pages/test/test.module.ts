import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import {TestPage} from "./test";
import {TestService} from "./TestService";
import {Conversion} from "../../pipes/conversion";


@NgModule({
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  declarations: [TestPage, Conversion],
  entryComponents: [TestPage],
  providers: [TestService]
})
export class TestModule {
}
