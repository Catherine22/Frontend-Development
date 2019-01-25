//
//  JSConsole.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 25/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation
import JavaScriptCore
@objc class JSConsole: NSObject, JSConsoleDelegate {
    let TAG = "JSConsole"
    
    func log(_ tag: String, _ message: String) {
        Logger.shared.d(tag, message)
    }
}
