//
//  Logger.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 21/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation

class Logger {
    static let shared = Logger()
    
    private init() {
        
    }
    
    func d (_ message: String) {
        if Constants.shared.SHOW_LOG {
            NSLog(message)
        }
        persistant(message)
    }
    
    func d (_ tag: String, _ message: String) {
        let content = "[\(tag)] \(message)"
        if Constants.shared.SHOW_LOG {
            NSLog(content)
        }
        persistant(content)
    }
    
    func e (_ message: String) {
        if Constants.shared.SHOW_LOG {
            NSLog(message)
        }
        persistant(message)
    }
    
    func e (_ tag: String, _ message: String) {
        let content = "[\(tag)] \(message)"
        if Constants.shared.SHOW_LOG {
            NSLog(content)
        }
        persistant(content)
    }
    
    func persistant(_ message: String) {
        if Constants.shared.KEEP_LOG {
            // save logs
        }
    }
}
