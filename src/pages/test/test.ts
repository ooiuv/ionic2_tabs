import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {TestService} from "./TestService";
import {NavController} from "ionic-angular";
import {NativeService} from "../../providers/NativeService";
import {HttpService} from "../../providers/HttpService";
import {FileObj} from "../../model/FileObj";
import {Response} from "@angular/http";

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
  fileObjList: FileObj[] = [];
  constructor(private navCtrl: NavController,
              private nativeService: NativeService,
              private httpService: HttpService,
              public testService: TestService) {


  }

  ionViewDidEnter() {
  }

  click() {
    this.httpService.get('./assets/data/fileData.json').map((res: Response) => res.json()).subscribe(res => {
      if(res.success){
        for(let fileObj of res.data){
          this.fileObjList.push(<FileObj>{'thumbPath':fileObj.base64,'origPath':fileObj.base64});
        }
      }
    });
  }


}
