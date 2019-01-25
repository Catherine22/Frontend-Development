//
//  NebulaModule.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 25/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation
import JavaScriptCore

public class NebulaModule {
    
    let TAG = "NebulaModule"
    let JS_RESOURCES = ["require", "testLib", "JSBridge"]
    var jsCoreDelegate: JSCoreDelegate?
    var context: JSContext?
    var jsReferences: [JSValue] = []
    
    var jsValueState = JSValueState.none {
        didSet {
            jsCoreDelegate?.jsValueDidChange(state: jsValueState)
        }
    }
    
    func injectJS() {
        jsCoreDelegate?.injectJS(resources: Constants.shared.JS_RESOURCES["NebulaModule"]!)
    }
    
    
    //    public func getVersion() -> Double {
    //        let version: JSValue = context.evaluateScript("getVersion()")
    //        return version.toDouble()
    //    }
    //
    func getUser() -> User? {
        let getUser = context?.evaluateScript("getUser")
        if let response = getUser?.call(withArguments: [""]) {
            addObjectReference(response)
            let user = User(
                name: response.forProperty("name")!.toString(),
                age: response.forProperty("age")!.toNumber()!.intValue,
                isAdult: response.forProperty("isAdult")!.toBool())
            return user
        }
        return nil
    }
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
    
    func echo(_ text: String) -> String? {
        let echo = context?.evaluateScript("echo")
        if let response = echo?.call(withArguments: [text]) {
            addObjectReference(response)
            return response.toString()
        }
        return nil
    }
    
    func ensureAppID() -> String? {
        let ensureAppID = context?.evaluateScript("ensureAppID")
        if let response = ensureAppID?.call(withArguments: [""]) {
            addObjectReference(response)
            return response.toString()
        }
        return nil
    }
    
    func addObjectReference(_ obj: JSValue) {
        jsReferences.append(obj)
        jsValueState = .none
        jsValueState = .add([obj])
    }
    
    func release() {
        jsValueState = .none
        jsValueState = .remove(jsReferences)
    }
}
