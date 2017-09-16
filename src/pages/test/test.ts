import {Component} from "@angular/core";
import "rxjs/add/operator/map";
import {TestService} from "./TestService";
import {FileObj} from "../../model/FileObj";
import {NativeService} from "../../providers/NativeService";

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  fileObjList: FileObj[] = [];

  constructor(public testService: TestService, private nativeService: NativeService) {

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
}
