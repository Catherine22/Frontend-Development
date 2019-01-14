//
//  User.swift
//  MyApp
//
//  Created by Catherine Chen (RD-TW) on 14/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import Foundation
public class User {
    public var name: String
    public var age: Int
    public var isAdult: Bool
    
    public init(name: String, age: Int, isAdult: Bool) {
        self.name = name
        self.age = age
        self.isAdult = isAdult
    }
}
