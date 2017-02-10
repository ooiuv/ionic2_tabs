Ionic 2 App 
=====================
一个不断完善的ionic2项目,详情可查看:http://www.jianshu.com/c/be0bf998dcb5

##如何运行此app
1.  先保证app开发环境配置好,可以参考[这里](http://www.jianshu.com/p/1f1205602ce0)
* 进入app目录执行命令`cnpm install`,安装app依赖
* 依赖安装完整执行命令`ionic serve`运行app,更多详情可以参考[这里](http://www.jianshu.com/p/836392297eb9)  

##使用高德地图
* 由于使用了高德地图,执行`ionic serve`启动后,会提示_地图加载失败..._,所以需要去[高德开发者官网](http://lbs.amap.com/dev/)申请地图key
* 先注册为高德地图开发者,然后申请一个__web端__key,填写到index.html中

##使用高德导航
* 要使用高德导航,需要申请android key,然后填写在plugins/com.kit.cordova.amaplocation/plugin.xml文件中
* 申请ios key,填写在plugins/com.kit.cordova.amapnavigation/plugin.xml文件中
* 如果不需要高德导航就把插件`com.kit.cordova.amaplocation`和`com.kit.cordova.amapnavigation`删除掉,使用导航功能会使app增加4M
* 注意高德导航android平台的key分debug和release版本

