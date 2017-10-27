/**
 * Created by yanxiaojun on 2017/2/16.
 */
import {Injectable} from '@angular/core';
import {HttpService} from "../providers/HttpService";
import {Observable} from "rxjs";
/**
 *
 */
@Injectable()
export class CommonService {
  constructor(public httpService: HttpService) {
  }

  //获取新token
  getNewToken(refreshToken) {
    // return this.httpService.post('/refresh_token', refreshToken).map((res: Response) => res.json());
    return Observable.create((observer) => {
      observer.next({access_token: 'test_test_test_test_test_test_test',refresh_token: 'test_test_test_test_test_test_test'});
    });
  }


}
