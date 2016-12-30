import {Component, ViewChild} from '@angular/core';
import {Platform, ToastController, Nav, IonicApp} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {TabsPage} from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  backButtonPressed: boolean = false;  //用于判断返回键是否触发
  @ViewChild('myNav') nav: Nav;

  constructor(public ionicApp: IonicApp, public platform: Platform, public toastCtrl: ToastController) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.registerBackButtonAction();//注册返回按键事件
    });
  }

  registerBackButtonAction() {
    this.platform.registerBackButtonAction((): any => {
      let activePortal = this.ionicApp._loadingPortal.getActive() || this.ionicApp._modalPortal.getActive() || this.ionicApp._overlayPortal.getActive();
      if (activePortal) {
        activePortal.dismiss();
        activePortal.onDidDismiss(() => {
        });
        return;
      }

      let activeVC = this.nav.getActive();
      let page = activeVC.instance;
      if (!(page instanceof TabsPage)) {
        if (!this.nav.canGoBack()) {
          //当前页面为tabs，退出APP
          return this.showExit();
        }
        //当前页面为tabs的子页面，正常返回
        return this.nav.pop();
      }

      let tabs = page.tabs;
      let activeNav = tabs.getSelected();
      if (!activeNav.canGoBack()) {
        //当前页面为tab栏，退出APP
        return this.showExit();
      }
      //当前页面为tab栏的子页面，正常返回
      return activeNav.pop();
    }, 1);
  }

  //双击退出提示框，这里使用Ionic2的ToastController
  showExit() {
    if (this.backButtonPressed) { //当触发标志为true时，即2秒内双击返回按键则退出APP
      this.platform.exitApp();
    } else {
      this.toastCtrl.create({
        message: '再按一次退出应用',
        duration: 2000,
        position: 'top'
      }).present();
      this.backButtonPressed = true;
      setTimeout(() => { //2秒内没有再次点击返回则将触发标志标记为false
        this.backButtonPressed = false;
      }, 2000)
    }
  }
}
