let appIDCallbacks = [];
function appIDCallback(err, appID){
    if (!err && appID){
        // ubm
        // setAppID(appID);
    }
    appIDCallbacks.forEach((cb)=>{
                           cb(err, appID);
                           });
    appIDCallbacks = [];
}

function homecontroller_ensureAppID(cb) {
    // console.log(TAG, 'ensureAppID waiting:' + appIDCallbacks.length);
    if (appIDCallbacks.indexOf(cb) === -1){
        appIDCallbacks.push(cb);
    }
    if (appIDCallbacks.length === 1){
        nebulaclient_ensureAppID(appIDCallback);
    }
}
