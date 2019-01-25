//
//  NebulaModuleDelegate.swift
//  JSSDKDevelopmentApp
//
//  Created by Catherine Chen (RD-TW) on 25/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation
protocol NebulaModuleDelegate {
    func echo(_ text: String) -> String?
    func getUser() -> User?
    func ensureAppID() -> String?
}
