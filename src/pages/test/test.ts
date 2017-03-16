import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {TestService} from "./TestService";
import {Observable} from "rxjs";
import {AlertController, NavController} from "ionic-angular";
import {NativeService} from "../../providers/NativeService";
import {HttpService} from "../../providers/HttpService";
import {MediaPlugin, File} from "ionic-native";
import {Utils} from "../../providers/Utils";
import {RecordingRecordPage} from "./recording-record/recording-record";
declare var cordova: any;

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  constructor(private navCtrl: NavController, private nativeService: NativeService,
              private http: HttpService,
              private alertCtrl: AlertController,
              public testService: TestService) {

  }

  data = {
    status: 1,//1未录音,2正在录音
    timer: '00:00:00',
    interval: null
  };
  media: MediaPlugin;

  private getFilePath() {//获得音频文件保存目录
    return new Promise((resolve) => {
      const directory = cordova.file.externalRootDirectory;
      const username = 'username';
      const dirName = 'recording_' + username;
      const fileName = username + '_' + Utils.dateFormat(new Date(), 'yyyyMMddhhmmss');
      File.checkDir(directory, dirName).then(res => {
        resolve(directory + dirName + '/' + fileName + '.mp3');
      }, () => {
        File.createDir(directory, dirName, false).then(() => {
          resolve(directory + dirName + '/' + fileName + '.mp3');
        }, err => {
          resolve(directory + dirName + '/' + fileName + '.mp3');
          debugger;
        });
      })
    });

  }

  startRecord() {//开始录音
    if (!this.nativeService.isMobile()) {
      this.nativeService.showToast('非手机环境!');
      return;
    }
    if (this.data.status = 1) {
      this.data.status = 2;
      this.data.interval = setInterval(() => {
        let date = new Date(Utils.dateFormat(new Date()) + ' ' + this.data.timer);
        date.setSeconds(date.getSeconds() + 1);
        this.data.timer = Utils.dateFormat(date, 'hh:mm:ss');
      }, 1000);
      this.getFilePath().then((src: string) => {
        this.media = new MediaPlugin(src, status => {
          console.log(status);
        });
        this.media.startRecord();
      });
    } else {
      this.nativeService.showToast('正在录音');
    }
  }

  stopRecord() {//停止录音
    if (this.data.status = 2) {
      this.data.status = 1;
      clearInterval(this.data.interval);
      this.data.timer = '00:00:00';
      this.media.stopRecord();
      // this.media.release();
    } else {
      this.nativeService.showToast('未开始录音');
    }
  }


  recordingRecord() {//查看录音记录
    if (this.data.status = 1) {
      this.navCtrl.push(RecordingRecordPage);
    } else {
      this.nativeService.showToast('正在录音');
    }
  }


  ionViewDidEnter() {
    let button = document.querySelector('button');
    Observable.fromEvent(button, 'click')
      .scan(count => 10, 0)
      .subscribe(count => console.log(`Clicked ${count} times`));
  }

  click() {
    this.http.post('http://localhost:8081/api/demouser/page', {}).subscribe(res => {
      console.log(res.json());
    });
    this.testService.getObj().subscribe(res => {
      console.log(res);
    });
  }

  doSearch(pageNum) {
    console.log(pageNum);
  }


}
