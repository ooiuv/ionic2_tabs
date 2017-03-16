import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {File} from "ionic-native";
import {RecordingPlayPage} from "../recording-play/recording-play";
declare var cordova: any;

@Component({
  selector: 'page-recording-record',
  templateUrl: 'recording-record.html'
})
export class RecordingRecordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  fileList;

  play(fleEntry) {
    this.navCtrl.push(RecordingPlayPage,fleEntry);
  }

  ionViewDidLoad() {
    const directory = cordova.file.externalRootDirectory;
    const username = 'username';
    const dirName = 'recording_' + username;
    File.listDir(directory, dirName).then(fileList => {
      this.fileList = fileList;
      for (let fleEntry of fileList) {
        let src = fleEntry.nativeURL;
      }
    })
  }

}
