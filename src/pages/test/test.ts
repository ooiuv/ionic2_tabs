import { Component } from '@angular/core';
import { TestService } from './TestService';
import { FileObj } from '../../model/FileObj';
import { NativeService } from '../../providers/NativeService';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  fileObjList: FileObj[] = [];
  test = '12';
  isAndroid;

  constructor(public testService: TestService, public nativeService: NativeService, private platform: Platform) {
    this.isAndroid = this.platform.is('android');
  }

  getFileData() {
    this.testService.getFileData().subscribe(res => {
      this.fileObjList = res;
    });
  }

}
