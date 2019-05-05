import { Component } from '@angular/core';
import { Events, NavController } from 'ionic-angular';
import { NativeService } from '../../../providers/NativeService';

@Component({
  selector: 'page-qrscanner-demo',
  templateUrl: 'qrscanner-demo.html',
})
export class QrscannerDemoPage {

  constructor(public navCtrl: NavController, private events: Events, public nativeService: NativeService) {
  }

  scan() {
    // 进入二维码扫描界面
    this.navCtrl.push('QrscannerPage').then(() => {
      // 订阅扫描结果
      this.events.subscribe('qrscanner:result', text => {
        alert('扫描结果：' + text);
      });
    });
  }

}
