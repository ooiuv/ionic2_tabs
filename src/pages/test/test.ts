import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {TestService} from "./TestService";
import {AlertController, NavController} from "ionic-angular";
import {NativeService} from "../../providers/NativeService";
import {HttpService} from "../../providers/HttpService";
import {RecordingPage} from "./recording/recording";

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  constructor(private navCtrl: NavController,
              private nativeService: NativeService,
              private http: HttpService,
              private alertCtrl: AlertController,
              public testService: TestService) {

  }

  ionViewDidEnter() {

  }

  recording() {
    this.navCtrl.push(RecordingPage);
  }

  click() {
   /* this.http.post('http://localhost:8081/api/demouser/page', {}).subscribe(res => {
      console.log(res.json());
    });
    this.testService.getObj().subscribe(res => {
      console.log(res);
    });*/
  }

  doSearch(pageNum) {
    console.log(pageNum);
  }


}
