package com.oreo.react_native_modules;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class JobSchedulerModule extends ReactContextBaseJavaModule {
    private final static String TAG = "JobSchedulerModule";

    public JobSchedulerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return TAG;
    }

    @ReactMethod
    public void start() {
        Log.d(TAG, "start");
    }

    @ReactMethod
    public void stop() {
        Log.d(TAG, "stop");
    }
}
