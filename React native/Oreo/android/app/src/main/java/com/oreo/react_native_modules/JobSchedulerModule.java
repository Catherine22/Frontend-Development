package com.oreo.react_native_modules;

import android.app.job.JobInfo;
import android.app.job.JobScheduler;
import android.content.ComponentName;
import android.os.Build;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.oreo.Constants;
import com.oreo.jobs.MyJobService;
import com.oreo.message_center.Client;
import com.oreo.message_center.CustomReceiver;
import com.oreo.message_center.Result;

import static android.content.Context.JOB_SCHEDULER_SERVICE;

public class JobSchedulerModule extends ReactContextBaseJavaModule {
    private final static String TAG = "JobSchedulerModule";
    private final int JOB_ID = 1;
    private Client client;

    public JobSchedulerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return TAG;
    }

    @ReactMethod
    public void start(final String eventName) {
        Log.d(TAG, "start");
        if (Build.VERSION.SDK_INT>=Build.VERSION_CODES.O){


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

            JobScheduler jobScheduler = (JobScheduler) getReactApplicationContext().getSystemService(JOB_SCHEDULER_SERVICE);
            ComponentName componentName = new ComponentName(getReactApplicationContext(),
                    MyJobService.class);
            JobInfo jobInfo = new JobInfo.Builder(JOB_ID, componentName)
                    .setRequiredNetworkType(JobInfo.NETWORK_TYPE_ANY)
                    .setRequiresBatteryNotLow(true)
                    .build();
            jobScheduler.schedule(jobInfo);
        }
    }

    @ReactMethod
    public void stop() {
        Log.d(TAG, "stop");
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            JobScheduler jobScheduler = (JobScheduler) getReactApplicationContext().getSystemService(JOB_SCHEDULER_SERVICE);
            jobScheduler.cancel(JOB_ID);
            client.release();
        }
    }
}
