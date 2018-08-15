import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeService } from '../../../providers/NativeService';

declare var AlloyCrop;

/**
 * Generated class for the CropPicDemoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-crop-pic-demo',
  templateUrl: 'crop-pic-demo.html',
})
export class CropPicDemoPage {
  cropSrc = './assets/img/avatar.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeService: NativeService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CropPicDemoPage');
  }

  crop() {
    new AlloyCrop({ // api:https://github.com/AlloyTeam/AlloyCrop
      image_src: './assets/img/avatar.png',
      circle: true, // optional parameters , the default value is false
      width: 256, // crop width
      height: 256, // crop height
      output: 1, // output resolution --> 400*200
      ok: (base64, canvas) => {
        this.cropSrc = base64;
      },
      cancel: () => {
        console.log('AlloyCrop cancel');
      },
      ok_text: '确定', // optional parameters , the default value is ok
      cancel_text: '取消' // optional parameters , the default value is cancel
    });
  }

  details(url) {
    this.nativeService.openUrlByBrowser(url);
  }

}
