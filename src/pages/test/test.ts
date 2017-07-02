import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {TestService} from "./TestService";
import {NavController, AlertController} from "ionic-angular";
import {NativeService} from "../../providers/NativeService";
import {HttpService} from "../../providers/HttpService";
import {FileObj} from "../../model/FileObj";
import {Response} from "@angular/http";
import {FileService} from "../../providers/FileService";

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
  fileObjList: FileObj[] = [];
  filePaths: FileObj[] = [];

  constructor(private navCtrl: NavController,
              private nativeService: NativeService,
              private httpService: HttpService,
              private fileService: FileService,
              private alertCtrl: AlertController,
              public testService: TestService) {

  }


  load() {
     this.fileService.getFileInfoByIds(['001cfb4466d34640b64ca70bbec2a9b4','003bc42f45f64e6191f2f040996fba1a']).subscribe(res=>{
       debugger;
     })
  }

  click() {
    this.httpService.get('/assets/data/fileData.json').map((res: Response) => res.json()).subscribe(res => {
      if (res.success) {
        for (let fileObj of res.data) {
          this.fileObjList.push(<FileObj>{'thumbPath': fileObj.base64, 'origPath': fileObj.base64});
        }
      }
    });
  }

  save() {
    this.fileService.uploadMultiByFilePath(this.filePaths).subscribe(res => {
      console.log(res);
      if(res&&res.data){
        this.nativeService.showToast('成功上传' + res.data.length + '张图片');
      }
    });
  }


}
