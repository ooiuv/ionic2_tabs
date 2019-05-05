/**
 * Created by yanxiaojun on 2017/4/13.
 */
import { Injectable } from '@angular/core';
import { DEFAULT_AVATAR } from './Constants';

@Injectable()
export class GlobalData {

  private _userId: string; // 用户id
  private _username: string; // 用户名
  private _realname: string; // 真实姓名
  private _avatarPath = DEFAULT_AVATAR; // 用户头像路径
  private _user; // 用户详细信息

  private _token: string; // token

  // 设置http请求是否显示loading,注意:设置为true,接下来的请求会不显示loading,请求执行完成会自动设置为false
  private _showLoading = true;

  // 是否启用文件缓存
  private _enabledFileCache = true;

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get realname(): string {
    return this._realname;
  }

  set realname(value: string) {
    this._realname = value;
  }

  get avatarPath(): string {
    return this._avatarPath;
  }

  set avatarPath(value: string) {
    this._avatarPath = value;
  }

  get user() {
    return this._user;
  }

  set user(value) {
    this._user = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get showLoading(): boolean {
    return this._showLoading;
  }

  set showLoading(value: boolean) {
    this._showLoading = value;
  }

  get enabledFileCache(): boolean {
    return this._enabledFileCache;
  }

  set enabledFileCache(value: boolean) {
    this._enabledFileCache = value;
  }
}
