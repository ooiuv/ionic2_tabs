import {Component, ViewChild} from '@angular/core';
import {IonicApp, Platform, Nav, Keyboard} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {NativeService} from "../providers/NativeService";
import {TabsPage} from "../pages/tabs/tabs";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: Nav;
  rootPage = TabsPage;
  backButtonPressed: boolean = false;

  constructor(private ionicApp: IonicApp,
              private platform: Platform,
              private keyboard: Keyboard,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private nativeService: NativeService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.registerBackButtonAction();//注册返回按键事件
      this.assertNetwork();//检测网络
    });
  }

  assertNetwork() {
    if (!this.nativeService.isConnecting()) {
      this.nativeService.showToast('请连接网络');
    }
  }

  registerBackButtonAction() {
    this.platform.registerBackButtonAction(() => {
      if (this.keyboard.isOpen()) {//如果键盘开启则隐藏键盘
        this.keyboard.close();
        return;
      }
      //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
      // this.ionicApp._toastPortal.getActive() ||this.ionicApp._loadingPortal.getActive()|| this.ionicApp._overlayPortal.getActive()
      let activePortal = this.ionicApp._modalPortal.getActive();
      if (activePortal) {
        activePortal.dismiss();
        return;
      }
      let activeVC = this.nav.getActive();
      let tabs = activeVC.instance.tabs;
      let activeNav = tabs.getSelected();
      return activeNav.canGoBack() ? activeNav.pop() : window['AppMinimize'].minimize();//this.showExit()

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
