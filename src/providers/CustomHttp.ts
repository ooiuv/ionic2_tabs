/**
 * Created by yanxiaojun617@163.com on 12-27.
 */
import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, ConnectionBackend, RequestOptionsArgs} from '@angular/http';


import {Observable} from "rxjs";

@Injectable()
export class CustomHttp extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  get(url: string, options ?: RequestOptionsArgs): Observable < Response > {
    return this.intercept(super.get(url, options));
  }

  intercept(observable: Observable < Response >): Observable < Response > {
    console.log('1');
    observable.subscribe(null, (err) => {
      console.log('2');
      console.log('这里处理错误');
    }, () => {
      console.log('3');
    });
    return observable;
  }
}
