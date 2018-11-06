/**
 * Created by yanxiaojun617@163.com on 07-25.
 */
import { Injectable } from '@angular/core';
import { GlobalData } from './GlobalData';

/**
 * Utils类存放和业务无关的公共方法
 * @description
 */
@Injectable()
export class Logger {
  constructor(private globalData: GlobalData) {
  }

  log(err: any, action: string, other = null): void {
    console.log('Logger.log：action-' + action);
    other && console.log(other);
    console.log(err);
  }

  httpLog(err: any, msg: string, other = {}): void {
    console.log('Logger.httpLog：msg-' + msg);
  }

}
