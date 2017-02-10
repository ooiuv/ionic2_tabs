import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {MyApp} from './app.component';
import {LoginModule} from '../pages/login/login.module';
import {TabsPage} from '../pages/tabs/tabs';
import {ContactModule} from '../pages/contact/contact.module';
import {HomeModule} from '../pages/home/home.module';
import {MineModule} from '../pages/mine/mine.module';

import {NativeService} from "../providers/NativeService";
import {HttpService} from "../providers/HttpService";
import {FileService} from "../providers/FileService";
import {Helper} from "../providers/Helper";
import {Utils} from "../providers/Utils";


@NgModule({
  declarations: [MyApp,TabsPage],
  imports: [IonicModule.forRoot(MyApp), LoginModule,HomeModule, ContactModule, MineModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp,TabsPage],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage,NativeService, HttpService,FileService,Helper,Utils]
})
export class AppModule {
}
