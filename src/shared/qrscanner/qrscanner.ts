import { Component } from '@angular/core';
import { Events, IonicPage, NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { NativeService } from '../../providers/NativeService';

/**
 * 扫描二维码
 * @example
      this.navCtrl.push('QrscannerPage').then(() => {
        this.events.subscribe('qrscanner:result', text => {
          alert('扫描结果：' + text);
        });
      });
 */
@IonicPage()
@Component({
  selector: 'page-qrscanner',
  templateUrl: 'qrscanner.html',
})
export class QrscannerPage {
  light: boolean = false; // 判断闪光灯
  isShow: boolean = false; // 控制显示背景，避免切换页面卡顿

  constructor(
    private navCtrl: NavController,
    private nativeService: NativeService,
    private events: Events,
    private qrScanner: QRScanner) {
  }

  ionViewDidLoad() {
    if (!this.nativeService.isMobile()) {
      this.nativeService.alert('请使用真机调试');
      return;
    }
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) { // 判断是否有摄像头权限
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            this.events.publish('qrscanner:result', text);
            scanSub.unsubscribe();
            this.navCtrl.pop();
          });
          // 打开摄像头
          this.qrScanner.show();
        } else if (status.denied) {
          this.nativeService.alert('没有权限', null, '没有摄像头权限，请前往设置中开启', () => {
            this.qrScanner.openSettings();
          });
        } else {
          this.nativeService.alert('没有权限', null, '没有摄像头权限，请前往设置中开启', () => {
            this.qrScanner.openSettings();
          });
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  ionViewDidEnter() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView'); // tslint:disable-line
    this.isShow = true; // 显示背景
  }

  ionViewWillLeave() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView'); // tslint:disable-line
    this.qrScanner.hide(); // 需要关闭扫描，否则相机一直开着
    this.qrScanner.destroy(); // 关闭
    this.events.unsubscribe('qrscanner:result'); // 退出页面取消所有订阅，进入页面前需订阅
  }

  toggleLight() {
    this.light ? this.qrScanner.disableLight() : this.qrScanner.enableLight();
    this.light = !this.light;
  }

  close() {
    this.navCtrl.pop();
  }

}
