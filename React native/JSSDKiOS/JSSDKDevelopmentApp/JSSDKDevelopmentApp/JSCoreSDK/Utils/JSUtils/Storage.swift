//
//  Storage.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 21/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation

// Add Realm / UserDefault here
@objc class Storage: NSObject, StorageDelegate {
    let TAG = "Storage"
    func setValueForKey(key: String, value: String) {
        Logger.shared.d(TAG, "setValueForKey: \(key) -> \(value)")
    }
    
    func getValueForKey(key: String) {
        Logger.shared.d(TAG, "getValueForKey: \(key)")
    }
    
}
