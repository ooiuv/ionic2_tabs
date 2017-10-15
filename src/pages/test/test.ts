import {Component} from "@angular/core";
import "rxjs/add/operator/map";
import {TestService} from "./TestService";
import {FileObj} from "../../model/FileObj";
import {NativeService} from "../../providers/NativeService";
import {CodePush} from "@ionic-native/code-push";

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  fileObjList: FileObj[] = [];

  constructor(public testService: TestService, private nativeService: NativeService, private codePush: CodePush) {

  }

  getFileData() {
    this.testService.getFileData().subscribe(res => {
      this.fileObjList = res;
    });
  }

  getUserLocation() {
    this.nativeService.getUserLocation().subscribe(res => {
      console.log(res);
      alert(res.lng + ',' + res.lat);
    }, err => {
      console.log(err);
      alert(err);
    })
  }

  sync() {
    const downloadProgress = (progress) => { console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); };
    this.codePush.sync({}, downloadProgress).subscribe((syncStatus) => {
      console.log(syncStatus);
      debugger;
    });
  }

  checkForUpdate() {
    this.codePush.checkForUpdate().then(remotePackage=>{
      debugger;
    })
  }
}
