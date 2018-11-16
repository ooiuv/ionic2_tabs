import { Component } from '@angular/core';
import { Events, NavController } from 'ionic-angular';

@Component({
  selector: 'page-qrscanner-demo',
  templateUrl: 'qrscanner-demo.html',
})
export class QrscannerDemoPage {

  constructor(public navCtrl: NavController, private events: Events) {
  }

  scan() {
    this.navCtrl.push('QrscannerPage').then(() => {
      this.events.subscribe('qrscanner:result', text => {
        alert('扫描结果：' + text);
      });
    });
  }

}
