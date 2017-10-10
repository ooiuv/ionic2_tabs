import {Component} from "@angular/core";
import "rxjs/add/operator/map";
import {TestService} from "./TestService";
import {FileObj} from "../../model/FileObj";
import {NativeService} from "../../providers/NativeService";
import {Diagnostic} from "@ionic-native/diagnostic";

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  fileObjList: FileObj[] = [];

  constructor(public testService: TestService, private nativeService: NativeService,private diagnostic: Diagnostic) {

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
  isLocationEnabled() {
    this.diagnostic.isLocationEnabled().then(res=>{
      console.log(res);
      alert(res);
    }).catch(err=>{
      console.log(err);
      alert(err);
    });
  }
  switchToLocationSettings() {
    this.diagnostic.switchToLocationSettings();
  }
  switchToSettings() {
    this.diagnostic.switchToSettings();
  }
}
