//
//  DiamondBridge.swift
//  JSCoreSDK
//
//  Created by Catherine Chen (RD-TW) on 14/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation
import JavaScriptCore

public class DiamondBridge {
    
    let JS_BUNDLE = "JSWarehouse"
    let JS_RESOURCES = ["JSBridge"]
    let context: JSContext! = JSContext()
    public init() {
    }
    
    public func injectJS() {
        if let jsBundlePath = Bundle.main.path(forResource: JS_BUNDLE, ofType: "bundle") {
            let bundle = Bundle(path: jsBundlePath)
            JS_RESOURCES.forEach { (res) in
                if let fileURL = bundle?.url(forResource: res, withExtension: "js") {
                    do {
                        let jsCode = try NSString.init(contentsOf: fileURL, encoding: String.Encoding.utf8.rawValue)
                        context.evaluateScript("\(jsCode)")
                        //                    print("Loaded: \(jsCode)")
                    } catch {
                        NSLog("Error loading js code: \(error)")
                    }
                } else {
                    NSLog("Error loading js code: JS bundle url not found")
                }
            }
        } else {
            NSLog("Error loading js code: JS bundle not found")
        }
    }
    
    public func getVersion() -> Double {
        let version: JSValue = context.evaluateScript("getVersion()")
        return version.toDouble()
    }
    
    public func getUser() -> User {
        let getUser = context.evaluateScript("getUser")
        let response = getUser?.call(withArguments: [""])
        let user = User(name: response!.forProperty("name")!.toString(), age: response!.forProperty("age")!.toNumber()!.intValue, isAdult: response!.forProperty("isAdult")!.toBool())
        return user
    }
    
    public func getMembers() -> [String] {
        let getMembers = context.evaluateScript("getMembers")
        let response = getMembers?.call(withArguments: [""])
        var members: [String] = []
        for index in 0..<3 {
            members.append(response!.atIndex(index)!.toString())
        }
        
        return members
    }
    
    public func echo(_ text: String) -> String {
        let echo = context.evaluateScript("echo")
        let response = echo?.call(withArguments: [text])
        return response!.toString()
    }
}
