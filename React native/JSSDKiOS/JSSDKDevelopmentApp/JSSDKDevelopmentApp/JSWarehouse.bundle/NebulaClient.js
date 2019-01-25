let APP_ID = 'f623529e-2085-11e9-ab14-d663bd873d93 ';
function nebulaclient_ensureAppID(cb) {
    if (APP_ID){
        // test
        let storage = Storage();
        storage.setValueForKey(DEVICE_UUID, APP_ID);
        // test
        
        cb && cb(null, APP_ID);
        
        // test
        let console = JSConsole();
        console.log('dddd', storage.getValueForKey(DEVICE_UUID));
        return;
    }
    // Storage.getValue(Storage.KEY.DEVICE_UUID, (error, uuid)=>{
    //     if (error){
    //         cb && cb(error);
    //         return;
    //     }
    //     if (uuid && uuid.length > 0){
    //         APP_ID = uuid;
    //         cb && cb(null, uuid);
    //         return;
    //     }
    //     let newUUID = UUID.v1();
    //     console.log(TAG, 'ensureAppID new uuid:' + newUUID);
    //     Storage.setValue(Storage.KEY.DEVICE_UUID, newUUID, (error)=>{
    //         if (error){
    //             cb && cb(error);
    //             return;
    //         }
    //         APP_ID = newUUID;
    //         cb && cb(null, newUUID);
    //     });
    // });
}
