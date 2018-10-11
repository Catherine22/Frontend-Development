package com.oreo.react_native_modules;

import android.content.Intent;
import android.os.Build;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.oreo.Constants;
import com.oreo.foreground_services.MyForegroundService;
import com.oreo.message_center.Client;
import com.oreo.message_center.CustomReceiver;
import com.oreo.message_center.Result;

public class ForegroundServiceModule extends ReactContextBaseJavaModule {
    private final static String TAG = "ForegroundServiceModule";
    private Client client;

    public ForegroundServiceModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return TAG;
    }

    @ReactMethod
    public void start(final String eventName) {
        Log.d(TAG, "start");
        Toast.makeText(getReactApplicationContext(), "Start Service", Toast.LENGTH_SHORT).show();

        // LocalBroadcast
        CustomReceiver cr = new CustomReceiver() {
            @Override
            public void onBroadcastReceive(Result result) {
                //Use getInt(), getBundle()...ect, depending on what your server side sends
                int sec = result.getInt();
//                Log.d(TAG, "I got:" + sec);
                getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, sec);

            }
        };
        client = new Client(getReactApplicationContext(), cr);
        client.gotMessages(Constants.MESSAGE_FROM_TIMER);

        // Start service
        Intent intent = new Intent(getReactApplicationContext(), MyForegroundService.class);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O)
            getReactApplicationContext().startForegroundService(intent);
        else
            getReactApplicationContext().startService(intent);
    }

    @ReactMethod
    public void stop() {
        Log.d(TAG, "stop");
        Toast.makeText(getReactApplicationContext(), "Stop Service", Toast.LENGTH_SHORT).show();
        Intent intent = new Intent(getReactApplicationContext(), MyForegroundService.class);
        getReactApplicationContext().stopService(intent);
        client.release();
    }
}
