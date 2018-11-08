import { JPush } from '@jiguang-ionic/jpush';
import { ErrorHandler, NgModule } from '@angular/core';
import { Config, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { TabModule } from '../pages/tabs/tab.module';
import { LoginModule } from '../pages/login/login.module';
import { HomeModule } from '../pages/home/home.module';
import { MineModule } from '../pages/mine/mine.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';
import { Camera } from '@ionic-native/camera';
import { Toast } from '@ionic-native/toast';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ImagePicker } from '@ionic-native/image-picker';
import { Network } from '@ionic-native/network';
import { AppMinimize } from '@ionic-native/app-minimize';
import { BrowserModule } from '@angular/platform-browser';
import { CodePush } from '@ionic-native/code-push';
import { CallNumber } from '@ionic-native/call-number';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Diagnostic } from '@ionic-native/diagnostic';
import { HTTP } from '@ionic-native/http';
import { NativeService } from '../providers/NativeService';
import { HttpService } from '../providers/HttpService';
import { FileService } from '../providers/FileService';
import { Helper } from '../providers/Helper';
import { Utils } from '../providers/Utils';
import { TestModule } from '../pages/test/test.module';
import { HttpModule } from '@angular/http';
import { DemoModule } from '../pages/demo/demo.module';
import { GlobalData } from '../providers/GlobalData';
import { Logger } from '../providers/Logger';
import { ModalFromRightEnter, ModalFromRightLeave, ModalScaleEnter, ModalScaleLeave } from './modal-transitions';
import { CommonService } from '../service/CommonService';
import { VersionService } from '../providers/VersionService';
import { Validators } from '../providers/Validators';
import { CalendarModule } from 'ion2-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios', // android是'md'
      backButtonText: ''
    }),
    IonicStorageModule.forRoot(),
    TabModule,
    LoginModule,
    HomeModule,
    DemoModule,
    MineModule,
    TestModule,
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    Camera,
    Toast,
    File,
    FileTransfer,
    FileOpener,
    InAppBrowser,
    ImagePicker,
    Network,
    AppMinimize,
    Diagnostic,
    HTTP,
    JPush,
    CodePush,
    CallNumber,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeService,
    HttpService,
    FileService,
    Helper,
    Utils,
    GlobalData,
    Logger,
    CommonService,
    VersionService,
    Validators
  ]
})
export class AppModule {
  constructor(public config: Config) {
    this.setCustomTransitions();
  }

  private setCustomTransitions() {
    this.config.setTransition('modal-from-right-enter', ModalFromRightEnter);
    this.config.setTransition('modal-from-right-leave', ModalFromRightLeave);
    this.config.setTransition('modal-scale-enter', ModalScaleEnter);
    this.config.setTransition('modal-scale-leave', ModalScaleLeave);
  }
}
