import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {TestService} from "./TestService";
import {NativeService} from "../../providers/NativeService";
import {HttpService} from "../../providers/HttpService";
import {FileObj} from "../../model/FileObj";
import {FileService} from "../../providers/FileService";
declare var $AC;
declare var fundebug;

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  fileObjList: FileObj[] = [];

  constructor(private nativeService: NativeService,
              private httpService: HttpService,
              private fileService: FileService,
              public testService: TestService) {

  }

  ngAfterViewInit(){
    new $AC(".t", 100, 100, 0).ok(function(base64){
      alert(base64);
    });
  }

  getFileData() {
    fundebug.notifyError('12434545554');
    // this.nativeService.log(new Error('1234'));
    // this.testService.getFileData().subscribe(res => {
    //   this.fileObjList = res;
    // });
  }



}
