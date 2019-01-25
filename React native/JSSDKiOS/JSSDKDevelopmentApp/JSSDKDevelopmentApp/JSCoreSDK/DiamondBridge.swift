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
    
    let TAG = "DiamondBridge"
    let JS_BUNDLE = "JSWarehouse"
    let JS_RESOURCES = ["require", "testLib", "JSBridge"]
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
                        // MARK: Load dependencies first
                        loadNativeModules()
                        context.evaluateScript("\(jsCode)")
                        // print("Loaded: \(jsCode)")
                        context.exceptionHandler = { (context, exception) in
                            Logger.shared.d(self.TAG, "Handled exception: \(exception)")
                        }
                    } catch {
                        Logger.shared.d(TAG, "Error loading js code: \(error)")
                    }
                } else {
                    Logger.shared.d(TAG, "Error loading js code: JS bundle url not found")
                }
            }
        } else {
            Logger.shared.d(TAG, "Error loading js code: JS bundle not found")
        }
    }

    
    // MARK: Load native modules
    private func loadNativeModules() {
        // Load Platform from JS side
        /*
         let platform = Platform()
         let os = platform.os;
         */
        let platformScript: @convention(block) () -> Platform = {
            return Platform()
        }
        context.setObject(unsafeBitCast(platformScript, to: AnyObject.self), forKeyedSubscript: "Platform" as NSCopying & NSObjectProtocol)
        
        // Load Storage from JS side
        let storage: @convention(block) () -> Storage = {
            return Storage()
        }
        context.setObject(unsafeBitCast(storage, to: AnyObject.self), forKeyedSubscript: "Storage" as NSCopying & NSObjectProtocol)
        
        // Load JSLogger from JS side
        let consoleScript: @convention(block) () -> JSConsole = {
            return JSConsole()
        }
        context.setObject(unsafeBitCast(consoleScript, to: AnyObject.self), forKeyedSubscript: "JSConsole" as NSCopying & NSObjectProtocol)
        
    }
    
//    public func getVersion() -> Double {
//        let version: JSValue = context.evaluateScript("getVersion()")
//        return version.toDouble()
//    }
//
//    public func getUser() -> User {
//        let getUser = context.evaluateScript("getUser")
//        let response = getUser?.call(withArguments: [""])
//        let user = User(name: response!.forProperty("name")!.toString(), age: response!.forProperty("age")!.toNumber()!.intValue, isAdult: response!.forProperty("isAdult")!.toBool())
//        return user
//    }
//
//    public func getMembers() -> [String] {
//        let getMembers = context.evaluateScript("getMembers")
//        let response = getMembers?.call(withArguments: [""])
//        var members: [String] = []
//        for index in 0..<3 {
//            members.append(response!.atIndex(index)!.toString())
//        }
//
//        return members
//    }
    
    public func echo(_ text: String) -> String {
        let echo = context.evaluateScript("echo")
        let response = echo?.call(withArguments: [text])
        return response!.toString()
    }
    
    public func ensureAppID() -> String {
        let ensureAppID = context.evaluateScript("ensureAppID")
        let response = ensureAppID?.call(withArguments: [""])
        return response!.toString()
    }
    
    // save / load values via specific keys from both iOS and JS
    // call (static) variables and functions from JS
    // [JS / iOS side] call back from iOS / JS
    // Try JS https connection
}
