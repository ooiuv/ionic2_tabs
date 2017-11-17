/**
 * Created by yanxiaojun on 2017/2/16.
 */
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {HttpService} from "../providers/HttpService";
/**
 *
 */
@Injectable()
export class CommonService {
  constructor(public httpService: HttpService) {
  }


  /**
   * 查询公告列表
   * @returns {Observable<R>}
   */
  findPublishList() {
    return this.httpService.post('/sys/notice/findPublishList').map((res: Response) => res.json());
  }

  /**
   * 查询公告详情
   * @returns {Observable<R>}
   */
  getPublishDetail(id) {
    return this.httpService.get(`/sys/notice/getById/${id}`).map((res: Response) => res.json());
  }
  //获取新token
  getNewToken(refreshToken) {
    // return this.httpService.post('/refresh_token', refreshToken).map((res: Response) => res.json());
    return Observable.create((observer) => {
      observer.next({access_token: 'test_test_test_test_test_test_test',refresh_token: 'test_test_test_test_test_test_test'});
    });
  }


}
