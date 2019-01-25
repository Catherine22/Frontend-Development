//
//  PlatformBridge.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 21/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation

@objc class Platform: NSObject, PlatformDelegate {
    var os: String = "iOS"
    var sdkVersion: String = Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as! String
}
