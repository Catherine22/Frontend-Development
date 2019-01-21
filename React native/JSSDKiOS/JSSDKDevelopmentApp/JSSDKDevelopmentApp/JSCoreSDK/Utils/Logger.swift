//
//  Logger.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 21/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation

class Logger {
    static let showLog = false
    static func d (_ message: String) {
        if Logger.showLog {
            NSLog(message)
        }
    }
}
