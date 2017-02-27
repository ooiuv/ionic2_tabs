/**
 * Created by yanxiaojun617@163.com on 12-27.
 */
/**
 * Created by yanxiaojun617@163.com on 12-27.
 */
import {Injectable} from '@angular/core';

/**
 * Utils类存放和业务无关的公共方法
 * @description
 */
@Injectable()
export class Utils {

  constructor() {
  }

  /**
   * 每次调用sequence加1
   * @type {()=>number}
   */
  getSequence = (function () {
    let sequence = 100;
    return function () {
      return ++sequence;
    };
  })();

  /**
   *  格式化日期 2017-02-27
   * @param date 日期参数
   * @returns {any} 日期字符串
   */
  static formatDate(date: Date) {
    if (!date) return null;
    let year = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate();
    let month = m < 10 ? '0' + m : m;
    let day = d < 10 ? '0' + d : d;
    return [year, month, day].join('-');
  }

  /**
   *  格式化时间 09:09
   * @param date 日期参数
   * @returns {any} 日期字符串
   */
  static formatTime(date: Date) {
    let h = date.getHours(), mm = date.getMinutes();
    let hours = h < 10 ? '0' + h : h, minutes = mm < 10 ? '0' + mm : mm;
    return [hours, minutes].join(':');
  }

  /**
   * 格式化日期 2017-02-27 10:48:09
   * @param date 日期参数
   * @returns {any} 日期字符串
   */
  static formatDateTime(date: Date) {
    if (!date) return null;
    let year = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate(),
      h = date.getHours(), mm = date.getMinutes(), s = date.getSeconds();
    let month = m < 10 ? '0' + m : m,
      day = d < 10 ? '0' + d : d,
      hours = h < 10 ? '0' + h : h,
      minutes = mm < 10 ? '0' + mm : mm,
      seconds = s < 10 ? '0' + s : s;
    return [year, month, day].join('-') + ' ' + [hours, minutes, seconds].join(':');
  }

}
