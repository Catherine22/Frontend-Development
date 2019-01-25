//
//  Storage.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 21/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import UIKit
import CoreData

// Add Realm / UserDefault here
@objc class Storage: NSObject, StorageDelegate {
    let TAG = "Storage"
    let defaults = UserDefaults.standard
    
    func setValueForKey(key: String, value: String) {
        defaults.set(value, forKey: key)
        Logger.shared.d(TAG, "setValueForKey: \(key) -> \(value)")
    }
    
    func getValueForKey(key: String) -> String {
        let result = defaults.string(forKey: key) ?? ""
        Logger.shared.d(TAG, "getValueForKey: \(result)")
        return result
    }
    
}
