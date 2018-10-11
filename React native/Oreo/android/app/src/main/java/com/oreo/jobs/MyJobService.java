package com.oreo.jobs;

import android.app.job.JobParameters;
import android.app.job.JobService;
import android.os.Handler;
import android.util.Log;

import com.oreo.Constants;
import com.oreo.MainApplication;
import com.oreo.message_center.AsyncResponse;
import com.oreo.message_center.ErrorMessages;
import com.oreo.message_center.Server;

public class MyJobService extends JobService {
    private final static String TAG = "MyJobService";
    private Handler handler;
    @Override
    public boolean onStartJob(JobParameters params) {
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
        return false;
    }

    @Override
    public boolean onStopJob(JobParameters params) {
        handler.removeCallbacksAndMessages(null);
        return false;
    }
}
