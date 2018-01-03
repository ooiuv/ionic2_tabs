import {Component, ViewChild} from "@angular/core";
import {Storage} from "@ionic/storage";
import {Platform, IonicApp, Nav, ModalController, Keyboard, ToastController, Events} from "ionic-angular";
import {NativeService} from "../providers/NativeService";
import {TabsPage} from "../pages/tabs/tabs";
import {LoginPage} from "../pages/login/login";
import {Helper} from "../providers/Helper";
import {GlobalData} from "../providers/GlobalData";
import {Utils} from "../providers/Utils";
import {CommonService} from "../service/CommonService";
import {VersionService} from "../providers/VersionService";
import {UserInfo} from '../model/UserInfo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: Nav;
  rootPage = TabsPage;
  backButtonPressed: boolean = false;

  constructor(private platform: Platform,
              private keyboard: Keyboard,
              private ionicApp: IonicApp,
              private storage: Storage,
              private globalData: GlobalData,
              private helper: Helper,
              private toastCtrl: ToastController,
              private modalCtrl: ModalController,
              private events: Events,
              private commonService: CommonService,
              private versionService: VersionService,
              private nativeService: NativeService) {
    platform.ready().then(() => {
      this.nativeService.statusBarStyle();
      this.nativeService.splashScreenHide();
      this.assertNetwork();//检测网络
      this.helper.funDebugInit();//初始化fundebug
      this.helper.alloyLeverInit();//本地"开发者工具"
      this.helper.initJpush();//初始化极光推送
      this.storage.get('token').then(token => { //从缓存中获取token
        if (token) {
          this.globalData.token = token;
          this.commonService.getNewToken().mergeMap((newToken) => { //用旧token获取新token,旧token作为请求头
            this.globalData.token = newToken;
            this.storage.set('token', newToken);
            return this.commonService.getUserInfo();
          }).subscribe((userInfo:UserInfo) => {
            this.helper.loginSuccessHandle(userInfo);
          });
        } else {
          this.modalCtrl.create(LoginPage).present();
        }
      });
      this.registerBackButtonAction();//注册android返回按键事件
      this.versionService.init();//初始化版本信息
      setTimeout(() => {
        this.versionService.assertUpgrade();//检测app是否升级
        this.nativeService.sync();//启动app检查热更新
        Utils.sessionStorageClear();//清除数据缓存
      }, 5000);
    });
  }

  assertNetwork() {
    if (!this.nativeService.isConnecting()) {
      this.toastCtrl.create({
        message: '未检测到网络,请连接网络',
        showCloseButton: true,
        closeButtonText: '确定'
      }).present();
    }
  }

  registerBackButtonAction() {
    if (!this.nativeService.isAndroid()) {
      return;
    }
    this.platform.registerBackButtonAction(() => {
      this.events.publish('android:backButtonAction');
      if (this.keyboard.isOpen()) {//如果键盘开启则隐藏键盘
        this.keyboard.close();
        return;
      }
      //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
      // this.ionicApp._toastPortal.getActive() ||this.ionicApp._loadingPortal.getActive()|| this.ionicApp._overlayPortal.getActive()
      let activePortal = this.ionicApp._modalPortal.getActive() || this.ionicApp._toastPortal.getActive() || this.ionicApp._overlayPortal.getActive();
      if (activePortal) {
        activePortal.dismiss();
        return;
      }
      let activeVC = this.nav.getActive();
      let tabs = activeVC.instance.tabs;
      let activeNav = tabs.getSelected();
      return activeNav.canGoBack() ? activeNav.pop() : this.nativeService.minimize();//this.showExit()
    }, 1);
  }

  //双击退出提示框
  showExit() {
    if (this.backButtonPressed) { //当触发标志为true时，即2秒内双击返回按键则退出APP
      this.platform.exitApp();
    } else {
      this.nativeService.showToast('再按一次退出应用');
      this.backButtonPressed = true;
      setTimeout(() => { //2秒内没有再次点击返回则将触发标志标记为false
        this.backButtonPressed = false;
      }, 2000)
    }
  }

}
