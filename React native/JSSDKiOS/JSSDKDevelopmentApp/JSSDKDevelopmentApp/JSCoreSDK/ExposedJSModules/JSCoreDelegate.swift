//
//  JSCoreDelegate.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 25/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

protocol JSCoreDelegate {
    func injectJS(resources: [String])
    func jsValueDidChange(state: JSValueState)
}
