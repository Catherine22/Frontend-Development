//
//  StorageDelegate.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 21/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation
import JavaScriptCore

@objc protocol StorageDelegate: JSExport {
    func setValueForKey(key: String, value: String)
    func getValueForKey(key: String)
}
