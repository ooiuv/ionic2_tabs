import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MediaPlugin} from "ionic-native";

@Component({
  selector: 'page-recording-play',
  templateUrl: 'recording-play.html'
})
export class RecordingPlayPage {

  fleEntry;
  media;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fleEntry = navParams.data;
  }

  play() {//播放
    this.media = new MediaPlugin(this.fleEntry.nativeURL, status => {
      console.log(status);
    });
    this.media.play();
  }

  pause() {//暂停
    this.media.pause();
  }

  stop() {//停止
    this.media.stop();
  }

}
