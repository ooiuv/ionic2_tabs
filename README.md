Ionic 2 App

=====================

一个不断完善的ionic2项目,详情可查看:http://www.jianshu.com/c/be0bf998dcb5

![下载预览app,android和ios](http://omzo595hi.bkt.clouddn.com/download.png)

####实现了如下功能点

* 注册android硬件返回按钮事件

* 最小化app

* 拍照,相册多图选择,多图预览(放大缩小)功能

* 图标使用chart.js

* 高德地图,定位,导航,并封装为地图服务公共组件

* 代码按功能划分多module

* 封装angular http,异常处理,请求超时处理

* 自定义分页组件

* 自定义图标

* 图片上传demo

* fundebug错误日志

* app升级功能

* 图片裁剪demo

* 其他cordova插件封装和常用功能,工具方法

##如何运行此app

1.  先保证app开发环境配置好,可以参考[这里](http://www.jianshu.com/p/1f1205602ce0)

* 进入app目录,执行命令`cnpm install`,安装app依赖

* 执行命令`ionic serve`运行app

* [更多详情](http://www.jianshu.com/p/836392297eb9)

##使用高德地图

* [更多详情](http://www.jianshu.com/p/4de365c55668)

##使用高德定位和导航

* [更多详情](http://www.jianshu.com/p/85aceaee3b35)

##关于"登录功能实现"的说明

* 点登录按钮触发登录事件[看login.ts](https://github.com/yanxiaojun617/ionic2_tabs/blob/master/src/pages/login/login.ts).传用户名和密码到后台,后台验证正确,则登录成功.返回一个LoginInfo对象.形如:
```
 {
  access_token: string //其中access_token由用户基本信息和登录时间等信息加密得来
  user: {  //用户基本信息
    id: string
    username: string
    name: string
    avatarId: string
    description: string
    ......
  }
}
```

* 登录成功后把用户信息保存到缓存中(Storage和GlobalData.ts).[看](https://github.com/yanxiaojun617/ionic2_tabs/blob/master/src/pages/tabs/tabs.ts)
>app每次启动从Storage获取到LoginInfo也算登录成功.[看app.component.ts](https://github.com/yanxiaojun617/ionic2_tabs/blob/master/src/app/app.component.ts)
由于有两种登录方法,所以每次登录成功都发布了一个user:login事件.在[tabs.ts](https://github.com/yanxiaojun617/ionic2_tabs/blob/master/src/pages/tabs/tabs.ts)中接收并处理user:login事件

* 每次http请求从缓存中获取access_token并添加到请求头发送到后台.后台解密access_token拿到用户信息.[看HttpService](https://github.com/yanxiaojun617/ionic2_tabs/blob/master/src/providers/HttpService.ts)
>后台也会验证access_token是否过期.如果过期前端则应该跳转到登录界面.目前这步本app还没实现
