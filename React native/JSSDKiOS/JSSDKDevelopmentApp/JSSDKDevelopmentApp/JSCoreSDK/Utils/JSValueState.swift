//
//  JSValueState.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 25/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import JavaScriptCore
public enum JSValueState {
    case add([JSValue])
    case remove([JSValue])
    case none
}
