import {Injectable} from '@angular/core';
import {Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {HttpService} from "../../providers/HttpService";
import {GlobalData} from "../../providers/GlobalData";
import {FileService} from "../../providers/FileService";

@Injectable()
export class MineService {
  constructor(public httpService: HttpService, private globalData: GlobalData, private fileService: FileService) {
  }

  /**
   * 更新用户头像Id
   * @param avatarId
   * @returns {Observable<R>}
   */
  updateUserAvatarId(avatarId: string) {
    return this.httpService.post(`/user/avatar/${avatarId}`).map((res: Response) => res.json());
  }

  /**
   * 更改密码
   * @param oldPsw
   * @param newPsw
   * @returns {Observable<R>}
   */
  updateUserPassword(oldPsw: string, newPsw: string) {
    return this.httpService.post(`/user/modifyPassword/${this.globalData.userId}`, {
      'oldPsw': oldPsw,
      'newPsw': newPsw
    }).map((res: Response) => res.json());
  }

  /**
   * 添加反馈
   * @param data
   * @returns {Observable<R>}
   */
  requirementSave(data) {
    return this.httpService.post('/requirement/save', data).map((res: Response) => res.json());
  }

  /**
   * 查询返回记录
   * @param sourceId 1:现场作业app；2:精准营销app；3:web
   * @returns {Observable<R>}
   */
  requirementPersonList(query) {
    return this.httpService.post('/requirement/personalList', query).map((res: Response) => res.json());
  }

  /**
   * 反馈详情
   * @param id
   * @returns {Observable<R>}
   */
  requirementDetail(id) {

    return this.httpService.get(`/requirement/getDetailById/${id}`).map((res: Response) => {
      let data = res.json();
      data.answerList = data.answerList.reverse();
      this.fileService.getFileInfoByIds(data.requirement.fileIdList).subscribe(fileList => {
        data.requirement.fileList = fileList;
      });
      return data;
    });
  }
}
