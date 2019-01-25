//
//  Constants.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 25/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation

class Constants {
    static let shared = Constants()
    
    let SHOW_LOG = true
    let KEEP_LOG = true
    
    let JS_BUNDLE = "JSWarehouse"
    let JS_RESOURCES = [
        "NebulaModule": ["Constants", "NebulaClient", "HomeController", "JSBridge"]
    ]
}
