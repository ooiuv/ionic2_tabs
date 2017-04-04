import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import {HomePage} from './home';
import {NavigationModalPage} from "./navigation-modal/navigation-modal";
import {LocationSearchModalPage} from "./location-search-modal/location-search-modal";

@NgModule({
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  declarations: [HomePage, LocationSearchModalPage, NavigationModalPage],
  entryComponents: [HomePage, LocationSearchModalPage, NavigationModalPage],
  providers: [],
  exports: [IonicModule]
})
export class HomeModule {
}
