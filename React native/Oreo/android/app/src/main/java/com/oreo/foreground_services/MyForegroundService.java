package com.oreo.foreground_services;

import android.app.Service;
import android.content.Intent;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;
import android.support.annotation.Nullable;
import android.util.Log;

import com.oreo.Constants;
import com.oreo.MainApplication;
import com.oreo.message_center.AsyncResponse;
import com.oreo.message_center.ErrorMessages;
import com.oreo.message_center.Server;
import com.oreo.utils.NotificationChannelsGroup;
import com.oreo.utils.NotificationUtils;

public class MyForegroundService extends Service {
    private static final String TAG = "MyForegroundService";
    private Handler handler;

    @Override
    public void onCreate() {
        super.onCreate();
        Log.d(TAG, "onCreate");

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationUtils notificationUtils = new NotificationUtils(this, NotificationChannelsGroup.CHANNELS.get(NotificationChannelsGroup.FOREGROUND_SERVICE));
            startForeground(1, notificationUtils.getServiceNotification());
        }
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Log.d(TAG, "onStartCommand");

        // LocalBroadcast
        AsyncResponse ar = new AsyncResponse() {
            @Override
            public void onFailure(int errorCode) {
                switch (errorCode) {
                    case ErrorMessages.NULL_POINTER:
                        //Action names or messages are null.
                        Log.e(TAG, "MULTIPLE_VALUE");
                        break;
                    case ErrorMessages.MULTIPLE_VALUE:
                        //You can't send multiple types of broadcast messages with same actionName at the same time, You need to rename this action.
                        Log.e(TAG, "NULL_POINTER");
                        break;
                }
            }
        };
        final Server sv = new Server(this, ar);

        // Send local broadcast per 5 seconds
        handler = new Handler(MainApplication.INSTANCE.timerThread.getLooper());
        Runnable runnable = new Runnable() {
            @Override
            public void run() {
//                Log.e(TAG, "timer:" + 1);
                sv.pushInt(Constants.MESSAGE_FROM_TIMER, 1);
                handler.postDelayed(this, 1000);
            }
        };
        handler.post(runnable);

        return super.onStartCommand(intent, flags, startId);
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        Log.d(TAG, "onBind");
        return null;
    }

    @Override
    public void onDestroy() {
        Log.d(TAG, "onDestroy");
        handler.removeCallbacksAndMessages(null);
        super.onDestroy();
    }
}