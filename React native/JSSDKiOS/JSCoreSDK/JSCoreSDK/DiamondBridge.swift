//
//  DiamondBridge.swift
//  JSCoreSDK
//
//  Created by Catherine Chen (RD-TW) on 14/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation
import JavaScriptCore

class DiamondBridge {
    
    let context: JSContext! = JSContext()
    
    func injectJS() {
        let resources = ["JSBridge"]
        resources.forEach { (res) in
            let fileURL = Bundle.main.url(forResource: res, withExtension: "js")
            do {
                let jsCode = try NSString.init(contentsOf: fileURL!, encoding: String.Encoding.utf8.rawValue)
                context.evaluateScript("\(jsCode)")
                //                print("Loaded \(res): \(jsCode)")
            } catch {
                print("Error loading js code: \(error)")
            }
        }
    }
    
    func getVersion() -> Double {
        let version: JSValue = context.evaluateScript("getVersion()")
        return version.toDouble()
    }
    
    func getUser() -> User {
        let getUser = context.evaluateScript("getUser")
        let response = getUser?.call(withArguments: [""])
        let user = User(name: response!.forProperty("name")!.toString(), age: response!.forProperty("age")!.toNumber()!.intValue, isAdult: response!.forProperty("isAdult")!.toBool())
        return user
    }
    
    func getMembers() -> [String] {
        let getMembers = context.evaluateScript("getMembers")
        let response = getMembers?.call(withArguments: [""])
        var members: [String] = []
        for index in 0..<3 {
            members.append(response!.atIndex(index)!.toString())
        }
        
        return members
    }
    
    func echo(_ text: String) -> String {
        let echo = context.evaluateScript("echo")
        let response = echo?.call(withArguments: [text])
        return response!.toString()
    }
}
