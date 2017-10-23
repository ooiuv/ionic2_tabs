/**
 * Created by yanxiaojun on 2017/2/16.
 */
import {Injectable} from '@angular/core';
import {Response} from "@angular/http";
import {HttpService} from "../providers/HttpService";
/**
 *
 */
@Injectable()
export class CommonService {
  constructor(private httpService: HttpService) {
  }

  //获取新token
  refreshToken() {
    return this.httpService.post('/refresh_token').map((res: Response) => res.json());
  }

}
