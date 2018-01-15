package com.kit.cordova.AMapLocation;

import java.util.Locale;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;

import com.amap.api.location.AMapLocation;
import com.amap.api.location.AMapLocationClient;
import com.amap.api.location.AMapLocationClientOption;
import com.amap.api.location.AMapLocationClientOption.AMapLocationMode;
import com.amap.api.location.AMapLocationListener;

public class LocationPlugin extends CordovaPlugin {

	private static final String ACTION_GETLOCATION = "getlocation";

	private AMapLocationClient locationClient = null;
	private AMapLocationClientOption locationOption = null;

	private CallbackContext callbackContext = null;
	private KITLocation kitLocation = new KITLocation();
	private Context context;

	@Override
	public void initialize(CordovaInterface cordova, CordovaWebView webView) {
		context = this.cordova.getActivity().getApplicationContext();
		super.initialize(cordova, webView);
	}

	@Override
	public void onDestroy() {
		super.onDestroy();
	}

	@Override
	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) throws JSONException {
		this.callbackContext = callbackContext;
		if (ACTION_GETLOCATION.equals(action.toLowerCase(Locale.CHINA))) {
			kitLocation.startSingleLocation(context);
			PluginResult r = new PluginResult(PluginResult.Status.NO_RESULT);
			r.setKeepCallback(true);
			callbackContext.sendPluginResult(r);
			return true;
		}
		return false;
	}

	public class KITLocation implements AMapLocationListener {
		@Override
		public void onLocationChanged(AMapLocation amapLocation) {
      if (amapLocation != null && amapLocation.getErrorCode() == 0) {
        int locationType = amapLocation.getLocationType();//获取当前定位结果来源 定位类型对照表: http://lbs.amap.com/api/android-location-sdk/guide/utilities/location-type/
        Double latitude = amapLocation.getLatitude();//获取纬度
        Double longitude = amapLocation.getLongitude();//获取经度
        boolean hasAccuracy = amapLocation.hasAccuracy();
        float accuracy = amapLocation.getAccuracy();//获取精度信息
        String address = amapLocation.getAddress();//地址，如果option中设置isNeedAddress为false，则没有此结果，网络定位结果中会有地址信息，GPS定位不返回地址信息。
        String country = amapLocation.getCountry();//国家信息
        String province = amapLocation.getProvince();//省信息
        String city = amapLocation.getCity();//城市信息
        String district = amapLocation.getDistrict();//城区信息
        String street = amapLocation.getStreet();//街道信息
        String cityCode = amapLocation.getCityCode();//城市编码
        String adCode = amapLocation.getAdCode();//地区编码
        String aoiName = amapLocation.getAoiName();//获取当前定位点的AOI信息
        float speed = amapLocation.getSpeed(); // 速度
        float bearing = amapLocation.getBearing();// 角度
        long time = amapLocation.getTime();  // 时间
        JSONObject jo = new JSONObject();
        try {
          jo.put("locationType", locationType);
          jo.put("latitude", latitude);
          jo.put("longitude", longitude);
          jo.put("locationType", locationType);
          jo.put("hasAccuracy", hasAccuracy);
          jo.put("accuracy", accuracy);
          jo.put("address", address);
          jo.put("country", country);
          jo.put("province", province);
          jo.put("city", city);
          jo.put("district", district);
          jo.put("street", street);
          jo.put("cityCode", cityCode);
          jo.put("adCode", adCode);
          jo.put("aoiName", aoiName);
          jo.put("speed", speed);
          jo.put("bearing", bearing);
          jo.put("time", time);
        } catch (JSONException e) {
          jo = null;
          e.printStackTrace();
        }
        callbackContext.success(jo);
      } else {
        callbackContext.error(amapLocation.getErrorInfo());
      }
    }

		public void startSingleLocation(Context context) {
			locationClient = new AMapLocationClient(context);
			locationOption = new AMapLocationClientOption();
           /*
                                           低功耗   Battery_Saving
			高精度   Hight_Accuracy
			GPS    Device_Sensors
			*/
			// 设置定位模式为高精度模式
			locationOption.setLocationMode(AMapLocationMode.Hight_Accuracy);
			// 设置定位监听
			locationClient.setLocationListener(this);
			// 设置为单次定位
			locationOption.setOnceLocation(true);
			// 设置定位参数
			locationClient.setLocationOption(locationOption);
			// 启动定位
			locationClient.startLocation();

		}
	}

}
