/**
 * Created by yanxiaojun on 2017/2/16.
 */
import {Injectable} from '@angular/core';
import {Response} from "@angular/http";
import {HttpService} from "../providers/HttpService";
import {GlobalData} from "../providers/GlobalData";
import {Observable} from "rxjs";
/**
 *
 */
@Injectable()
export class CommonService {
  constructor(public httpService: HttpService, public globalData: GlobalData) {
  }

  //获取新token
  getNewToken() {
    this.globalData.showLoading = false;
    // return this.httpService.post('/refresh_token').map((res: Response) => res.json());
    return Observable.create((observer) => {
      observer.next({access_token: 'test_test_test_test_test_test_test'});
    });
  }

}
