let APP_ID;
function nebulaclient_ensureAppID(cb) {
    let storage = Storage();
    let console = JSConsole();
    APP_ID = storage.getValueForKey(storage.DEVICE_UUID);
    if (APP_ID){
        cb && cb(null, APP_ID);
        return;
    } else {
        let platform = Platform();
        storage.setValue(storage.DEVICE_UUID, platform.uuid);
        APP_ID = storage.getValueForKey(storage.DEVICE_UUID);
        cb && cb(null, APP_ID);
    }
}
