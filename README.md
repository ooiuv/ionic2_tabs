Ionic 2 App 
=====================
一个不断完善的ionic2项目,详情可关注我的博客:http://www.jianshu.com/p/6aa5a8318092/

##如何运行此app
1.  安装依赖
```bash
$ cnpm install -g ionic
```
* 运行
```bash
$ ionic serve
```
##使用高德地图
* 由于使用了高德地图,执行`ionic serve`启动后,会提示_地图加载失败..._,所以需要去[高德开发者官网](http://lbs.amap.com/dev/)申请key
* 先注册为高德地图开发者,然后申请一个__web端__key,填写到index.html中

##使用高德导航
* 要使用高德导航,需要申请android key,然后填写在plugins/com.kit.cordova.amaplocation/plugin.xml文件中
* 申请ios key,填写在plugins/com.kit.cordova.amapnavigation/plugin.xml文件中
* 注意高德导航android平台的key分debug和release版本,先申请个debug版测试先

