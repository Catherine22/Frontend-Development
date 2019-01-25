//
//  JSConsoleDelegate.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 25/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation
import JavaScriptCore

@objc protocol JSConsoleDelegate: JSExport {
    func log(_ tag: String, _ message: String)
}
