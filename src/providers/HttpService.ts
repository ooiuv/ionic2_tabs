/**
 * Created by yanxiaojun617@163.com on 12-27.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Observable} from "rxjs";
import {Utils} from "./Utils";

@Injectable()
export class HttpService {

  constructor(public http: Http) {
  }

  public postFormData(url: string, paramObj?: any): Observable<Response> {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Accept': 'application/json;charset=utf-8'
    });
    return this.http.post(url, HttpService.buildURLSearchParams(paramObj).toString(), new RequestOptions({headers: headers}))
  }

  public get(url: string, paramObj?: any): Observable<Response> {
    return this.http.get(url, {search: HttpService.buildURLSearchParams(paramObj)});
  }

  // 默认Content-Type为application/json;
  public post(url: string, body: any = null): Observable<Response> {
    return this.http.post(url, body);
  }

  public put(url: string, body: any = null, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.put(url, body, options);
  }

  public delete(url: string, paramObj?: any): Observable<Response> {
    return this.http.delete(url, {search: HttpService.buildURLSearchParams(paramObj)});
  }

  public patch(url: string, body: any = null, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.patch(url, body, options);
  }

  public head(url: string, paramObj?: any): Observable<Response> {
    return this.http.head(url, {search: HttpService.buildURLSearchParams(paramObj)});
  }

  public options(url: string, paramObj?: any): Observable<Response> {
    return this.http.options(url, {search: HttpService.buildURLSearchParams(paramObj)});
  }

  public static buildURLSearchParams(obj): URLSearchParams {
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


}
