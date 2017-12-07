/**
 * Created by yanxiaojun on 2017/2/16.
 */
import {Injectable} from '@angular/core';
import {Response} from "@angular/http";
import {HttpService} from "../providers/HttpService";
import {Utils} from "../providers/Utils";

/**
 *
 */
@Injectable()
export class CommonService {
  constructor(public httpService: HttpService) {
  }


  getToken(username, password) {
    return this.httpService.post('/v1/login', {
      'client_id': 'app',
      'username': username,
      'password': Utils.hex_md5(password)
    });
  }

  getUserInfo() {
    return this.httpService.get('/v1/public/user/self');
  }

  /**
   * 查询公告列表
   */
  findPublishList() {
    return this.httpService.post('/sys/notice/findPublishList').map((res: Response) => res.json());
  }

  /**
   * 查询公告详情
   */
  getPublishDetail(id) {
    return this.httpService.get(`/sys/notice/getById/${id}`).map((res: Response) => res.json());
  }

  //获取新token
  getNewToken() {
    return this.httpService.post('/v1/refresh_token');
  }


  //更新文件缓存文件关系
  fileRelationReplace(data) {
    return this.httpService.post('/fileRelation/replace', data).map((res: Response) => res.json());
  }

}
