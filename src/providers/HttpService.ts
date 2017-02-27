/**
 * Created by yanxiaojun617@163.com on 12-27.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {NativeService} from './NativeService';
import {Observable} from "rxjs";
import {Utils} from "./Utils";

@Injectable()
export class HttpService {

  constructor(private http: Http, private nativeService: NativeService) {
  }

  public get(url: string, paramObj?: any): Observable<Response> {
    return paramObj ? this.http.get(url, {search: HttpService.buildURLSearchParams(paramObj)}) : this.http.get(url);
  }


  public post(url: string, paramObj?: any): Observable<Response> {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Accept': 'application/json;charset=utf-8'
    });
    return this.http.post(url, this.toBodyString(paramObj), new RequestOptions({headers: headers}))
  }

  public postBody(url: string, paramObj?: any): Observable<Response> {
    let headers = new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json;charset=utf-8'
    });
    return this.http.post(url, paramObj, new RequestOptions({headers: headers}))
  }

  private static buildURLSearchParams(obj) {
    let params = new URLSearchParams();
    for (let key in obj) {
      let val = obj[key];
      if (val instanceof Date) {
        val = Utils.formatDateTime(val)
      }
      params.set(key, val);
    }
    return params;
  }


  /**
   *  把请求参数转化为参数字符串
   * @param obj
   * @return {string}
   *  声明: var obj= {'name':'小军',age:23};
   *  调用: toQueryString(obj);
   *  返回: "name=%E5%B0%8F%E5%86%9B&age=23"
   */
  private toBodyString(obj) {
    let ret = [];
    for (let key in obj) {
      let values = obj[key];
      if (values && values.constructor == Array) {//数组
        let queryValues = [];
        for (let i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(HttpService.toQueryPair(key, value));
        }
        ret = ret.concat(queryValues);
      } else { //字符串
        ret.push(HttpService.toQueryPair(key, values));
      }
    }
    return ret.join('&');
  }

  private static toQueryPair(key, value) {
    if (typeof value == 'undefined') {
      return key;
    }
    if (value instanceof Date) {
      value = Utils.formatDateTime(value)
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  }

}
