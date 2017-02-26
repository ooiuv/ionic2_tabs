import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {MyApp} from './app.component';
import {LoginModule} from '../pages/login/login.module';
import {TabsPage} from '../pages/tabs/tabs';
import {ContactModule} from '../pages/contact/contact.module';
import {HomeModule} from '../pages/home/home.module';
import {MineModule} from '../pages/mine/mine.module';

import {NativeService} from "../providers/NativeService";
import {HttpIntercept} from "../providers/HttpIntercept";
import {HttpService} from "../providers/HttpService";
import {FileService} from "../providers/FileService";
import {Helper} from "../providers/Helper";
import {Utils} from "../providers/Utils";
import {TestModule} from "../pages/test/test.module";
import {Http, XHRBackend, RequestOptions} from "@angular/http";
import {HttpInterceptHandle} from "../providers/HttpInterceptHandle";


@NgModule({
  declarations: [MyApp, TabsPage],
  imports: [IonicModule.forRoot(MyApp, {
    backButtonText: '',
    iconMode: 'ios',
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
    pageTransition: 'ios'
  }), LoginModule, HomeModule, ContactModule, MineModule, TestModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TabsPage],
  providers: [HttpInterceptHandle, {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: Http,
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, httpInterceptHandle: HttpInterceptHandle) => {
        return new HttpIntercept(backend, defaultOptions, httpInterceptHandle);
      },
      deps: [XHRBackend, RequestOptions, HttpInterceptHandle]
    },
    Storage, NativeService, HttpService, FileService, Helper, Utils]
})
export class AppModule {
}
