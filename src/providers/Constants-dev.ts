/*----------------------------------------后台Api地址----------------------------------------*/
// export const APP_SERVE_URL = 'http://88.128.19.209:7772/api/'; // 闫小军
export const APP_SERVE_URL = 'https://yanxiaojun617.com/invoice/api/'; // 闫小军
// export const APP_SERVE_URL = 'http://172.16.19.137:9020/api/'; // 测试

/*----------------------------------------文件服务器地址----------------------------------------*/
// export const FILE_SERVE_URL = 'http://172.16.19.136:9000/kit_file_server/'; // 文件服务:测试环境
export const FILE_SERVE_URL = 'https://yanxiaojun617.com/fileService/'; // 闫小军

/*----------------------------------------app版本升级服务地址,查询app最新版本号,更新日志.----------------------------------------*/
export const APP_VERSION_SERVE_URL = 'https://yanxiaojun617.com/version/api/'; // 闫小军
// export const APP_VERSION_SERVE_URL = 'http://172.16.19.136:9001/api/'; // 测试环境

/*----------------------------------------app下载地址.----------------------------------------*/
export const APP_DOWNLOAD_PAGE_URL = 'https://yanxiaojun617.com/version/admin/#/download?name=ionic2tabs';

export const IS_DEBUG = true; // 是否开发(调试)模式

// code push 部署dev key
export const CODE_PUSH_DEPLOYMENT_KEY = {
  'android': 'WY29_Zyq_hg0eB3TSTGaKRSKPE6k26690215-d954-4697-a879-90e0c4612b59',
  'ios': 'SRoxClVMoed8SgwIRxeVCPWx26Fk26690215-d954-4697-a879-90e0c4612b59'
};

export const DEFAULT_AVATAR = './assets/img/avatar.png'; // 用户默认头像
export const PAGE_SIZE = 5; // 默认分页大小
export const IMAGE_SIZE = 1024; // 拍照/从相册选择照片压缩大小
export const QUALITY_SIZE = 94; // 图像压缩质量，范围为0 - 100
export const REQUEST_TIMEOUT = 20000; // 请求超时时间,单位为毫秒
