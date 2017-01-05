import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {Page1Page} from "../pages/page1/page1";
import {Page2Page} from "../pages/page2/page2";
import {HttpService} from "../providers/HttpService";
import {NativeService} from "../providers/NativeService";

@NgModule({
  declarations: [MyApp, AboutPage, ContactPage, HomePage, TabsPage, Page1Page, Page2Page],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, AboutPage, ContactPage, HomePage, TabsPage, Page1Page, Page2Page],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, HttpService, NativeService]
})
export class AppModule {
}
