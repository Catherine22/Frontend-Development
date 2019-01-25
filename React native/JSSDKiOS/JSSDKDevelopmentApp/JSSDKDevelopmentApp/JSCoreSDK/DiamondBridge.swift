//
//  DiamondBridge.swift
//  JSCoreSDK
//
//  Created by Catherine Chen (RD-TW) on 14/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation
import JavaScriptCore

public class DiamondBridge: JSCoreDelegate {
    
    let TAG = "DiamondBridge"
    let vm = JSVirtualMachine()
    var context: JSContext?
    
    public var nebula: NebulaModule
    
    public init() {
        context = JSContext(virtualMachine: vm)
        nebula = NebulaModule()
        nebula.context = context
        nebula.jsCoreDelegate = self
        nebula.injectJS()
    }
    
    func injectJS(resources: [String]) {
        if let jsBundlePath = Bundle.main.path(forResource: Constants.shared.JS_BUNDLE, ofType: "bundle") {
            let bundle = Bundle(path: jsBundlePath)
            resources.forEach { (res) in
                if let fileURL = bundle?.url(forResource: res, withExtension: "js") {
                    do {
                        let jsCode = try NSString.init(contentsOf: fileURL, encoding: String.Encoding.utf8.rawValue)
                        // MARK: Load dependencies first
                        loadNativeModules()
                        context?.evaluateScript("\(jsCode)")
                        // print("Loaded: \(jsCode)")
                        context?.exceptionHandler = { (context, exception) in
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
        context?.setObject(unsafeBitCast(platformScript, to: AnyObject.self), forKeyedSubscript: "Platform" as NSCopying & NSObjectProtocol)
        
        // Load Storage from JS side
        let storage: @convention(block) () -> Storage = {
            return Storage()
        }
        context?.setObject(unsafeBitCast(storage, to: AnyObject.self), forKeyedSubscript: "Storage" as NSCopying & NSObjectProtocol)
        
        // Load JSLogger from JS side
        let consoleScript: @convention(block) () -> JSConsole = {
            return JSConsole()
        }
        context?.setObject(unsafeBitCast(consoleScript, to: AnyObject.self), forKeyedSubscript: "JSConsole" as NSCopying & NSObjectProtocol)
        
    }
    
    // MARK: Moniter JSValue to manage memory
    func jsValueDidChange(state: JSValueState) {
        switch state {
        case .add(let objects):
            objects.forEach { (object) in
                vm?.addManagedReference(object, withOwner: self)
            }
            break
        case .remove(let objects):
            objects.forEach { (object) in
                vm?.removeManagedReference(object, withOwner: self)
            }
            break
        default:
            break
        }
    }
}
