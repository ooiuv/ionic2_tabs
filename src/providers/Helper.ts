/**
 * Created by yanxiaojun617@163.com on 12-27.
 */
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

import {ModalController} from "ionic-angular";
import {FileService} from "./FileService";

/**
 * Helper类存放和业务有关的公共方法
 * @description
 */
@Injectable()
export class Helper {

  constructor(private modalCtrl: ModalController,
              private storage: Storage,
              private fileService: FileService) {
  }


}
